import React, {Component, Fragment} from "react";
import ProdutoService from "../../Services/ProdutoService";
import NumberFormat from "../../Utils/NumberFormat";
import {makeStyles} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import CardProduto from "../../Components/Produto/CardProduto";

export default class ListaProdutos extends Component {

    getColumns() {
        return [
            {field: 'nome', headerName: 'Nome Produto', width: 150},
            {field: 'preco', headerName: 'Preço Produto', width: 150, type: 'number', valueFormatter: ({ value }) => NumberFormat.getFormatter().format(Number(value)) },
        ];
    }

    getProdutos(){
        return ProdutoService.getProdutos();
    }

    useStyles(){
        return makeStyles((theme) => ({
            root: {
                width: '100%',
                maxWidth: 360,
                backgroundColor: theme.palette.background.paper,
            },
            large: {
                width: '70px',
                height: '70px',
            },
        }))
    };

    render() {
        const classes = this.useStyles();
        return (
            <Fragment>
                <h2>Lista Produtos</h2>
                <hr />
                <List  className={classes.root} >
                    {this.getProdutos().map((protudo) => {
                        return (
                            /*<ListItem key={protudo.id} button>
                                <ListItemAvatar>
                                    <Avatar className={classes.large}
                                        alt={`Avatar n°${protudo.id + 1}`}
                                        src={`${protudo.imagem}`}
                                    />
                                </ListItemAvatar>
                                <div>
                                    <span style={{fontWeight: 'bolder'}}>{protudo.nome}</span> <br />
                                    <span>{this.formatarPreco(protudo.preco)}</span>
                                </div>
                                <input type="number"/>
                                <textarea />
                            </ListItem>*/
                            <CardProduto key={protudo.id} {...protudo}/>
                        );
                    })}
                </List>
            </Fragment>
        );
    }

};