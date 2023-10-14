import MongoClient from 'mongodb';
const url         = 'mongodb://mongo:27017/dockerize-me';
let db            = null;
 
// connect to mongo
MongoClient.connect(url, {useUnifiedTopology: true}, function(err, client) {
    console.log("Connected successfully to db server");
    // connect to myproject database
    db = client.db('dockerize-me');
});

// create user account
function create(name, email, password){
    return new Promise((resolve, reject) => {    
        const collection = db.collection('users');
        const doc = {name, email, password, balance: 0};
        collection.insertOne(doc, {w:1}, function(err, result) {
            err ? reject(err) : resolve(doc);
        });    
    })
}

// find user account
function find(email){
    return new Promise((resolve, reject) => {    
        const customers = db
            .collection('users')
            .find({email: email})
            .toArray(function(err, docs) {
                err ? reject(err) : resolve(docs);
        });    
    })
}

// find user account
function login(email, password){
    return new Promise((resolve, reject) => {    
        const customers = db
            .collection('users')
            .findOne({email: email})
            .then((doc) => {
                resolve(doc);
                console.log(doc);
                console.log('Email found');
            })
            .catch((err) => {
                reject(err);
                console.log('Email not found');
            });    
    })
}

// update - deposit/withdraw amount
function update(email, amount){
    return new Promise((resolve, reject) => {    
        const customers = db
            .collection('users')            
            .findOneAndUpdate(
                {email: email},
                { $inc: { balance: amount}},
                { returnOriginal: false },
                function (err, documents) {
                    err ? reject(err) : resolve(documents);
                }
            );            
    });    
}

// all users
function allUsers(){
    return new Promise((resolve, reject) => {    
        const customers = db
            .collection('users')
            .find({})
            .toArray(function(err, docs) {
                err ? reject(err) : resolve(docs);
        });    
    })
}


export {create, allUsers, find, login, update};