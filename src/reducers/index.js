import { ADD_RESULTS, ADD_QUERY } from '../constants/action-types'

const initialState = {
    results: [],
    queries: []
}

function rootReducer(state = initialState, action) {
    if (action.type === ADD_RESULTS) {
        return Object.assign({}, state, {
            results: [...action.payload]
        })
    }
    if (action.type === ADD_QUERY) {
        return Object.assign({}, state, {
            queries: state.queries.concat(action.payload)
        })
    }
    return state
}

export default rootReducer
