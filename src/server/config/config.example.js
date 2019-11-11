//This file holds any configuration variables we may need
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb+srv://<username>:<password>@cluster0-khayh.mongodb.net/test?retryWrites=true&w=majority',
    //change <username> and <password> to the ones I sent you.
    //don't include the '<' and >' in your uri
  }
};
