/*

Techsith redux tutorial code

const initialState = {
    age:20,
    history: []
};

const reducer = (state=initialState, action) => {
    const newState = {...state};

    switch(action.type){
        case 'AGE_UP': 
            return {
              ...state,
              age: state.age + action.value,
              history: state.history.concat({id:Math.random(), age: state.age + action.value })
            }
        
        case 'AGE_DOWN': 
            return {
              ...state,
              age: state.age - action.value,
              history: state.history.concat({id:Math.random(), age: state.age - action.value})
            }

        case "DEL_ITEM":
            return {
              ...state,
              history:state.history.filter(el => el.id!==action.key)
            }
    }
    return newState;
};

export default reducer;

*/