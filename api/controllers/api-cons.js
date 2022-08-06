import UserObject from "../models/mysql.js";

// Novelty function
function sleep(ms) {
    return new Promise( (resolve) => {
      setTimeout(resolve, ms);
    });
}

// Used to create user
export async function postNewUser(req, res, next) {
    const data = req.body.data;

    // Query stage
    // Careful in the .then, there's a array because there's 2 queries running.
    const User = new UserObject(data.username, data.email, data.password);
    User.addUser()
    [1].then( () => { // there's actually no need for this then, as we are not checking any problems in the query itself
        res.send({ message: 'Added Successfully'});
    })
    .catch( err => console.log(err));
}

// Used to login
export async function postFindLoginUser(req, res, next) { 
    const data = req.body.data;

    // Query stage
    UserObject.findLoginUser(data.username, data.password)
    .then( (data) => {
        if( data[0] === undefined ) {
            res.send({ message: 'Login Failed', error: true});
        } else {
            const parsedData = data[0][0] || null; // get the data inside the row
            // Check if the row returned data or not
            if(parsedData?.username) {
                // The image needs to turn into a utf8 string before going, quite strange that node will make it turn into a buffer and object data after sending
                res.send({ logged: true, message: 'Login Success', id: parsedData.id, name: parsedData.username, profile_id: parsedData.profile_id, profilePicture: parsedData.profile_picture?.toString('utf8'), biography: parsedData?.biography, banner:parsedData.banner?.toString('utf8'), error: false});
            } else {
                res.send({ logged: false, message: 'Login Failed', error: true}); // Tell the client the login attempt failed
            }
        }
    })
    .catch( err => console.log(err) );
}

// Used for the search
export async function postFindUser(req, res, next) { 
    function mapUsers(data) { // Helps in making the profilePicture renaming
        
        // Returns a array of objects
        return  data.map((data) => {
            return {id: data.id, username: data.username, profilePicture: data.profile_picture?.toString('utf8')}
        })
    }
    const data = req.body.data;

    // Query stage 
    UserObject.findUser(data.username)
    .then( (data) => {
        if( data[0] === undefined ) { // The problem with SQL lib is that it returns a empty array in case it's not found
            res.send({ message: 'User not found', error: true});
        } else {

            const parsedData = data[0][0] || null; // Used to check if any result has been received for real

            // Check if the row returned data or not
            if(parsedData?.username) {
                res.send({ message: 'User found', users: mapUsers(data[0]), error: false});
            } else {
               res.send({ message: 'User not found', error: true}); // Tell the client the login attempt failed
            }
        }
    })
    .catch( err => console.log(err) );
}

//// The area below is for the user Profile 
// This is one is for the profile form
export async function postGetProfile(req, res, next) {  // Not used yet
    const data = req.body.data;
    UserObject.userProfile(data.username);
}


export async function postImage(req, res, next) { 
    const data = req.body.data;

    // Query stage 
    UserObject.userImage(data.id, data.image)
    .then( (data) => {
        res.send({ message: 'done', error: false});
    })
    .catch( err => console.log(err) );
}

export async function postBanner(req, res, next) {
    const data = req.body.data;

    // Query stage 
    UserObject.userBanner(data.id, data.banner)
    .then( (data) => {
        res.send({ message: 'done', error: false});
    })
    .catch( err => console.log(err) );
}

///////

