const mongoose = require('mongoose');
const Livro = mongoose.model('Livro');

module.exports = {
    async index(req,res){
        livros = await Livro.find();
        return res.json(livros); 
    },
    async store(req,res){
        const livro = await Livro.create(req.body);
        return res.json(livro);
    },
    async destroy(req,res){
        await Livro.findByIdAndDelete(req.params.id);
        return res.send();
    }
}