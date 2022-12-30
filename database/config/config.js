require('dotenv').config();

module.exports = {
  development: {
    username: 'postgres',
    password: '',
    database: '',
    host: '127.0.0.1',
    dialect: 'postgres',
  
  },
  test_env: {
    username: 'postgres',
    password: '',
    database: '',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  
};

