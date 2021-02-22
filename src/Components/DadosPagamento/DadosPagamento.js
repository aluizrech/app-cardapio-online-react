import React, {Component, Fragment} from "react";
import {Button, Chip, TextField} from "@material-ui/core";

import './DadosPagamento.css';
import NumberFormat from "../../Utils/NumberFormat";
import LocalStorageUtils from "../../Utils/LocalStorageUtils";

export default class DadosPagamento extends Component {

    constructor(props) {
        super(props);
        this.dadosPagamento = {
            nome: '',
            numeroCartao: '',
            mes: '',
            ano: '',
            codigoSeguranca: ''
        }
        this.state = this.dadosPagamento;
    }

    escutadorDeInput = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    formatarPreco(preco){
        return NumberFormat.getFormatter().format(Number(preco))
    }

    cancelarPedido(){
        this.props.cancelarPedido();
    }

    finalizarPedido(){
        let produtosCarrinho = LocalStorageUtils.getArray('produtos-carrinho');
        const pedido = {
            pedido: produtosCarrinho,
            dadosPagamento: this.state,
        }
        console.log(pedido);
    }

    render() {

        const { nome, numeroCartao, mes, ano, codigoSeguranca } = this.state;

        return (
            <Fragment>
                <TextField
                    id="nome"
                    label="Nome"
                    type="text"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    className="nome-numero"
                    name="nome"
                    value={nome}
                    onChange={this.escutadorDeInput}
                />
                <TextField
                    id="numeroCartao"
                    label="Número do Cartão"
                    type="text"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    className="nome-numero"
                    name="numeroCartao"
                    value={numeroCartao}
                    onChange={this.escutadorDeInput}
                />
                <TextField
                    id="mes"
                    label="Mês de validade"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    className="card-fields"
                    name="mes"
                    value={mes}
                    onChange={this.escutadorDeInput}
                />
                <TextField
                    id="ano"
                    label="Ano de validade"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    className="card-fields"
                    name="ano"
                    value={ano}
                    onChange={this.escutadorDeInput}
                />
                <TextField
                    id="codigoSeguranca"
                    label="Código de segurança"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    className="card-fields"
                    name="codigoSeguranca"
                    value={codigoSeguranca}
                    onChange={this.escutadorDeInput}
                />
                <div className="dv-total mt-3 mb-5 p-acoes">
                    <Chip label={`Total do pedido: ${this.formatarPreco(this.props.totalPedido)}`} className="mr-5"/>
                    <Button variant="contained" className="mr-5" onClick={this.cancelarPedido.bind(this)}>
                        Cancelar Pedido
                    </Button>
                    <Button variant="contained" color="primary" disabled={!(this.props.totalPedido > 0)} onClick={this.finalizarPedido.bind(this)}>
                        Finalizar Pedido
                    </Button>
                </div>
            </Fragment>
        );
    }

}