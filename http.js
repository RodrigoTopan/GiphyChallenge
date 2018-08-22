const http = require('http');
const ejs = require('ejs');
const { callbackResponse, promiseResponse, asyncResponse } = require('./index.js');
const { join } = require('path');
const { promisify } = require('util');
const ejsRenderAsync = promisify(ejs.renderFile);

http.createServer(async (req, res) => {
    const giphy = await asyncResponse();
    const giphyPage = await ejsRenderAsync(join(__dirname, 'giphy.ejs'), { giphy });
    res.end(giphyPage);
}).listen(3000, () => {
    console.log('running');
});