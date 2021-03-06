import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
// import routes from './routes';

const app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));

// routes(app);

app.get('/', (req, res) => res.status(200).send({
  message: 'Welcome to our first Route!!!'
}));

app.use((req, res, next) => {
  const err = res.status(404).send({
    ERrOR: '404 Page Not Found!'
  })
  next(err)
}); 


export default app;

