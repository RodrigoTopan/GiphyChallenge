const request = require('request');
const { promisify } = require('util');
const requestAsync = promisify(request);
const apiConnect = 'https://api.giphy.com/v1/gifs/search?api_key=5gJ7LSmX6eJG3q7XQV8hktsxYgwAvUL7&q=Programmer&limit=25&offset=0&rating=G&lang=en';
//Consumindo API com callback

function callbackResponse(callback) {
    request(apiConnect, (err, resp) => {
        if (err) {
            console.log(err);
            return callback(err);
        }
        const { data } = JSON.parse(resp.body);
        //console.log(data[0].embed_url);
        return callback(null, data);
    })
};

//Consumindo API com promises
function promiseResponse() {
    return requestAsync(apiConnect)
        .then((resp) => {
            const { data } = JSON.parse(resp.body);
            //console.log(data[0].embed_url);
            return data;
        })
        .catch((err) => {
            //console.log(err);
            return err;
        });
}

//Consumindo API com Async Await
async function asyncResponse() {
    const resp = await requestAsync(apiConnect);
    const { data } = JSON.parse(resp.body);
    //console.log(data[0].embed_url);
    return data;
}


/*
Executando funções com async await
; (async () => {
    const asyncRespo = await asyncResponse();
    console.log(asyncRespo);
})();*/

//Executando funções com callback
/*callbackResponse((err, resp) => {
    console.log(resp);
});*/

//Executando promise
//promiseResponse().then(resp => console.log(resp));

module.exports = {
    callbackResponse,
    promiseResponse,
    asyncResponse
}