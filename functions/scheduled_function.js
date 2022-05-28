// To learn about scheduled functions and supported cron extensions,
// see: https://ntl.fyi/sched-func
const nodeCmd = require('node-cmd');

module.exports.handler = async() => {
  nodeCmd.run('npm run build', (err, data, stderr) => {
    console.log(err);
    console.log(data);
  });
  return {
    statusCode: 200,
    body: ""
  }
}
