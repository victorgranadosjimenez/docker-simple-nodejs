

/*require load express module*/
const express = require('express');
/*by express we create the objects app and router*/
/*router object does the routing of the app*/

const app = express();
const router = express.Router();
/*we set the constantes path and port*/
/*path define the main directory, subdirectory of views*/
/*port set the app to listen the port 8080 and connect*/
const path = __dirname + '/views/';
const port = 8080;


/*router.use load the fucntion and registry the router solicitudes GET and transmit to the app routes*/
router.use(function (req,res,next) {
  console.log('/' + req.method);
  next();
});

/*a solicitud to base directory gives the index page*/
router.get('/', function(req,res){
  res.sendFile(path + 'index.html');
});
/*a solicitud to page2 folder gives the page2 page*/
router.get('/page2', function(req,res){
  res.sendFile(path + 'page2.html');
});


app.use(express.static(path));
app.use('/', router);

app.listen(port, function () {
  console.log('Example app listening on port 8080!')
})
