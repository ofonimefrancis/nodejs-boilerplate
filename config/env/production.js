const production = {
    DATABASE_URL: process.env.NODEJS_BOILERPLATE_PROD_DATABASE_URL,
    DOMAIN: 'http://localhost:4000/v1',
    JWT_SECRET: process.env.NODEJS_BOILERPLATE_PROD_JWT_SECRET,
};

export default production;