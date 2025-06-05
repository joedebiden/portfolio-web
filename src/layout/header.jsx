import { useState, useEffect } from "react"

export default function Header() {
    
    const [scrollPosition, setScrollPosition] = useState(0);
    
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };
    
    const changeHeader = (scrollPosition) => {
        const navMenu = document.querySelector('.liste');
        if (scrollPosition >= 80) {
            navMenu.classList.add('sticky-nav');
        } else {
            navMenu.classList.remove('sticky-nav');
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, {passive:true});
        changeHeader(scrollPosition);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [scrollPosition]);



    return (
        <>
            <div className="accroche">
                <p>Bienvenue</p>
                <p>Je m'appelle Evan</p>
                <p>Je suis étudiant en informatique</p>
            </div>
            <div className="liste">
                <ul>
                    <li><a href="#parcours">Parcours</a></li>
                    <li><a href="#competences">Compétences</a></li>
                    <li><a href="#projets">Projets</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </>
    )
}

