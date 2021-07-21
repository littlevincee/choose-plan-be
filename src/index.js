import app from './server';

const port = process.env.PORT ?? 9000;

app.listen(port, () => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`server started at ${port}`)
  }
})