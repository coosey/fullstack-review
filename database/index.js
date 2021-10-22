const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher',
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true,
});


let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: { type: Number, unique: true },
  username: String,
  html_url: String,
  description: String,
  forks: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (err, doc) => {
  if (err) {
    console.log(err)
  } else {
    console.log('Document inserted successfully')
  }
}

module.exports.save = save;