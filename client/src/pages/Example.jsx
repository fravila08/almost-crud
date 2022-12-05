import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

const Example=()=>{
    const [examples, setExamples]= useState([])

    const displayExamples= async()=>{
        let myresponse=await axios.get('newExample')
        let myexamples= myresponse.data['examples']
        setExamples(myexamples)
    }

    useEffect(()=>{
        displayExamples()
    }, [])


    const createExample = async()=>{
        let title=document.getElementById("title").value
        let content=document.getElementById("content").value
        let myresponse= await axios.put("newExample",{
            'title':title,
            "content":content
        })
        if(myresponse.data['newUser']===true){
            displayExamples()
        }
    }

    return (
        <div>
            {examples.map((example)=>(
                <a href={`/#/indiv/${example.id}`}><h1>{example.title}</h1></a>
            ))}
            <form onSubmit={createExample}>
                <input id='title' placeholder="title" />
                <textarea id='content' />
                <input type="submit" />
            </form>
        </div>
    )
}
export default Example;