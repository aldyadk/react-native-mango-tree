const initialState = {
  user:'',
  tree: '',
  loggedUser:'',
  loggedTree: '',
  treeAge: 0,
  fruits: 0,
  healthyStatus: true,
  data: []
}

export default (state = initialState, action)=>{
  if(action.type === 'UBAH_USER'){
    return {...state, user: action.payload}
  }
  if(action.type === 'UBAH_TREE'){
    return {...state, tree: action.payload}
  }
  if(action.type === 'SUBMIT_USER'){
    return {...state, loggedUser: action.payload}
  }
  if(action.type === 'SUBMIT_TREE'){
    return {...state, loggedTree: action.payload}
  }
  if(action.type === 'NEW_YEAR'){
    return {...state, treeAge: state.treeAge+1}
  }
  if(action.type === 'HARVEST'){
    return {...state, fruits: 0}
  }
  // if(action.type === 'LOAD_DATA'){
  //   return {...state, data: action.payload}
  // }
  // if(action.type === 'RESET_DATA'){
  //   return {data: []}
  // }
  return state
}