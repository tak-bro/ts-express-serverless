import app from './app';
import serverlessHttp from 'serverless-http';

module.exports.handler = serverlessHttp(app);
