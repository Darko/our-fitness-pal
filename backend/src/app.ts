// lib/app.ts
import express from 'express';
import cors  from 'cors';
import bodyParser from 'body-parser';
import logger from './middleware/logger';

const corsOptions = {
  origin: function (origin:string, callback:any) {
    callback(null, true);
  }
}

// Create a new express application instance
const app: express.Application = express();

app.use(logger);
app.use(bodyParser.json());
app.use(cors(corsOptions));

export default app;
