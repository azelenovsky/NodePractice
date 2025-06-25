const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://drez:drez123@cluster0.buc3xqt.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let _db;


const mongoConnect = callback => {
    
    client.connect()
        .then(client => {console.log("Connected to Mongo!");
        _db = client.db();
        callback();
    })
    .catch(err => {
        console.log(err);
        throw err;
    });
};

const getDb = () => {
    if (_db) {
        return _db;
    }
    throw "No database found!"
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;