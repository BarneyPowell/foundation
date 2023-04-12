import { nextBuildComparer } from '@foundation/build-utils/nextBuildComparer';


const currentBuildJsonPath = './.next/analyze/client.json';



const main = async () => {


  const data = await nextBuildComparer({
    currentBuildJsonPath
  });

  console.log(data);

};



main();
