
const express=require('express');
const mongoose=require('mongoose');

const app=express();
const bodyParser = require('body-parser');
const path=require('path')

const loginRoute=require('./routes/login');
const registerRoute=require('./routes/register');
const successRoute=require('./routes/success');
const errorRoute=require('./routes/error');

app.set('views','views');
app.set('view engine','hbs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "/public")));

app.use(registerRoute);
app.use(loginRoute);
app.use(successRoute);
app.use(errorRoute);


app.use('/',(req,res)=>{
    res.redirect('/register');
})

mongoose.connect('mongodb+srv://anamibnaharun:2VEehUb6GhY37Aa@project1.mhzsa.mongodb.net/<dbname>?retryWrites=true&w=majority',
{useNewUrlParser: true,useUnifiedTopology: true})
.then(result => {
  console.log('connected');
})
.catch(err => {
  console.log(err);
});

app.listen(8080,()=>{
   console.log('Hi');
   console.log('hello');
   
})
