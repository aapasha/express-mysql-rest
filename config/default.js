module.exports = {
    PORT: process.env.PORT || 3001,
    DB_HOST: process.env.DB_HOST || '127.0.0.1',
    DB_PORT: process.env.DB_PORT || '',
    DB_USERNAME: process.env.DB_USERNAME || 'root',
    DB_USERNAME_PASSWORD: process.env.DB_USERNAME_PASSWORD || 'root123',
    DB_NAME: process.env.DB_NAME || 'dailyquote',
};
