const express = require('express');
const mongoose = require("mongoose");
const redis = require("redis");
const { Client } = require('pg'); // استدعاء مكتبة postgres

// init app
const PORT = process.env.PORT || 4000;

const app = express();

app.get('/', (req, res) => res.send('<h1>Hello ali aaa  </h1>'));

app.listen(PORT, () => console.log(`app is up and running on port: ${PORT}`));

// ==========================================
// connect database (MongoDB - Commented Out)
// ==========================================
const mongo_user ='root';
const mongo_password ='12345'; 
const mongo_port =27017;
const mongo_host ='mongo';
const mongo_uri =`mongodb://${mongo_user}:${mongo_password}@${mongo_host}:${mongo_port}`;
mongoose.connect(mongo_uri)
  .then(() => console.log('connect to mongo db..'))
  .catch((err) => console.log('failed to connect to mongo db: ',err));


// ==========================================
// connect to redis
// ==========================================
const REDIS_PORT = 6379;
const REDIS_HOST = 'redis';

const redisClient = redis.createClient({
  url: `redis://${REDIS_HOST}:${REDIS_PORT}`
});

redisClient.on('error', (err) => console.log('Redis Client Error', err));
redisClient.on('connect', () => console.log('connected to redis...'));
redisClient.connect();


// ==========================================
// connect database (PostgreSQL)
// ==========================================
// const pg_user ='root';
// const pg_password ='12345'; 
// const pg_port =5432;
// const pg_host ='postgress';

// const pg_uri =`postgresql://${pg_user}:${pg_password}@${pg_host}:${pg_port}`;

// const client = new Client({
//   connectionString:pg_uri ,
// });

// client.connect()
//   .then(() => console.log('connected to postgres db..'))
//   .catch((err) => console.log('failed to connect to postgres db: ',err));