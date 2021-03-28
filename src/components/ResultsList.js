import React from 'react'
import store from '../store'
import { useSelector } from 'react-redux'

export default function ResulstList() {
    let { results } = store.getState()
    useSelector(state => state)
    return (
        <ul>
            {results.length > 0
                ? results.map(item => (
                      <li key={item.id}>
                          <a href={item.url}>{item.title}</a>
                      </li>
                  ))
                : null}
        </ul>
    )
}
