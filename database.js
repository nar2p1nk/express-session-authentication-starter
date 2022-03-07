const sqlite = require('better-sqlite3');
const bcrypt = require('bcrypt');

const db = new sqlite('users.db');


function createUser(username,password){
    db.prepare(`INSERT INTO user(username,password) VALUES(?,?)`).run(username,bcrypt.hashSync(password, 10))
}


createUser('animiniac', 'ilovepeacedove');

createUser('test', 'test')

