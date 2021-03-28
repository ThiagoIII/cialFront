import React from 'react'
import store from '../store'
import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import handleSendQuery from '../util/handleSendQuery'

const SideList = () => {
    let { queries } = store.getState()
    useSelector(state => state)

    return (
        <menu>
            <h2>SIDEBAR</h2>
            <ul>
                {queries.length > 0
                    ? queries.map(item => (
                          <li
                              onClick={e =>
                                  handleSendQuery(
                                      e,
                                      'fetchQuery',
                                      e.target.innerText,
                                      queries
                                  )
                              }
                              key={uuidv4()}
                          >
                              {item}
                          </li>
                      ))
                    : null}
            </ul>
        </menu>
    )
}

export default SideList
