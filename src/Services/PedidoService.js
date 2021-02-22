const server = "http://localhost:8080/api";

export default {

    salvarPedido(pedido){
        return fetch(`${server}/pedido/`, {method: 'POST', headers: {'content-type': 'application/json'}, body: JSON.stringify(pedido)})
            .then(res => res.json());
    }

}