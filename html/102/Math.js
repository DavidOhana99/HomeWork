import express, { response } from 'express';

const app = express();

app.param('a', (req, res, next) => {
  
    req.a = req.params.a;
    next();
  });
  app.param('b', (req, res, next) => {
    req.b = req.params.b;
    next();
  });
  app.get('/add/:a/:b', (req, res, next) => {
    const num1 = Number(req.a);
   const num2 = Number(req.b);
    res.end(`The great sum is ${num1 + num2}`);
  });
  
  app.param('operator', (req, res, next) => {
    req.op = req.params.operator;
    next();
  });
  app.get('/:operator/:a/:b', (req, res, next) => {
    const num1 = Number(req.a);
   const num2 = Number(req.b);
  if (req.op === '+')
    res.end(`The great sum is ${num1 + num2}`);
  else if (req.op === '-')
    res.end(`The great sum is ${num1 + num2}`);
  else if (req.op === '*')
    res.end(`The great sum is ${num1 + num2}`);
  else if (req.op === '%')
    res.end(`The great sum is ${num1 + num2}`);
else(response.n('errrrr'))
  });
  
  
  
  app.use('/add2', (req, res, next) => {
  const num1 = Number(req.query.first);
   const num2 = Number(req.query.second);
    res.end(`The great sum is ${num1 + num2}`);
  });

  app.listen(80);
  