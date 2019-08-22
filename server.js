const jsreport = require("./")({
  rootDirectory: __dirname,
  appPath: "/jsreport",
  mountOnAppPath: true
});

if (process.env.JSREPORT_CLI) {
  module.exports = jsreport;
} else {
  jsreport
    .init()
    .then(() => {})
    .catch(e => {
      console.trace(e);
      process.exit(1);
    });
}
