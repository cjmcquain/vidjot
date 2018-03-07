if(process.env.NODE_ENV === 'production'){
  module.exports = {mongoURI: 
    'mongodb://admin:123456@ds259778.mlab.com:59778/vidjot-prod'}
} else {
  module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}