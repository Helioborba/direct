import conn from '../connections/my-con.js';

// Creates a ID containing the name,a hashtag and 4 digits
function createFourDigitId(username) {
    return `${username}#${(Math.floor(Math.random() * 10000) + 10000).toString().substring(1)}`
}
/**
 *   Object containing the bridge for the queries
 * */
export default class UserObject {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    // Main function : creates the user
    addUser() {
        const profile_id = createFourDigitId(this.username);
        const res = []; // result array

        // Not using the multiquery feature because of the sql injection problem, instead going for each step.
        res.push(conn.execute(
            'INSERT INTO profile (id) VALUES (?)', [profile_id]
        ))
        // creates user
        res.push(conn.execute( // The username WILL be always the display name to new accounts until the person changes it
            'INSERT INTO users (username, display_name, email, password, profile_id ) VALUES (?, ?, ?, ?, ?)', [this.username, this.username, this.email, this.password, profile_id ]
        ))

        return res;
    
        
    }

    // Used to validate if user exists, helps to not break the query
    userExists() {
        return conn.execute(
            'SELECT `username` FROM `users` u WHERE `u`.`username` = ?',  [this.username]
        )
    }

    // Used for login
    static findLoginUser(user, password) {
        return conn.execute(
            'SELECT `u`.`id`, `u`.`username`, `u`.`password`, `u`.`email`, `u`.`profile_id`, `profile_picture`, `biography`, `banner` FROM `users` u INNER JOIN `profile` on `u`.`profile_id` = `profile`.`id` WHERE `username` = ? AND `password` = ? ', [user, password]
        );
    };

    // Used in search
    static findUser(user) {
        return conn.execute(
            'SELECT `u`.`id`, `u`.`display_name`, `p`.`profile_picture`, `p`.`banner` FROM `users` u, `profile` p WHERE u.`display_name` = ? && p.`id` = u.`profile_id`', [user]
        );
    };

    // not used yet, will be for changing dates, bio, display name
    static userProfile(id) {
        return conn.execute(
            'SELECT * FROM `users` WHERE `id` = ?', [id]
        );
    };

    static userImage(id, blob) {
        return conn.execute(
            'UPDATE `profile` SET `profile_picture` = ? WHERE `id` = ?', [blob, id]
        );
    };

    static userBanner(id, blob) {
        return conn.execute(
            'UPDATE `profile` SET `banner` = ? WHERE `id` = ?', [blob, id]
        );
    };
}