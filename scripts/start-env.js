require('dotenv').config();
const cli = require('next/dist/cli/next-start');

cli.nextStart({
  port: process.env.PORT || 6000,
  hostname: process.env.HOSTNAME || '0.0.0.0',
});
