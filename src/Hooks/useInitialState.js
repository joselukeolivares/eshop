import React,{useState} from 'react'


const initialState={
    cart:{}
}

const useInitialState=(payload)=>{
    //payload es el producto a agregar
    const [state,setState]=useState(initialState)

    const addToCart=(product)=>{
        setState({...state,cart:[...state.cart,payload]})
    }
    return {
        state,
        addToCart
    }
}

export {useInitialState}