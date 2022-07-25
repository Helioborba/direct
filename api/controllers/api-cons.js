import UserObject from "../models/mysql.js";

// Novelty function
function sleep(ms) {
    return new Promise( (resolve) => {
      setTimeout(resolve, ms);
    });
}

// controls
export async function postNewUser(req, res, next) { 
    const data = req.body.data;
    console.log("data received: ", data);

    // Query stage
    const User = new UserObject(data.username, data.email, data.password);
    User.addUser()
    .then( (data) => {
        res.send({ message: 'Added Successfully'});
    })
    .catch( err => console.log(err));
}

export async function postFindLoginUser(req, res, next) { 
    const data = req.body.data;
    console.log("data: ", data);

    // Query stage
    UserObject.findLoginUser(data.username, data.password)
    .then( (data) => {
        if( data[0] === undefined ) {
            res.send({ message: 'Login Failed', error: true});
        } else {
            const parsedData = data[0][0] || null; // get the data inside the row
            // Check if the row returned data or not
            if(parsedData?.username) {
                res.send({ logged: true, message: 'Login Success', id: parsedData.id, name: parsedData.username, error: false});
            } else {
                res.send({ logged: false, message: 'Login Failed', error: true}); // Tell the client the login attempt failed
            }
        }
    })
    .catch( err => console.log(err) );
}

export async function postFindUser(req, res, next) { 
    function removePass(data) {
        // Returns a array of objects without password
        return  data.map((data) => {
            return {id: data.id, username: data.username}
        })
    }
    const data = req.body.data;
    console.log("data: ", data);

    // Query stage 
    UserObject.findUser(data.username)
    .then( (data) => {
        if( data[0] === undefined ) { // The problem with SQL lib is that it returns a empty array in case it's not found
            res.send({ message: 'User not found', error: true});
        } else {

            const parsedData = data[0][0] || null; // Used to check if any result has been received for real

            // Check if the row returned data or not
            if(parsedData?.username) {
                res.send({ message: 'User found', users: removePass(data[0]), error: false});
            } else {
               res.send({ message: 'User not found', error: true}); // Tell the client the login attempt failed
            }
        }
    })
    .catch( err => console.log(err) );
}