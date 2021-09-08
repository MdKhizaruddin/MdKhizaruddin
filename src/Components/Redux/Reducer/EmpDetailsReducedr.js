const initialState={
    empData:[
        {
            name:"Abdullah",
            desc:"He is good at database",
            image:"logo192.png",
        },
        {
            name:"Umar",
            desc:"He is good at database",
            image:"logo192.png",
        }
    ]
}
export const empReducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD_EMP":
        return{...state, empData:action.empData,...state.empData}
        default:
            return state;
    }
    
}