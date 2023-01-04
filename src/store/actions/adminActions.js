import { getAllUsers } from '~/services/adminService';
export const addTodo = (text) => ({
  type: 'ADD_TODOS',
  data: text,
});
export const fetchAllUsers = () => async (dispatch) => {
  let res = await getAllUsers();

  dispatch(setTodo(res.data));
};
export const setTodo = (data) => ({
  type: 'SET_TODOS',
  data: data,
});
