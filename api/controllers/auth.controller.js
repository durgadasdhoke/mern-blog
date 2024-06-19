// importing user model to create our user and saving the data to the database i.e. mongodb in this case
import User from '../models/user.model.js';

// bcrypt is used to hashed our password 
import bcryptjs from 'bcryptjs';
// importing a errorHandler function to handle error with reusable piece of code just need to pass the code and message
import { errorHandler } from '../utils/error.js';

export const signup =async (req,res,next)=>{
    const { username, email, password }  = req.body;
    console.log(username, email, password);

    if( !username || !email || !password || username ===''||email ===''||password==='')
    {
        //Instead of simply creating error here we can use error.js to handle error as shown below
        next(errorHandler(400,"All Fields are Required."));
    }
    
    const hashedPassword = bcryptjs.hashSync(password,10);

    // creating a user to store it to the Database
    const newUser = new User({
        username,
        email,
        password:hashedPassword
    });

    
    try{
        await newUser.save();
        res.json({"message": "Signup Successfull !!"});

    }catch(error)
    {
        // We can use this next method through the middleware that we have created in index.js file
        next(error);
    }

};