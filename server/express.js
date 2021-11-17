const path = require('path');
const express = require('express');
const app = express();
const port = 3000

app.use((req, res, next) => {
  console.log(req.url);
  next();
});

app.get('/api', (req, res) => {
  res.json({message: "Hello, api working"});
});

//app.get('/*', function(req, res) {
  //res.sendFile(path.join(__dirname, '../dist/index.html'), function(err) {
    //if (err) {
      //res.status(500).send(err)
    //}
  //})
//})

app.use(express.static('dist'));

/*  For running the app from another directory??

const path = require('path');
app.use('/static', express.static(path.join(__dirname, 'dist')));
*/

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
