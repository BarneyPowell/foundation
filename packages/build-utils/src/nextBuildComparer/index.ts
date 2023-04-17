import { readFile } from 'fs/promises';
import { NextBuildComparerOptions } from './types';

export type { NextBuildComparerOptions } from './types';

export type BuildAsset = {
  label: string;
  statSize: number;
  parsedSize: number;
  gzipSize: number;
  isInitialByEntrypoint: { [index: string]: boolean };
};

export type Entrypoint = {
  name: string;
  totalStatSize: number;
  totalParsedSize: number;
  totalGzipSize: number;
  assets: BuildAsset[];
};

export type EntrypointsByKey = {
  [index: string]: Entrypoint;
};

const loadBuildAssets = async (path: string) => {
  const file = await readFile(path, 'utf8');
  return JSON.parse(file) as BuildAsset[];
};

const calculateEntrypointSizes = (bundles: BuildAsset[]): EntrypointsByKey => {
  const entrypoints: EntrypointsByKey = {};

  for (let x = 0; x < bundles.length; x + 1) {
    const { isInitialByEntrypoint, statSize, parsedSize, gzipSize } =
      bundles[x];

    const entrypointKeys = Object.keys(isInitialByEntrypoint);
    entrypointKeys.forEach((key: string) => {
      if (!isInitialByEntrypoint[key]) return;
      entrypoints[key] ||= {
        name: key,
        assets: [],
        totalGzipSize: 0,
        totalParsedSize: 0,
        totalStatSize: 0,
      };

      const entrypoint = entrypoints[key];
      entrypoint.totalGzipSize += gzipSize;
      entrypoint.totalStatSize += statSize;
      entrypoint.totalParsedSize += parsedSize;
      entrypoint.assets.push(bundles[x]);
      entrypoints[key] = entrypoint;
    });
  }

  return entrypoints;
};

const generateTable = (entrypoints: EntrypointsByKey): string => {
  let output = '';

  // header row
  output += `| Entrypoint | Initial gzipped total |`;
  output += `| --- | --- |`;

  Object.keys(entrypoints).forEach((key) => {
    const entrypoint = entrypoints[key];

    output += `| ${entrypoint.name} | ${entrypoint.totalGzipSize} |`;
  });

  return output;
};

const nextBuildComparer = async (options: NextBuildComparerOptions) => {
  const { currentBuildJsonPath } = options;
  const currentBundles = await loadBuildAssets(currentBuildJsonPath);
  const entrypoints = calculateEntrypointSizes(currentBundles);
  return generateTable(entrypoints);
};

export { nextBuildComparer };
