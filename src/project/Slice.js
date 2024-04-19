// import { createSlice } from "@reduxjs/toolkit"

// const initialstate={
//     userDetails:[]
// }
// const Slice=createSlice({
//     name:"users",
//     initialstate,

//     reducers:{
//         adduser:(state,action)=>{
//          state.userDetails.push(action.payload)
//         }

//     }
// })

// export const{adduser}=Slice.actions
// export default Slice.reducer
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    userDetails: []
}

const slice = createSlice({
    name: "users",
    initialState, // Corrected typo here
    reducers: {
        adduser: (state, action) => {
            state.userDetails.push(action.payload)
        },
        addToCart:(state,action)=>{
            state.userDetails.push(action.payload)
        }
    }
})

export const { adduser,addToCart } = slice.actions
export default slice.reducer
