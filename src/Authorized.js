import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
function Authorized() {
    const appAuth = useSelector(({ app }) => app)
    useEffect(() => {
        console.log(appAuth)
    })
    const API = 'http://localhost:8080/api/v1/data'


    const [to, setTo] = React.useState('')
    const [subject, setSubject] = React.useState('')
    const [text, setText] = React.useState('')



    const fetchData = () => {
        console.log(to)
        console.log(subject)
        console.log(text)
        axios.post(API, {
            to: to,
            from: 'itzmepratyush@gmail.com',
            subject: subject,
            text: text
        }).then((res) => {
            console.log(res)
        })

    }

    const toHandler = (e) => {
        setTo(e.target.value)

    }
    const subjectHandler = (e) => {
        setSubject(e.target.value)

    }
    const textHandler = (e) => {
        setText(e.target.value)

    }
    return (
        <div className='App'>
            <input type="text" placeholder="to" onChange={toHandler} name="to" />
            <input type="text" placeholder="subject" onChange={subjectHandler} name="subject" />
            <input type="text" placeholder="text" onChange={textHandler} name="text" />
            <button onClick={fetchData} >Fetch Data</button>
        </div>
    );
}

export default Authorized
