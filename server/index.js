const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
require('dotenv').config();
const checkForSession = require ('./middlewares/checkForSession')
const sc = require('./controllers/swag_controller');
const auth = require ('./controllers/auth_controller')
const cc = require('./controllers/cart_controller')
const search_controller = require('./controllers/search_controller');

const app = express();
app.use( bodyParser.json() );
app.use( session({
  secret: 'jhfjhgfhghglkjbmvjkvgjvhkj',
  resave: false,
  saveUninitialized: true
}));
app.use(checkForSession)


app.get('/api/swag', sc.read)

app.post('/api/login', auth.login)
app.post('/api/register', auth.register)
app.post('/api/signout', auth.signout)
app.get('/api/user', auth.getUser)

app.post('/api/cart',cc.add)
app.post('/api/cart/checkout', cc.checkout)
app.delete('/api/cart', cc.delete)

app.get( '/api/search', search_controller.search );


const port = process.env.PORT || 3000
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );