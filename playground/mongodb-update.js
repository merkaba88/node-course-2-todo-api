// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB Server');

  //findOneAndUpdate
  // db.collection('Todos')
  //   .findOneAndUpdate({
  //     _id: new ObjectID('58e3bb82d5152c84db8bfa8d')
  //   }, {
  //     $set: {
  //       completed: true
  //     }
  //   }, {
  //     returnOriginal: false
  //   })
  //   .then((result) => {
  //     console.log(result);
  //   });

  db.collection('Users')
    .findOneAndUpdate({
      _id: new ObjectID('58e3b1f2ebc2f724a4f3b99f')
    }, {
      $set: {
        name: 'Daniel'
      },
      $inc: {
        age: 1
      }
    }, {
      returnOriginal: false
    })
    .then((result) => {
      console.log(result);
    });
  // db.close();
});
