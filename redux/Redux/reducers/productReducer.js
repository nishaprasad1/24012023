
const initialState = {
    products:[]
}

export const productReducer = (state=initialState , action)=>{
    console.log("In Product Reducer");
    // console.log(state);
    console.log(action);
    console.log(action.type);
    console.log(action.data);

    switch(action.type){
        case "setproduct":
            var newstate={...state,products:action.data}
            state = newstate;
            return state;
            default:
                return state;
    }
}