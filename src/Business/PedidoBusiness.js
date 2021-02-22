import ProdutoService from "../Services/ProdutoService";

export default {

    getProdutosPedido(produtosCarrinho){
        return produtosCarrinho.map(itemPedido => {
            const produto = ProdutoService.getProdutos().filter(p => {
                return p.id === itemPedido.produtoId
            })[0];
            return {
                produto: produto,
                pedido: {
                    quantidade: itemPedido.quantidade,
                    anotacao: itemPedido.anotacao,
                }
            };
        });
    }

}