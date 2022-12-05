import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

const IndivExample=()=>{
    const [example,setExample]= useState(null)
    let params= useParams()

    const getMyExample=async()=>{
        let myresponse=await axios.get(`newexample/${params.id}`)
        setExample(myresponse.data['example'])
    }

    useEffect(()=>{
        getMyExample()
    },[])

    return(
        <div>
            <h1>Heres your example</h1>
            {
                example === null ?
                null 
                :
                <div>
                    <h3>{example.title}</h3>
                    <p>{example.content}</p>
                </div>
            }
        </div>
    )
}
export default IndivExample