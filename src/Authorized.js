import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
function Authorized() {
    const appAuth = useSelector(({ app }) => app)
    useEffect(() => {
        console.log(appAuth)
    })

    return (
        <div>
            USER HAS SUCCESSFULLY LOGGED IN

        </div>
    )
}

export default Authorized
