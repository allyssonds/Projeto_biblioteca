import React, { Component } from 'react';

import './styles.css';

import api from '../../services/api';

export default class Main extends Component {
    state = {
        id:'',
        livros:[]
    }
    async componentDidMount() {
        const response = await api.get('biblioteca/livros');
        
        //console.log(response);
        
        const livros = response.data;
        
        //console.log(livros);
        
        this.setState({
            livros,
        });
    }
    async deletarLivro(id){
        await api.delete(`biblioteca/livros/${id}`);
        alert(`Apagado com sucesso`);
        this.componentDidMount();
    }
    render() {
        const { livros } = this.state;
        return (
            <div id="conteudo">
                {livros.map(livro => (
                    <article key={livro._id} id="card">
                        <p id="nome">{livro.nome}</p>
                        <p>Autor:{livro.autor}</p>
                        <p>Paginas:{livro.paginas}</p>
                        <button id="apagar" onClick={(e)=>{this.deletarLivro(livro._id)}}>Apagar</button>
                    </article>
                ))}
            </div>
        )
    }
}