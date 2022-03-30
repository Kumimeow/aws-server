import {connect} from 'mongoose'



(async() =>{
try{

    const db = await connect("mongodb://localhost/crud-cascada")
    console.log('DB connected to')
}catch(error){
    console.error(error);
}

})()
