var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/SoundApp',(err)=>{
        if(!err)
            console.log('MongoDB connection succeeded');
        else
            console.log('Error in connecting to MongoDB'+ JSON.stringify(err,undefined,2)); 
});

module.exports = mongoose;