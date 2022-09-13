const express = require("express");
const bodyParser = require("body-parser");
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('f0d9d60b8618447aa82aa6fc447d4098');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
  res.render("login");
})

app.post("/", function(req, res){
  newsapi.v2.topHeadlines({
  language: 'en',
  country: 'in'
}).then(response => {
  const articles = response.articles;



  // console.log(response.articles);
  res.render("loggedin", {articles:articles})
});

})

app.listen(3000, function(){
  console.log("Server is Listening at port 3000");
})
