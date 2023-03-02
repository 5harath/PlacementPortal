const mongoose = require('mongoose');
async function main(){
    await mongoose.connect('mongodb+srv://admin:vrdq1qtkQWAYYrlG@cluster0.izlqkhy.mongodb.net/?retryWrites=true&w=majority');
    console.log("connection Successfull !! ");
}
main().catch(error =>console.log("connection not successfull !!"));