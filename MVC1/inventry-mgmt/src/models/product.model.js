import path from 'path'
import ProductModel from '../models/proct.model.js'


export default class ProductModel {

    constructor (_id,_name,_desc,_price,_imageUrl){

        this.id =_id
        this.name =_name
        this.desc=_desc
        this.price=_price
        this._imageUrl = imageUrl
    }


    static  get() {
        return products
    }


}


var products =[
    new ProductModel(
        1,
        'Product 1',
        'Description for Produuct 1',
        19.99
    ),

    new ProductModel(
        2,
        'Product 1',
        'Description for Produuct 1',
        19.99
    ),

    new ProductModel(
        3,
        'Product 1',
        'Description for Produuct 1',
        19.99
    )


]