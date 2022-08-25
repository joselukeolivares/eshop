import React from 'react'
import '../styles/global.css'
import { Layout } from '../components/containers/Layout';
import { RecoveryPassword } from '../components/containers/RecoveryPassword';
import { Login } from '../components/containers/Login';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {Home} from '../pages/Home'
import {NotFound} from '../pages/NotFound'

const App=()=>{
    return (
        <BrowserRouter>
          <Layout>
            <Routes>
                    <Route  path="/" element={<Home />}/>
                    <Route  path="/login" element={<Login />}/>
                    <Route  path="/recovery-password" element={<RecoveryPassword />}/>                    
                    <Route path="*" element={<NotFound/>}/>
            </Routes>
          </Layout>
        </BrowserRouter>
    )
}

export default App