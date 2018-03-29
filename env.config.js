const prod = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.BACKEND_URL': prod ? 'https://api.bitbrackets.io' : 'http://localhost:3001'
}