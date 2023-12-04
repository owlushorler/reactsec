import { toHaveDisplayValue } from "@testing-library/jest-dom/matchers"
import {createStore} from "redux"


const Reducer= (state = {dis:true}, action)=>{
if(action.type == "ligt"){
  return ({dis:false})
}else if(action.type == "dark"){
  return  ({dis:true})
}
return state
}


const store = createStore(Reducer)


export default store



