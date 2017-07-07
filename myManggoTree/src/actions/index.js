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