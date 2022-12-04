import axios from 'axios'
import React,{useEffect,useState} from 'react'
import QRCode from 'react-qr-code'
import Cookies from 'universal-cookie/es6'

const Exit = () => {
    const cookies = new Cookies()
    const [data,setData] = useState('')
    useEffect(()=>{
        axios.post('https://b06-404-not-found.vercel.app/record/data_exit',{},{
            headers:{
                'Content-Type':'application/json',
                'auth-token':cookies.get('token')
            }
        }).then(res=>{
            console.log(res.data)
            setData(JSON.stringify(res.data))
        })
    },[])
    return (
        <div className="grid place-items-center mt-5">
            <div style={{ height: "auto", margin: "0 auto", maxWidth: '200px', width: "200px" }}>
            <QRCode
                size={256}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                value={data}
                viewBox={`0 0 256 256`}
            />
        </div>
        </div>
    )
}

export default Exit