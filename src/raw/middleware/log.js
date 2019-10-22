const log = (ctx) => {
  ctx.state.log = `${ctx.method} ${ctx.origin} ${ctx.url} \n ${JSON.stringify(ctx.header, null, 2)}`;
}

module.exports = () => {
  return async (ctx, next) => {
    log(ctx);
    await next();
  }
}
