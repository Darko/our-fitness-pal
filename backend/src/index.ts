import app from './app';
import config from './config';
import './mongo';
import './routes';

app.listen(config.port, () => {
  console.clear();
  console.log(`Example app listening on port ${config.port}!`)
});