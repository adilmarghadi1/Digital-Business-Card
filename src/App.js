import React from 'react'
import './App.css'


function Header() {
    return (
        <header>
            <nav>
                <ul className='nav-menu'>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Pricing</a>
                    </li>
                    
                    <li className="nav-item">
                        <a href="#" className="nav-link">About</a>
                    </li>
                    
                    <li className="nav-item">
                        <a href="#" className="nav-link">Contact</a>
                    </li>
                    
                </ul>
            </nav>
        </header>
    )
}

function Footer() {
    return (
        <footer>
            <small>© 2022 Adil development. All rights reserved.</small>
        </footer>
    )
}

function MainContent() {
    return (
        <div>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
        </div>
    )
}

function App() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

export default App;
