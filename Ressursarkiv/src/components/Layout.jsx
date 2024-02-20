import { Link } from 'react-router-dom'
import resources from "../js/ressurser"
export default function Layout({children}) {
    return(
        <>
        <header>
            <nav>
                <ul className="resource-list">
                    {resources.map((category, index) => <li key={category.category+index} className="tab"><Link to={category.category}>{category.category}</Link></li>)}
                </ul>
            </nav>
        </header>
        <main>
        {children}
        </main>
        
        </>
    )
}