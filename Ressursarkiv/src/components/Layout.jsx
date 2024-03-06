import { Link } from 'react-router-dom'
import { useState } from 'react'
export default function Layout({resources, children}) {

    const allCategories = resources.map(item => item.category)
    const uniqueCategories = new Set(allCategories)
    const categories = Array.from(uniqueCategories)

    const [tabState, changeState] = useState({
        activeTab: categories[0],
        tabs: categories
    });

    function toggleTabState(index) {
        changeState({ ...tabState, activeTab: tabState.tabs[index] });
    }

    function toggleTabStyle(index) {
        if(tabState.tabs[index] === tabState.activeTab) return "tab tab-active"
        else return "tab"
    }

    return(
        <>
        <header>
            <nav>
                <ul className="resource-list">
                {tabState.tabs.map((category, index) => 
                    <li key={index} className={toggleTabStyle(index)} onClick={() => {toggleTabState(index)}} ><Link to={category}>{category}</Link></li>)}
                </ul>
            </nav>
        </header>
        <main>
        {children}
        </main>
        
        </>
    )
}