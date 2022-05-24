const dev = {
    apiBaseUrl: 'https://1hbrnkz65g.execute-api.us-east-1.amazonaws.com/dev'
};

const qa = {
    apiBaseUrl: 'https://crt6gkifa1.execute-api.us-east-1.amazonaws.com'
};

const prod = {
    apiBaseUrl: 'https://crt6gkifa1.execute-api.us-east-1.amazonaws.com'
};

let config;

const env = process.env.REACT_APP_STAGE;
if (env === 'dev') config = dev;
if (env === 'qa') config = qa;
if (env === 'prod') config = prod;

if (!config) throw new Error("Invalid environment: " + env);

export default config;