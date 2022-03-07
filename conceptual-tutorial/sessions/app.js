const express = require('express');
const app = express();
const session = require('express-session');

const sql = require('better-sqlite3');

const sqliteStore = require('better-sqlite3-session-store')(session);

const db = new sql('session.db',{verbose:console.log()});

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(session({
    secret: 'some secret',
    resave: false,
    saveUninitialized: true,
    store: new sqliteStore({
        client:db,
        expired:{
            clear:true,
            intervalMs: 1000 * 60 * 60 * 24
        }
    }),
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 // Equals 1 day (1 day * 24 hr/1 day * 60 min/1 hr * 60 sec/1 min * 1000 ms / 1 sec)
    }
}));

app.get('/',(req,res,next)=>{

    if(req.session.viewCount){
        req.session.viewCount += 1
    }
    else{
        req.session.viewCount = 1;
    }


    res.send(`<h1>Hello sessions,you have visited this page ${req.session.viewCount} times</h1>`)
});


app.listen(3000);
