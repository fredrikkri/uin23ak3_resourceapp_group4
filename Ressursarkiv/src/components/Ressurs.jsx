import { useParams } from "react-router-dom"
import resources from "../js/ressurser"
import ContentPage from "./ContentPage"
import { useEffect, useState } from "react"

export default function Ressurs(){
    const {slug} = useParams()
    const [resource, setResource] = useState()

    useEffect(() => {
        setResource(resources.filter(resource => resource.category === slug))
    },[])
    //console.log("Check", resource)
    return (
        <section>
            <h1>{slug}</h1>
            {resource?.map((item, index) =>  <ContentPage key={index} title={item.title} category={item.category} url={item.url} />)}
        </section>
    
    )
}