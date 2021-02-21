import React from 'react';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import MainLayout from "./Components/Layout/MainLayout";


const isAuthenticated = () => {
    try {
        return true;
    } catch (error) {
        return false;
    }
}

function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route {...rest} render={props =>
                isAuthenticated() ? (
                    <MainLayout>
                        <Component {...props} />
                    </MainLayout>
                ) : (
                    <Redirect to={{ pathname: "/login", }}/>
                )
            }
        />
    );
}

const AppCardapioRouter = () => {

    return (
        <BrowserRouter>
            <Switch>
                <PrivateRoute path='/' exact={true} component={Home}/>
                <Route path='/login' component={Login}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    );

};
export default AppCardapioRouter;