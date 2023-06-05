
import mongoose from 'mongoose';

    const userSchema = new mongoose.Schema({
        // _id : {type:mongoose.Schema.Types.ObjectId},
    name:  String,
    password :String ,
    email:  {type: String, unique : true, required : true} ,
    createdAt: {type: Date, default: Date.now}

});

const Users = mongoose.models.user || mongoose.model('user', userSchema);
export default Users;
