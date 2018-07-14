// Make Sure You execute the script in the scripts directory
const { exec } = require('child_process');

const dir = process.argv[2];

exec(
  `mkdir ../${dir}; 
   touch ../${dir}/controller.js;
   touch ../${dir}/model.js;
   touch ../${dir}/routes.js;
   touch ../${dir}/test.spec.js;`,
  (err) => {
    if (err) {
      console.log(err);
    }
  },
);
