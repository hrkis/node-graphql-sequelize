require('dotenv').config();

const server = require('./backend/logic');

const port = process.env.PORT || 3501;

process.on('uncaughtException', (err) => {
  console.log( err);
  process.exit(0);
});


process.on('unhandledRejection', (err) => {
  console.log(err);
});


server.listen({ port }, () => console.log(
  `🚀 Server running at http://localhost:${port}/api`,
));

