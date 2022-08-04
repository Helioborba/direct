import conn from '../connections/my-con.js';

// Creates a ID containing the name,a hashtag and 4 digits
function createFourDigitId(username) {
    return `${username}#${(Math.floor(Math.random() * 10000) + 10000).toString().substring(1)}`
}
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
        const profile_id = createFourDigitId(this.username);
        const res = []; // result array

        // creates user profile
        res.push(conn.execute(
            'INSERT INTO profile (id) VALUES (?)', [profile_id]
        ))
        // creates user
        res.push(conn.execute(
            'INSERT INTO users (username, email, password, profile_id ) VALUES (?, ?, ?, ?)', [this.username, this.email, this.password, profile_id ]
        ))
        return res;
    }

    static fetchAll() {
        return conn.execute('SELECT title, content FROM `heroku_3f91cda5aaca95a`.`tester`');
    };

    static findLoginUser(user, password) {
        return conn.execute(
            'SELECT * FROM `users` WHERE `username` = ? AND `password` = ? ', [user, password]
        );
    };

    static findUser(user) {
        return conn.execute(
            'SELECT * FROM `users` WHERE `username` = ?', [user]
        );
    };

    static userProfile(user) {
        return conn.execute(
            'SELECT * FROM `users` WHERE `username` = ?', [user]
        );
    };

    static userImage(id, blob) {
        return conn.execute(
            'UPDATE `profile` SET `profile_picture` = ? WHERE `id` = ?', [ blob, id]
        );
    };
}