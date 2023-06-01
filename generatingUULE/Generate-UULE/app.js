// const axios = require('axios')
// const url = 'http://checkip.amazonaws.com/';
let response;

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */

const createUule = require('create-uule');
exports.lambdaHandler = async (event, context) => {
  try {
    console.log(event);
    let response='';

    console.log(JSON.parse(event.body));
    const location = JSON.parse(event.body).location;
    const q = JSON.parse(event.body).q;
    const gl = JSON.parse(event.body).gl;
    const hl = JSON.parse(event.body).hl;
    const gws_rd = JSON.parse(event.body).gws_rd;
    const pws = JSON.parse(event.body).pws;
    //const uule = createUule(location);
    //Add code below to convert the above location to the specific format
    const uule = createUule(location);
    //res.send(`https://www.google.com/search?q=digital+marketing+agency&gl=us&hl=en&gws_rd=cr&pws=0&uule=${uule}`);
    // console.log(`https://www.google.com/search?q=digital+marketing+agency&gl=us&hl=en&gws_rd=cr&pws=0&uule=${uule}`);

     response = {
      statusCode: 200,
      body: JSON.stringify({
        message:
        `https://www.google.com/search?q=${q}&gl=${gl}&hl=${hl}&gws_rd=${gws_rd}&pws=${pws}&uule=${uule}`
        
          
        // location: ret.data.trim()
      }),
    };
    return response;
} catch (err) {
    console.log(err);
    return err;
  }

  
};
