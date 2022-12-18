export const initialState = null;

export const reducer = (state, action) =>{
    console.log(state);
    if(action.type === "USER"){
        return action.payload;
    }
    return state;
}