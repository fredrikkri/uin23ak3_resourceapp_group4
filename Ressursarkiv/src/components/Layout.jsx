import { Link } from 'react-router-dom'
export default function Layout({children}) {
    return(
        <>
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Hjemmeside</Link></li>
                    <li><Link to="ressurser">Resurrser</Link></li>
                </ul>
            </nav>
        </header>
        {children}
        <main>
        </main>
        
        </>
    )
}