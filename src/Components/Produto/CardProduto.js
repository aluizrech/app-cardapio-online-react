import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import {Button, Fab, TextField} from "@material-ui/core";
import NumberFormat from "../../Utils/NumberFormat";
import {AddIcon} from "@material-ui/data-grid";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        float: "left",
        margin: 6
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    fullCard: {
        marginTop: '15px',
        width: '100%',
    },
    botaoAdd: {
        float: 'right',
        marginTop: '10px',
        marginBottom: '10px',
    }
}));

export default function CardProduto(props) {
    const classes = useStyles();

    const formatarPreco = (preco) => {
        return NumberFormat.getFormatter().format(Number(preco))
    }

    return (
        <Card className={classes.root} variant="outlined">
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar} src={props.imagem} />
                }
                title={props.nome}
                subheader={formatarPreco(props.preco)}
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
                    className={classes.fullCard}
                />
                <TextField
                    id="outlined-multiline-static"
                    label="Anotação"
                    multiline
                    rows={4}
                    variant="outlined"
                    className={classes.fullCard}
                />
                <Fab color="primary" aria-label="add" size="small" className={classes.botaoAdd}>
                    <AddIcon />
                </Fab>
            </CardContent>
        </Card>
    );
}
