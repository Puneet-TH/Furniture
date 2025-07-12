import React from 'react'
import{useNavigate} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import { FadeLoader } from "react-spinners";
function AuthLayout({children, authentication = true}) {
    const navigate = useNavigate()
   const [loader, setLoader] = useState(false)
   const registerStatus = useSelector((state) => state.auth.status)
   useEffect(() => {
       if(!authentication && registerStatus != authentication){
        navigate('/')
       }
       if(authentication && registerStatus !== authentication){
        navigate('/login')
       }
       setLoader(false)
   },[navigate, registerStatus, authentication])

    return loader ? <><FadeLoader loader={loader}  aria-label="Loading Spinner"  /></> : <>{children}</>
}

export default AuthLayout
