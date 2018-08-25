// https://expressjs.com/en/advanced/best-practice-security.html#use-helmet

// TODO: Create Express.js server for production
// https://expressjs.com/en/4x/api.html
const express = require('express')
const helmet = require('helmet')
app = express()
app.use(helmet())

const port = process.env.PORT || 5000;


if (process.env.NODE_ENV === 'production') {
  const clientDir = 'client/dist'
  const staticFilesDir = express.static(path.join(__dirname, clientDir))
  const indexFilePath = path.join(__dirname, clientDir, 'index.html')

  // Serve any static files
  app.use(staticFilesDir);
  // Handle React routing, return all requests to React app
  app.get('*', function (req, res) {
    res.sendFile(indexFilePath);
  });
}

app.get('/', (req, res) => {
  // res.send({ express: 'Hello From Express' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
