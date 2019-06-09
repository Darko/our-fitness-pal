import { ConnectionOptions } from 'mongoose';

interface Mongoose {
  name: string,
  uri: string,
  options?: ConnectionOptions
}

interface Config {
  port: Number,
  mongoose: Mongoose,
}

const config: Config = {
  port: Number(process.env.PORT) || 8082,
  mongoose: {
    name: 'Our Fitness Pal',
    uri: process.env.MONGO || 'mongodb://localhost/our-fitness-pal',
    options: {
      autoIndex: true,
      useNewUrlParser: true,
      useCreateIndex: true
    }
  }
}

export default config;