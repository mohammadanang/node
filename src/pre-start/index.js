const path = require('path');
const dotenv = require('dotenv');
const commandLineArgs = require('command-line-args');

const start = () => {
  // Setup command line options
  const options = commandLineArgs([
    {
      name: 'env',
      alias: 'e',
      defaultValue: 'development',
      type: String,
    },
  ]);
  // Set the env file
  const result = dotenv.config({
    path: path.join(__dirname, `env/${options.env}.env`),
  });
  if (result.error) {
    throw result.error;
  }
};

module.exports = start;
