import mongoose, { connect } from 'mongoose';
import config from './config';

connect(config.mongoose.uri, config.mongoose.options);