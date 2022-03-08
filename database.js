const sqlite = require('better-sqlite3');
const bcrypt = require('bcrypt');

const db = new sqlite('users.db');


function createUser(username,password){
    db.prepare(`INSERT INTO user(username,password) VALUES(?,?)`).run(username,bcrypt.hashSync(password, 15))
}

function getUser(id){
    const user =  db.prepare(`SELECT * FROM user WHERE id = ?`).get(id)

    if( user == undefined){
        console.log('no user found')
        return null
    }
    else{return user}
}

function deleteUser(id){
    if(getUser(id) == null){
        return null
    }
    else{
    db.prepare(`DELETE FROM user WHERE id = ?`,(err)=>{
    }).run(id)
    console.log('user deleted')
    }
}


//createUser('test3', 'lollypop')

//createUser('animiniac', 'ilovepeacedove');

//createUser('test', 'test')

