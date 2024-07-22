


export default  class ProductController {

    getProducts (req,res) {

        console.log(path.resolve());
        res.sendFile(path.join(path.resolve(),"src", "views","index.html"))


    }
}


