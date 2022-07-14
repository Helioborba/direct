import conn from '../connections/my-con.js';

/**
 *   Object containing the bridge for the queries
 *   For post use addUser().
 *   For get use fetchAll().
 * */
export default class UserObject {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    addUser() {
        return conn.execute(
            'INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [this.username, this.email, this.password]
        );
    }

    static fetchAll() {
        return conn.execute('SELECT title, content FROM `heroku_3f91cda5aaca95a`.`tester`');
    };

    static findUser(user, password) {

        return conn.execute(
            'SELECT * FROM `users` WHERE `username` = ? AND `password` = ? ', [user, password]
        );
    };
}