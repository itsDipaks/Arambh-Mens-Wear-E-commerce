const initialstate={
    isloading:false,
   token:"",
    iserror:false
}

const AuthReducer=(state=initialstate,{type,payload})=>{
    switch(type){
        default:{
            return state
        }
    }
}

export default AuthReducer;