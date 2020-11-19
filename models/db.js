const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ProductDB', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeessful.') }
    else { console.log('Error in Database connection : ' + err) }
});

require('./category.model');