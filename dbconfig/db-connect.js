let MongoClient=require('mongodb').MongoClient;

let state={
    db:null,
};

module.exports.connect=function (done) {


    const url='mongodb://localhost:27017';

    const dbName ='shopping';

    const client = new MongoClient(url,{useNewUrlParser: true});

    client.connect(function (err) {
        if (err) return done(err);

        console.log("Connected successfully to Database");

        const dbs=client.db(dbName);
        state.db=dbs;
        done();

    });

    module.exports.get=function () {
        return state.db;

    };


}