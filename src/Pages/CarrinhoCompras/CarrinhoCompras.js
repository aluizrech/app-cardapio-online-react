import React, {Component, Fragment} from "react";
import ProdutoService from "../../Services/ProdutoService";
import LocalStorageUtils from "../../Utils/LocalStorageUtils";
import List from "@material-ui/core/List";
import CardProduto from "../../Components/Produto/CardProduto";
import PedidoBusiness from "../../Business/PedidoBusiness";

export default class CarrinhoCompras extends Component {

    constructor(props) {
        super(props);
        this.produtosCarrinho = LocalStorageUtils.getArray('produtos-carrinho');
        this.produtosPedido = PedidoBusiness.getProdutosPedido(this.produtosCarrinho);
        this.state = {produtosPedido: this.produtosPedido};
    }

    getProdutos(){
        return ProdutoService.getProdutos();
    }

    removerItemCarrinho(produtoId){
        let produtosCarrinho = LocalStorageUtils.getArray('produtos-carrinho');
        produtosCarrinho = produtosCarrinho.filter(p => p.produtoId !== produtoId);
        LocalStorageUtils.setArray('produtos-carrinho', produtosCarrinho);
        this.setState({produtosPedido: PedidoBusiness.getProdutosPedido(produtosCarrinho)})
    }

    render() {
        return (
            <Fragment>
                <h2>Carrinho de Compras</h2>
                <hr />
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