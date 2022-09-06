import React from 'react'
import {Header} from '../components/Header'
import ProductList from '../containers/ProductList'

const Home=()=>{
    return (
      <React.Fragment>
        <Header/>
          <ProductList />
      </React.Fragment>      
    )
}

export {Home}