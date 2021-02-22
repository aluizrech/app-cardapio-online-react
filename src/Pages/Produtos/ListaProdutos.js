import React, {Component, Fragment} from "react";
import ProdutoService from "../../Services/ProdutoService";
import List from "@material-ui/core/List";
import CardProduto from "../../Components/Produto/CardProduto";
import LocalStorageUtils from "../../Utils/LocalStorageUtils"

export default class ListaProdutos extends Component {

    getProdutos(){
        return ProdutoService.getProdutos();
    }

    addItemCarrinho(produto){
        const produtosCarrinho = LocalStorageUtils.getArray('produtos-carrinho');
        produtosCarrinho.push(produto);
        LocalStorageUtils.setArray('produtos-carrinho', produtosCarrinho);
    }

    render() {
        return (
            <Fragment>
                <h2>Lista Produtos</h2>
                <hr />
                <List >
                    {this.getProdutos().map((produto, index) => {
                        return (
                            <CardProduto key={index} produto={produto} addItemCarrinho={this.addItemCarrinho} />
                        );
                    })}
                </List>
            </Fragment>
        );
    }

};