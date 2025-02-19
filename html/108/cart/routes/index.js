var express = require('express');
var router = express.Router();
var pool = require('../pool.js');




/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    const [items] = await pool.execute(
      'SELECT * FROM animals'
    );
    console.log(items);
    res.render('layout', {
      title: 'Take home a pet today!',
      items,
      partials: {
        content: 'index'
      }
    });

  } catch (err) {
    next(err);
  }
})

  .post(async (req, res, next) => {;
    const{Name, Price, desc, img,id} = req.body;
    console.log(Name,Price, desc,)
    const [results] = await pool.execute(
      'UPDATE animals SET Name = ?, Price = ?, desc = ?, img = ? WHERE id = ?', [Name, Price, desc, img,id]
    );

    if (!results.affectedRows) {
      console.log('broken?')
      return res.status(404)
        .send(`Unable to find animals ${id}`);
    }
  });




module.exports = router;
