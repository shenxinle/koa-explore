const Koa = require('koa');
const log = require('./middleware/log');
const router = require('./middleware/router');

const app = new Koa();

app.use(log());
app.use(router());
// app.use(async (ctx, next) => {
//   ctx.body = `Hello Koa2! \n\n ${ctx.state.log}`;
// });
app.listen(3005);

console.log('koa server start at port: 3005');
