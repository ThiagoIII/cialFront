import React from 'react'
import QueryForm from './components/QueryForm'
import SideList from './components/SideList'
import store from './store'
import { addQueryToSideBar } from './actions/index'
function App() {
    React.useEffect(() => {
        fetch('https://cialback.herokuapp.com/')
            .then(res => res.json())
            .then(async data => {
                let splited = data.split('\n')
                splited = splited.slice(0, splited.length - 1)
                await store.dispatch(addQueryToSideBar(splited))
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <main style={{ display: 'flex' }}>
            <QueryForm />
            <SideList />
        </main>
    )
}

export default App
