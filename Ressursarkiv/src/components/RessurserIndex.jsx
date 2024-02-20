import { Link } from "react-router-dom";
import resources from "../js/ressurser";
export default function RessurserIndex(){

    let tabsHTML = "";
    //tab_items();
    function tab_items() {
        resources.map(recourse, index => tabsHTML += `<li class="tab"><a href="#">${recourse.category}</li>`);
    
        const main = document.getElementsByTagName("ul");
        main[0].innerHTML = tabsHTML;
    
    }

    return(
        <> 
            <h1>Ressursarkiv</h1>
            <ul className="resource-list">
                {resources.map((category, index) => <li key={category.category+index} className="tab"><Link to={category.category}>{category.category}</Link></li>)}
            </ul>
        </>
    )
}