module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6b66e73252db62a5b27c028c0d43a395'),
  },
});
