module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '930e349ca7487d1544788aa9bfc67a41'),
  },
});
