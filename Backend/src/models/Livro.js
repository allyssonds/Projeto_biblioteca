const mongoose = require('mongoose');

const livroSchema = new mongoose.Schema({
    nome:{
        type:String,
        required:true
    },
    autor:{
        type:String,
        required:true
    },
    paginas:{
        type:String,
        required:false
    }    
});

mongoose.model('Livro',livroSchema);