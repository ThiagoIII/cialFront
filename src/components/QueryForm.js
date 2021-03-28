import React from 'react'
import handleSendQuery from '../util/handleSendQuery'
import ResultsList from './ResultsList'
import store from '../store'
import { useSelector } from 'react-redux'

const QueryForm = () => {
    const [query, setQuery] = React.useState('')
    let { queries } = store.getState()
    useSelector(state => state)

    return (
        <>
            <form>
                <input
                    type="text"
                    onChange={e => setQuery(e.target.value)}
                    required
                    minLength="1"
                />
                <button
                    type="button"
                    onClick={e =>
                        handleSendQuery(e, 'fetchQuery', query, queries)
                    }
                >
                    Submit here for GET http method
                </button>
                <button
                    type="button"
                    onClick={e =>
                        handleSendQuery(e, 'fetchQueryPost', query, queries)
                    }
                >
                    Submit here for POST http method
                </button>
            </form>
            <ResultsList />
        </>
    )
}

export default QueryForm
