const MongoClient = require('mongodb').MongoClient;
const dbPath = require('../config').dbPath;

class DB {
    
    constructor(dbPath) {
        MongoClient.connect(dbPath)
            .then(db => {
                this._db = db;
                console.log('Connected to MongoDB');
            })
            .catch(err => console.log('Cannot connect to Mongo ', err));
    }
    
    get() {
        return this._db;
    }
}

module.exports = new DB(dbPath);