import store from '../store'
import handleSubmit from '../util/handleFormSubmit'
import { addResults, addQueryToSideBar } from '../actions'

const handleSendQuery = async (e, endpoint, query, queries) => {
    let save = false
    if (!queries.find(item => item === query)) {
        await store.dispatch(addQueryToSideBar(query))
        save = true
    }

    let results = await handleSubmit(e, endpoint, query, save)
    store.dispatch(addResults(results))
}

export default handleSendQuery
