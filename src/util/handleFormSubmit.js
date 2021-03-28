const handleSubmit = async (e, endpoint, query, save) => {
    e.preventDefault()
    let queryobj = { query: query, save: save }
    let url = 'http://localhost:3333'
    let results = await fetch(`${url}/${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(queryobj)
    })
    let data = await results.json()
    return data
}

export default handleSubmit
