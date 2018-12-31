const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'reviews',
});

const getReviews = (listingId, callback) => {
  console.log('db', listingId)
  const query = 'SELECT * FROM reviews WHERE listing = ? limit 6'  
  const params = listingId

  connection.query(query, params, (err, data) => {
    if (err) {
      callback(err)
    } else {
      callback(data)
    }
  });
};

module.exports = {
  getReviews,
}