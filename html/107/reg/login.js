const pool = require('./pool.js');

module.exports = async (req, res, next) => {
  try {
    // of course dont store real passwords in db. We will fix...
    const [results] = await pool.execute('SELECT * FROM cred WHERE user = ? AND pass = ?', [req.body.username, req.body.password ]);

    if (results.length) {
      console.log('logged in');
      req.session.username = req.body.username;
      console.log('should be logged in and redirected')
      return res.redirect('/admin');
    }

    res.redirect('/');
  } catch (e) {
    next(e);
  }
};
