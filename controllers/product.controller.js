const productModel = require('../models/product.model');

//Simple version, without validation or sanitation

exports.test = (req, res)=>{
    res.send('Greetings from the Test controller!')
}

exports.create = async(req, res)=>{
    var user =
        {
            name: req.body.name,
            price: req.body.price
        }
    
    let document = new productModel(user);
    try{
        let doc = await document.save();
        if(doc)
            res.status(201).send({sucess : true, message: "Sucess"});
        else
        res.status(404).send({sucess : false, message: "Something wrong"});
    }catch(err){
        return res.status(500).send({sucess : false, message: err.message});
    }
}

exports.getList = async (req, res)=>{
    try{
        let docs = await productModel.find();
        if(docs)
        res.status(201).send({sucess : true, message : docs});
        else
        res.status(401).send({sucess : false, message : "Something went wrong"})
    } catch(err){
        return res.status(500).send({sucess : false, message :err.message})
    }
}

exports.getById = async (req, res)=>{
    try{
        let product = await productModel.findById({_id: req.params.id});
        if(product)
            res.status(201).send({sucess : true, product : product});
        else
            res.status(401).send({sucess : false, message : "Not found Product"});
    }catch(err){
        return res.status(500).send({sucess : false, message :err.message});
    }
}

exports.updateById = async (req, res)=>{
    try{
        let product = await productModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(product)
            res.status(200).send({sucess: true, message:"Updated sucessfully"});
        else
        res.status(404).send({sucess: false, message: "Product not found"});
    }catch(err){
        return res.status(500).send({sucess: false, message: err.message});
    }
}

exports.deleteById = async (req, res) =>{
    try{
        let product = await productModel.findByIdAndRemove(req.params.id);
        if(product)
                res.status(200).send({sucess: true, message : "Deleted Successfully"});
        else
            res.status(401).send({sucess: false, message: "Product not found"});
    }catch(err){
        return res.status(500).send({sucess: false, message: err.message});
    }
}