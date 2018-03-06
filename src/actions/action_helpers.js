// import axios from 'axios';

export function isLoading(type, bool) {
  return {
    type: type,
    isLoading: bool
  };
}

// export function fetchData(url, action) {
//   return dispatch => {
//     dispatch(isLoading(true));
//     axios
//       .get(url)
//       .then(response => {
//         if (response.status !== 200) {
//           throw Error(response.statusText);
//         }
//         dispatch(isLoading(false));
//         return response;
//       })
//       .then(response =>
//         dispatch({
//           type: action,
//           payload: response.data
//         })
//       )
//       .catch(error => console.error(error));
//   };
// }
