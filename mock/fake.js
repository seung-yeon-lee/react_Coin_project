const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const port = 4000;

server.use(middlewares);
server.use((req, res) => {
  res.status(500).jsonp({
    errorMessage: 'Check the Error Message',
  });
});

server.listen(port);

// const params = {
//   code: '',
//   current: 0,
//   result: 'result',
// };

// const clear = Object.entries(params)
// .filter(([key,value]) => value !== '')
// .reduce((obj,[key,value]) => ({ ...obj, [key]:value}), {})
