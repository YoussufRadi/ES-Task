// Make Sure You execute the script in the scripts directory
const { exec } = require('child_process');

const dir = process.argv[2];

exec(
  `mkdir ../backend/${dir}; 
   touch ../backend/${dir}/controller.js;
   touch ../backend/${dir}/model.js;
   touch ../backend/${dir}/routes.js;
   touch ../backend/${dir}/test.spec.js;`,
  err => {
    if (err) {
      console.log(err);
    }
  },
);
