import { NavLink } from "react-router-dom";

export default function Index() {
    return (
        <>
            <span className="horizontal-separator"></span>
            <div className="parcours" id="parcours">
                <NavLink to="/parcours" className="parcours-link">
                
                    <h1>Mon parcours</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right-square-fill" viewBox="0 0 16 16">
                        <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707"/>
                    </svg>
                </NavLink>
                
                <p>Sti2d</p>
                <p>But informatique Valence</p>
                <p>Stage Axopen Lyon</p>
            </div>
            <span className="horizontal-separator"></span>
            <div className="competences" id="competences">
                <p>Langages maitrisés : Python, Typescript, Js, Java, Html/Css, Sql, Php</p>
                <p>API Rest, API stripe, API Telegram</p>
                <p>Framework : Flask, Springboot, Angular, React (bibliothèque JS), Symfony, Tailwindcss</p>
                <p>Devops : Mise en production, Docker, Kubernetes, Cloud Azure</p>
                <p>Travail d'équipe et organisé</p>
            </div>
            <span className="horizontal-separator"></span>
            <div className="projets" id="projets">
                <NavLink to="/projet" className="projets-link">
                    <p>Mes projets</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right-square-fill" viewBox="0 0 16 16">
                        <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707"/>
                    </svg>
                </NavLink>
                <p><a href="https://telegram-toolbox.online/" _blank="#">Telegram scraper</a></p>
                <p><a href="">Valenstagram</a></p>
                <p>(Stage) : Application fullstack d'outil de gestion d'indemnisation</p>
            </div>
            <span className="horizontal-separator"></span>
            <div className="contact" id="contact">
                <p>Me contacter</p>
                <p>Je suis joignable par mail, ou conversation messarie cryptée pour toute demande</p>
            </div>
            <span className="horizontal-separator"></span>
        </>
    )
}

