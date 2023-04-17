import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

// import type { Options } from './plugin/interfaces/Options';
// import { getInternalOptions } from './plugin/utils/getInternalOptions';

// export type {
//   BuildStats,
//   ChunkGroup,
//   CommonChunk,
//   Page,
// } from './interfaces/BuildStats';

export type NextBundleAnalyzerOptions = BundleAnalyzerPlugin.Options & {
  enabled: boolean;
  openAnalyzer: boolean;
};

export const withNextBundleAnalyzer = (options: NextBundleAnalyzerOptions) => {
  const { enabled } = options;
  // const internalOptions = getInternalOptions(options);
  // const { clientOnly, enabled, reportDir } = internalOptions;
  // let { reportFilename } = internalOptions;

  return (nextConfig: any = {}) => ({
    ...nextConfig,
    webpack(webpackConfig: any, webpackOptions: any) {
      // const { isServer } = webpackOptions;
      if (enabled) {
        const filenameExt = options.analyzerMode === 'json' ? '.json' : '.html';

        const analyzerMode = 'static';
        const reportFilename = !webpackOptions.nextRuntime
          ? `./analyze/client${filenameExt}`
          : `../${webpackOptions.nextRuntime === 'nodejs' ? '../' : ''
          }analyze/${webpackOptions.nextRuntime}${filenameExt}`;

        webpackConfig.plugins.push(
          new BundleAnalyzerPlugin({
            analyzerMode,
            reportFilename,
            ...options,
          })
        );
      }

      return typeof nextConfig.webpack === 'function'
        ? nextConfig.webpack(webpackConfig, webpackOptions)
        : webpackConfig;
    },
  });
};
