import {Link} from "react-router-dom"
export default function ContentPage({title, text, url}){
    return (
        <article className="tab-content">
        <h2>{title}</h2>
        <p>{text}</p>
        <ul>
            <li> 
                <Link to={url}>
                    {url}
                </Link>
            </li>
        </ul>
    </article>
    )
}