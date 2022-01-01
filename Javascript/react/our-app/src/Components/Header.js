import React from 'react'
import Body from './body'
const Header = (props) => {
    return (
        <div>
            <h1>{props.myname}</h1>
            <Body />
        </div>
    )
}

export default Header
