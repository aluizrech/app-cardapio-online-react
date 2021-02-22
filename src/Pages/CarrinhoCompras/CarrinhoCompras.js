import React, {Component, Fragment} from "react";
import ProdutoService from "../../Services/ProdutoService";
import LocalStorageUtils from "../../Utils/LocalStorageUtils";
import List from "@material-ui/core/List";
import CardProduto from "../../Components/Produto/CardProduto";
import PedidoBusiness from "../../Business/PedidoBusiness";
import {Card, CardContent} from "@material-ui/core";
import './CarrinhoCompras.css';
import DadosPagamento from "../../Components/DadosPagamento/DadosPagamento";

export default class CarrinhoCompras extends Component {

    constructor(props) {
        super(props);
        this.produtosCarrinho = LocalStorageUtils.getArray('produtos-carrinho');
        this.produtosPedido = PedidoBusiness.getProdutosPedido(this.produtosCarrinho);
        this.state = {produtosPedido: this.produtosPedido, total: this.calcularTotalPedido(this.produtosPedido)};
    }

    getProdutos(){
        return ProdutoService.getProdutos();
    }

    removerItemCarrinho(produtoId){
        let produtosCarrinho = LocalStorageUtils.getArray('produtos-carrinho');
        produtosCarrinho = produtosCarrinho.filter(p => p.produtoId !== produtoId);
        LocalStorageUtils.setArray('produtos-carrinho', produtosCarrinho);
        const produtosPedido = PedidoBusiness.getProdutosPedido(produtosCarrinho);
        this.setState({produtosPedido: produtosPedido, total: this.calcularTotalPedido(produtosPedido)})
    }

    calcularTotalPedido(produtosPedido){
        let total = 0;
        produtosPedido.forEach(produtoPedido => {
            total += produtoPedido.produto.preco * produtoPedido.pedido.quantidade;
        });
        return total;
    }

    cancelarPedido(){
        LocalStorageUtils.setArray('produtos-carrinho', []);
        const produtosPedido = PedidoBusiness.getProdutosPedido([]);
        this.setState({produtosPedido: produtosPedido, total: this.calcularTotalPedido(produtosPedido)})
    }

    render() {
        return (
            <Fragment>
                <h2>Carrinho de Compras</h2>
                <hr />
                <Card className="card-finalizar-pedido" variant="outlined">
                    <CardContent >
                        <DadosPagamento totalPedido={this.state.total} cancelarPedido={this.cancelarPedido.bind(this)} />
                    </CardContent>
                </Card>
                <h2>Detalhes do pedido:</h2>
                <List >
                    {this.state.produtosPedido.map((produtoPedido, index) => {
                        return (
                            <CardProduto key={index} produto={produtoPedido.produto} pedido={produtoPedido.pedido} removerItemCarrinho={this.removerItemCarrinho.bind(this)}/>
                        );
                    })}
                </List>
            </Fragment>
        );
    }

};