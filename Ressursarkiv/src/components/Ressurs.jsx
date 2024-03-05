import { Link, useParams } from "react-router-dom"
//import resources from "../js/ressurser"

import { useEffect, useState } from "react"

export default function Ressurs({resources}){
    const {slug} = useParams()
    const [resource, setResource] = useState()

    useEffect(() => {
        console.log(slug)
        setResource(resources.filter(resource => resource.category === slug))
    },[slug])
    console.log("Check", resource)
    return (
        <article className="tab-content">
        <h2>{slug}</h2>
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