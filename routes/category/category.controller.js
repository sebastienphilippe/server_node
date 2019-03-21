/*
Import
*/
//Importer le modèle mongoose
//

const categoryModel = require('../../models/category.model');

/*
Methods
-Mise en place de la logique CRUD
*/
    const createItem = () =>{
        return new Promise ((resolve,reject)=>{
             //Edit the body content
            req.body.created_at = new Date();

            //Create new category 
            categoryModel.create(req.body)
            .then( item=>resolve(item))
            .catch( error =>  reject(error))
        })
    }
    const updateItem = () =>{
        return new Promise ((resolve,reject)=>{
            
        })
    }
    const readItem = () =>{
        return new Promise ((resolve,reject)=>{
            
        })
    }
    const deleteItem = () =>{
        return new Promise ((resolve,reject)=>{
            
        })
    }
//

/*
Export
*/
module.exports = {
   createItem,
   updateItem,
   readItem,
   deleteItem
}
//