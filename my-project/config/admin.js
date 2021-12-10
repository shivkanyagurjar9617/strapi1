module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b01e24957759572ab4dc82ac1b30c560'),
  },
});
