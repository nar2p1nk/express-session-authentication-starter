const app = require('express')();

const middleware = (req,res,next)=>{
    req.customProperty = 100;
    next();
};

const middleware2 = (req,res,next)=>{
    console.log(req.customProperty)
    req.customProperty = 600;
    next();
};

const errorHandler = (err,req,res,next)=>{
    res.json({err:err})

}

app.use(middleware)
app.use(middleware2)

app.get('/',(req,res,next)=>{
    res.send(`<h1>The custom value is ${req.customProperty}</h1>`)

})

app.use(errorHandler )

app.listen(3000)