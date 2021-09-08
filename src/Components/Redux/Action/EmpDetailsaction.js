export const addEmp =(name,desc,image)=>({
    type:"ADD_EMP",
    empData:{
        name,
        image,
        desc,
    }
})