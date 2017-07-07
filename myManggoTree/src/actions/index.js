export const userSubmit = (user) => {
  return {
    type: 'SUBMIT_USER',
    payload: user,
  };
}

export const userEdit = (user) => {
  return {
    type: 'UBAH_USER',
    payload: user,
  };
}

export const treeSubmit = (tree) => {
  return {
    type: 'SUBMIT_TREE',
    payload: tree,
  };
}

export const treeEdit = (tree) => {
  return {
    type: 'UBAH_TREE',
    payload: tree,
  };
}

export const newYear = (treeAge,matureAge,maxAge) => {
  let thisYearFruits = 0
  if(treeAge>=matureAge){
    thisYearFruits = Math.ceil(Math.random() * 25)
  }
  return {
    type: 'NEW_YEAR',
    payload: thisYearFruits
  };
}

export const harvest = () => {
  return {
    type: 'HARVEST',
  };
}
// export const dataLoad = (data) => {
//   return {
//     type: 'LOAD_DATA',
//     payload: data,
//   };
// }
//
// export const dataReset = () => {
//   return {
//     type: 'RESET_DATA',
//   };
// }