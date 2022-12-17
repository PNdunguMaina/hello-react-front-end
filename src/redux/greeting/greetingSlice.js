// action
const FETCH_GREETING = 'FETCH_GREETING';

// initialize state
const initialState = 'Hello, world!';

// reducer function
export default function greetingsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_GREETING: {
      return action.payload;
    }
    default:
      return state;
  }
}

export function fetchGreeting() {
  return async (dispatch) => {
    const responseData = await fetch('/api/v1/messages/greetings/random', {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await responseData.json();

    dispatch({
      type: FETCH_GREETING,
      payload: data.greeting,
    });
  };
}
