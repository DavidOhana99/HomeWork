var express = require('express');
var router = express.Router();
const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017';

router.use(async (req, res, next) => {
  const client = new MongoClient(uri);
  const database = client.db('blog');
  req.posts = database.collection('posts');

  next();
});


/* GET home page. */
router.get('/', async (req, res, next) => {
  const posts = await req.posts.find().toArray();
  res.render('layout',
    {
      subtitle: 'Posts',
      posts,
      partials: {
        content: 'index'
      }
    });
});

router.get('/addPost', (req, res, next) => {
  res.render('layout',
    {
      subtitle: 'Add Post',
      partials: {
        content: 'addPost'
      }
    });
});

router.post('/addPost', async (req, res, next) => {
  // console.log(req.body)
  try {
    req.body.Date=new Date()
    req.body.auther='user';
    await req.posts.insertOne({ name: req.body.name, auther: 'user', date:req.body.Date, body: req.body.body })
    res.redirect('/')

  }
  catch (err) {
    console.log(err)
  }


});

router.post('/addPost2', async (req, res, next) => {
  // console.log(req.body)
  try {
    req.body.Date=new Date()
    req.body.auther='user';
    await req.posts.insertOne({ name: req.body.name, auther: 'user', date:req.body.Date, body: req.body.body })
    res.status(201)
        .send(req.body);

  }
  catch (err) {
    console.log(err)
  }


});


module.exports = router;
