import React, { Component } from 'react';

import './styles.css';

import api from '../../services/api';

export default class Novo extends Component {
    state = {
        nome: '',
        autor: '',
        paginas: ''
    }
    mySubmitHandler = (event) => {
        this.salvarLivro();
    }
    nomeChangeHandler = (event) => {
        this.setState({ nome: event.target.value });
    }
    autorChangeHandler = (event) => {
        this.setState({ autor: event.target.value });
    }
    paginasChangeHandler = (event) => {
        this.setState({ paginas: event.target.value });
    }
    salvarLivro() {
        if (this.state.nome !== '' && this.state.autor !== '' && this.state.paginas !== '') {
            api.post('/biblioteca/livros',{
                nome:this.state.nome,
                autor:this.state.autor,
                paginas:this.state.paginas
            }).then(function (response){
                console.log(response);
            }).then(function (error){
                console.log(error);
            });
            alert("Salvo com sucesso");
        }else{
            alert('Isso está completamente errado');
        }
    }
    render() {
        return (
            <div id="conteudo-novo">
                <form onSubmit={this.mySubmitHandler}>
                    Nome:
                    <input type="text" onChange={this.nomeChangeHandler} />
                    Autor:
                    <input type="text" onChange={this.autorChangeHandler} />
                    Páginas:
                    <input type="text" onChange={this.paginasChangeHandler} />
                    <button type="submit" id="salvar">Salvar</button>
                </form>
            </div>
        )
    }
}