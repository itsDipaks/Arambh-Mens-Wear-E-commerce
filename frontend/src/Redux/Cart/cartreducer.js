const initialstate={
    isloading:false,
    iserror:false,
    data:[]
}

const CartReducer=(state=initialstate,{type,payload})=>{
    switch(type){
        default:{
            return state
        }
    }
}

export default CartReducer