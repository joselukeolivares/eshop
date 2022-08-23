import React from 'react'
import '../styles/global.css'
import { Layout } from './containers/Layout';
import { RecoveryPassword } from './containers/RecoveryPassword';
import { Login } from './containers/Login';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

const App=()=>{
    return (
        <BrowserRouter>
            <Switch>
                <Layout>
                    <Route exact path="/" component={<Home/>}/>
                    <Route exact path="/login" component={<Login />}/>
                    <Route exact path="/recovery-password" component={<RecoveryPassword />}/>
                    <Route component={<NotFound/>} />
                </Layout>
            </Switch>
        </BrowserRouter>
    )
}

export default App