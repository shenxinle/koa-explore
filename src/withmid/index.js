const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/', (ctx, next) => {
  ctx.body = 'Hello Router!';
});

router.get('/', (ctx, next) => {
  ctx.body = 'Hello Router!';
});

app.use(router.routes());
app.listen(3006);

console.log('koa server start at port: 3006');
