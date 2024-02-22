import { Link } from "react-router-dom";
import resources from "../js/ressurser";
export default function RessurserIndex(){

    const res = resources.map((category, index) => 
    <li key={category.category+index} className="tab">
        <Link to={category.category}>{category.category}</Link>
    </li>)

    console.log(res)
    return(
        
        <> 
            <h1>Ressursarkiv</h1>
            <nav>
            <ul className="resource-list">
                {res}
            </ul>
            </nav>
            
        </>
    )
}