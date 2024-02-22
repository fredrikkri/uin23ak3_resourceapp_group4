import { useParams, Link } from "react-router-dom"
import resources from "../js/ressurser"

import { useEffect, useState } from "react"

export default function Ressurs(){
    const {slug} = useParams()
    const [resource, setResource] = useState()

    useEffect(() => {
        setResource(resources.filter(resource => resource.category === slug))
    },[])
    //console.log("Check", resource)
    return (
        resource?.map((item, index) =>  
        <section key={index} className="tab-content">
            <h1>{slug}</h1>
            <article>
                <h2>{item.title}</h2>
                <ul>
                    <li> 
                        <Link to={item.url}>{item.url}</Link>
                    </li>
                </ul>
            </article>
        </section>)
    )
}