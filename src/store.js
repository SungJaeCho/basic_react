// 액션
export const increase = () => ({ type: 'INCREMENT' });
export const decrease = () => ({ type: 'DECREMENT' });

// 상태
const initstate = {
  number: 0,
};

// 액션의 결과를 걸러내는 작업을 함
const reducer = (state = initstate, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { number: state.number + 1 }; // return 되면 그걸 호출한 쪽에서 받는게 아니라 return 되는순간 ui변경됨
    case 'DECREMENT':
      return { number: state.number - 1 };
    default:
      return state;
  }
};

export default reducer;
