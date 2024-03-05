import { Link } from 'react-router-dom'
//import resources from "../js/ressurser"
export default function Layout({resources, children}) {

    const allCategories = resources.map(item => item.category)
    const uniqueCategories = new Set(allCategories)
    const categories = Array.from(uniqueCategories)

    return(
        <>
        <header>
            <nav>
                <ul className="resource-list">
                    {categories.map((category, index) => <li key={index} className="tab"><Link to={category}>{category}</Link></li>)}
                </ul>
            </nav>
        </header>
        <main>
        {children}
        </main>
        
        </>
    )
}