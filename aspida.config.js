require('dotenv').config({ path: '.env.local' });

module.exports = {
  input: 'api',
  outputEachDir: true,
  openapi: {
    inputFile: process.env.SCHEMA_URL,
    outputDir: 'src/api',
  },
};
