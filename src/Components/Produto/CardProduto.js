import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import { Fab, TextField} from "@material-ui/core";
import NumberFormat from "../../Utils/NumberFormat";
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import './CardProduto.css';

export default class CardProduto extends Component {

    constructor(props) {
        super(props);
        this.stateInicial = this.getPedidoZerado();
        this.produto = props.produto;
        this.disable = !!props.pedido;

        this.state = props.pedido || this.stateInicial;
    }

    getPedidoZerado(){
        return {
            produtoId: null,
            quantidade: 0,
            anotacao: '',
        };
    }

    formatarPreco(preco){
        return NumberFormat.getFormatter().format(Number(preco))
    }

    escutadorDeInput = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    addItemCarrinho(){
        const itemCompra = {
            produtoId: this.produto.id,
            quantidade: this.state.quantidade,
            anotacao: this.state.anotacao,
        }
        this.props.addItemCarrinho(itemCompra);
        this.setState(this.getPedidoZerado())
    }

    removerItemCarrinho(){
        this.props.removerItemCarrinho(this.produto.id);
    }

    render() {
        const { quantidade, anotacao } = this.state;

        return (
            <Card className="root" variant="outlined">
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" src={this.produto.imagem}/>
                    }
                    title={this.produto.nome}
                    subheader={this.formatarPreco(this.produto.preco)}
                />
                < hr/>
                <CardContent>
                    <TextField
                        id="outlined-number"
                        label="Quantidade"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        className="fullCard"
                        name="quantidade"
                        value={quantidade}
                        onChange={this.escutadorDeInput}
                        disabled={this.disable}
                    />
                    <TextField
                        id="outlined-multiline-static"
                        label="Anotação"
                        multiline
                        rows={4}
                        variant="outlined"
                        className="fullCard"
                        name="anotacao"
                        value={anotacao}
                        onChange={this.escutadorDeInput}
                        disabled={this.disable}
                    />
                    {
                        this.disable ? (
                            <Fab color="primary" aria-label="add" size="small" className="botaoAdd" onClick={this.removerItemCarrinho.bind(this)} >
                                <DeleteIcon />
                            </Fab>
                        ) : (
                            <Fab color="primary" aria-label="add" size="small" className="botaoAdd" onClick={this.addItemCarrinho.bind(this)} >
                                <AddCircleIcon />
                            </Fab>
                        )
                    }

                </CardContent>
            </Card>
        );
    }
}
