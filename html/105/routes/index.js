import express from 'express';
var router = express.Router();
import pool from '../pool.js';


/* GET home page. */

router.route('/')
 .get(async (req,res, next)=> {
  try {
    const [results] = await pool.execute(
      'SELECT id, name,description,instructions FROM recipes'
    );

    res.send(results);

  } catch (err) {
    next(err);
  }
 })
 .post(async (req, res, next) => {
  try {
    const [results] = await pool.execute(
      'INSERT INTO recipes (name, description , instructions) VALUES (?, ?, ?, ?)', [req.body.name, req.description.last, req.body.instructions]
    );

    console.log(results);
    req.body.id = results.insertId;
    res.status(201)
      .location(`/recipe-api/${results.insertId}`)
      .send(req.body);

  } catch (err) {
    next(err);
  }
});

router.route('/:id')
  .get(async (req, res, next) => {
    console.log('in index.js')
    try {
      const [results] = await pool.execute(
        'SELECT id, name, instructions, description FROM recipes WHERE Id = ?', [req.params.id]
      );

      if (!results.length) {
        return res.status(404)
          .send(`Unable to find recipe ${req.params.id}`);
      }

      res.send(results[0]);
    } catch (err) {
      next(err);
    }
  })

  .put(async (req, res, next) => {

    try {
      const [results] = await pool.execute(
        'UPDATE recipe SET name = ?, instructions = ?, description = ?,  WHERE Id = ?', [req.body.name, req.instructions, req.description, req.params.id]
      );

      if (!results.affectedRows) {
        return res.status(404)
          .send(`Unable to find recipe ${req.params.id}`);
      }
      res.sendStatus(204);
    } catch (err) {
      next(err);
    }
  })

  .delete(async (req, res, next) => {

    try {
      const [results] = await pool.execute(
        'DELETE FROM recipes WHERE Id = ?', [req.params.id]
      );

      console.log(results);
      if (!results.affectedRows) {
        return res.status(404)
          .send(`Unable to find recipe ${req.params.id}`);
      }

      res.end();
    } catch (err) {
      next(err);
    }
  });

  router.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send(err.message);
  });
  
  export default router;
