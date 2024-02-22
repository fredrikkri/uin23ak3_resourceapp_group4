import { Link, useParams } from "react-router-dom"
import resources from "../js/ressurser"
import ContentPage from "./ContentPage"
import { useEffect, useState } from "react"

export default function Ressurs(){
    const {slug} = useParams()
    const [resource, setResource] = useState()

    useEffect(() => {
        console.log(slug)
        setResource(resources.filter(resource => resource.category === slug))
    },[slug])
    console.log("Check", resource)
    return (
        <article className="tab-content">
        <h1>{slug}</h1>
        <ul>
            {resource?.map((item, index) =>  
            <li key={index} title={item.title} category={item.category} url={item.url}> 
                <Link to={item.url}>
                    {item.title}
                </Link>
            </li>)}
        </ul>
        </article>
    )
}