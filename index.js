 const express=require('express')
 const app= express()
 const port=3000

 const reqFilter=(req, res, next) => {
  if((!req.query.name) || (req.query.name.length>=10)){
    res.send("please enter your Name upto 10 characters only");
}
   else if(!req.query.age){
     res.send("Enter your age");
  }
  else{
    next();
  }
   };
app.use(reqFilter);
app.get('/',  (req, res) => {
    res.send('Welcome to Homepage');
  })
  app.get('/about', (req, res) => {
    res.send('Welcome to Aboutpage');
  })
  app.get('/contact', (req, res) => {
    res.send('Welcome to contactpage');
  })
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  })

  
   

  