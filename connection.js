const mongoose = require("mongoose");

async function getConnection (url) {

    await mongoose.connect(url);
    
}

module.exports = getConnection;