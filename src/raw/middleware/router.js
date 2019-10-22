const path = require('path');
const fs = require('fs');

const route = async (path) => {
  let view = '';
  switch(path) {
    case '/':
    case '/index':
    case '/index.html':
      view = 'index.html';
      break;
    case '/todo':
    case '/todo.html':
      view = 'todo.html';
      break;
    default:
      view = '404.html';
  }

  let data = await readHtmlFile(view);
  return data;
}

const readHtmlFile = (fileName) => {
  return new Promise((resolve, reject) => {
    let fullPath = path.resolve(__dirname, '../../static/html', fileName);
    fs.readFile(fullPath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    })
  })
}

module.exports = () => {
  return async (ctx) => {
    let html = await route(ctx.path);
    ctx.body = html;
  }
}
