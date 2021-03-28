import { ADD_RESULTS, ADD_QUERY } from '../constants/action-types'

export function addResults(payload) {
    return { type: ADD_RESULTS, payload }
}
export function addQueryToSideBar(payload) {
    return { type: ADD_QUERY, payload }
}
