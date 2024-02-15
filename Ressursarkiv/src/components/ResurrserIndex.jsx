import { Link } from "react-router-dom";
import resources from "../js/ressurser";
export default function ResurrserIndex(){

    let tabsHTML = "";
    //tab_items();
    function tab_items() {
        resources.map(recourse, index => tabsHTML += `<li class="tab"><a href="#">${recourse.category}</li>`);
    
        const main = document.getElementsByTagName("ul");
        main[0].innerHTML = tabsHTML;
    
    }

    return(
        <> 
            <h1>Resurrser</h1>
            <ul>
                {resources.map((category, index) => <li key={category.category+index} className="tab"><Link to={category.category}>{category.category}</Link></li>)}
            </ul>
        </>
    )
}