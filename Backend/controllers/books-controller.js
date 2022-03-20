const Book = require('../model/Book')

const getAllBooks = async(req,res,next)=>{
    let books;
    try{
        books = await Book.find();
    }catch(err){
        console.log(err);
    }

    if(!books){
        return res.status(404).json({message:"no product found"})
    }
    return res.status(200).json({book:books})
}

const getById = async(req,res)=>{
    let id = req.params.id;
    let book ;
    try{
        book = await Book.findById(id)

    } catch(err){
        console.log(err);
    }
    if(!book){
        return res.status(404).json({message :"no book found"})
    }
    return res.status(200).json({ book })
}


const addBook =async(req,res)=>{
    const {name,author,description,price,available,image} = req.body
    let book;
    try{
        book = new Book({
            name,
            author,
            description,
            price,
            available,
            image
        });
        await book.save()
    }catch(err){
        console.log(err);
    }
    if(!book){
        return res.status(500).json({message:'unable to Add'})
    }
    return res.status(201).json({ book })
}

const updateBook =async(req,res)=>{
    let id = req.params.id;
    let {name,author,description,available,price,image} = req.body
    let book;
    try{
        book = await Book.findByIdAndUpdate(id,{
            name,
            author,
            description,
            price,
            available,
            image
        })
    }catch(err){
        console.log(err);
    }
    if(!book){
        return res.status(401).json({message : "Unable to Update By this ID"})
    }
    return res.status(201).json({book})
}
const deletBook = async(req,res)=>{
    let id = req.params.id;
    let book;
    try{
        book = await Book.findByIdAndDelete(id)
    }catch(err){
        console.log(err);
    }
    if(!book){
        return res.status(404).json({message:"book not found"})        
    }
    return res.status(200).json( {message:"deleted"} )
}


exports.getAllBooks = getAllBooks
exports.addBook = addBook
exports.getById = getById
exports.updateBook= updateBook
exports.deletBook= deletBook