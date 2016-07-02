import { FETCH_BLOGS, FETCH_BLOG } from '../actions/index';

const INITIAL_STATE = { all: [], blog: null };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_BLOGS:
    return { ...state, all: action.payload.data };
    break;

    case FETCH_BLOG:
    return { ...state, blog: action.payload.data };
    break;

    default:
    return state;
  }
}
