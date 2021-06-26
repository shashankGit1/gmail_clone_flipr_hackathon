import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Header from './Header'
import Sidebar from './Sidebar'
function Authorized() {
    const appAuth = useSelector(({ app }) => app)
    useEffect(() => {
        console.log(appAuth)
    })

    return (
        <div>
            <Header/>
            <Sidebar/>
        </div>
    )
}

export default Authorized
