import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Header from './Header'
function Authorized() {
    const appAuth = useSelector(({ app }) => app)
    useEffect(() => {
        console.log(appAuth)
    })

    return (
        <div>
            <Header/>
        </div>
    )
}

export default Authorized
