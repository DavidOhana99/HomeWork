import express from 'express';
import bcrypt from 'bcrypt';

const router = express.Router();

router.use((req, res, next) => {
  req.users = req.database.collection('users');
  next();
});

router.post('/login', async (req, res, next) => {
  try{
    const user = await user.findOne({username:req.body.username});
    if(!user){
      throw new error ('incorrect cridentials')
    }
    console.lof(user)
    if(!await bcrypt.compare(req.body.password,user.password)){
      throw new error('incorrect cridentials');
    }
    req.session.username=req.body.username;
    res.sendStatus(204)
  }
 catch(e){
    next(e);
  }

  /*try {
    const [results] = await pool.execute('SELECT password FROM users WHERE username = ?', [req.body.username]);

    if (!results.length) {
      throw new Error('Bad username or password');
    }

    console.log(results);

    if (!await bcrypt.compare(req.body.password, results[0].password)) {
      throw new Error('Bad username or password');
    }

    req.session.username = req.body.username;

    return res.redirect('/admin');
  } catch (e) {
    next(e);
  }*/
  next();
});

router.post('/register', async (req, res, next) => {
  const { username, password } = req.body;
  try {
    if (!username || !password) {
      const error = new Error('Username and password are required');
      error.statusCode = 401;
    }

    const hash = await bcrypt.hash(password, 10);

    const results = await req.users.insertOne({
      username: req.body.username,
      password: hash
    });

    console.log(results);

    res.statusCode = 201;
    res.end();
  } catch (e) {
    console.log(e);

    /*if (e.errno === 1062) {
      return next(/*new Error(* /`${username} is already taken. Please try a different one.`/*)* /);
    }*/

    next(e);
  }
  next();
});

router.get('/logout', (req, res, next) => {
  req.session.destroy();
  res.sendStatus(204)
  // res.redirect('/');
});

export default router;
