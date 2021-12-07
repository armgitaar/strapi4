const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: process.env.DATABASE_HOST || '127.0.0.1',
      port: process.env.DATABASE_PORT || 5432,
      database: process.env.DATABASE_NAME || 'strapi',
      user: process.env.DATABASE_USERNAME || 'strapi',
      password: process.env.DATABASE_PASSWORD || 'strapi',
      ssl: {
        rejectUnauthorized: process.env.DATABASE_SSL_SELF || false, // For self-signed certificates
      },
    },
    debug: false,
  },
});
