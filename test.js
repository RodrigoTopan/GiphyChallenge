const { deepEqual } = require('assert');
const { callbackResponse, promiseResponse, asyncResponse } = require('./index.js');

describe('Teste de imagem Gif', () => {
    it('Pesquisando com Callback', (done) => {
        callbackResponse((error, giphy) => {
            const expected = {
                "fixed_height_still":
                    {
                        "url": "https://media2.giphy.com/media/11ZSwQNWba4YF2/200_s.gif",
                        "width": "103",
                        "height": "200",
                        "size": "5175"
                    }
            }
            const { images } = giphy[0];
            const { fixed_height_still } = images;
            deepEqual(fixed_height_still, expected)
            done();
        })
    });

    it('Pesquisando com Promise', () => {
        const expected = {
            "fixed_height_still":
                {
                    "url": "https://media2.giphy.com/media/11ZSwQNWba4YF2/200_s.gif",
                    "width": "103",
                    "height": "200",
                    "size": "5175"
                }
        }
        promiseResponse().then(giphy => {
            const { images } = giphy[0];
            const { fixed_height_still } = images;
            deepEqual(fixed_height_still, expected);
        })
    });

    it('Pesquisando com Async Await', async () => {
        const expected = {
            "fixed_height_still":
                {
                    "url": "https://media2.giphy.com/media/11ZSwQNWba4YF2/200_s.gif",
                    "width": "103",
                    "height": "200",
                    "size": "5175"
                }
        }
        const giphy = await asyncResponse();
        const { images } = giphy[0];
        const { fixed_height_still } = images;
        deepEqual(fixed_height_still, expected);
    });
});