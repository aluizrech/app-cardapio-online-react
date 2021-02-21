import React, {Component, Fragment} from "react";

import LinkWrapper from "../../Components/Navegacao/LinkWrapper";

export default class NotFound extends Component {

    render() {
        return (
            <Fragment>
                <h1>404 - Página não encontrada</h1>
                <LinkWrapper to="/">Voltar para home</LinkWrapper>
            </Fragment>
        );
    }

}