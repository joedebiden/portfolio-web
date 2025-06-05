import Header from "./header"
import Footer from "./footer"

export default function Index() {
    return (
        <>
            <Header/>
            <span className="horizontal-separator"></span>
            <div className="parcours" id="parcours">
                <p>Mon parcours</p>
                <p>Sti2d</p>
                <p>But informatique Valence</p>
                <p>Stage Axopen Lyon</p>
            </div>
            <span className="horizontal-separator"></span>
            <div className="competences" id="competences">
                <p>Mes compétences</p>
                <p>Langages maitrisés : Python, Typescript, Js, Java, Html/Css, Sql, Php</p>
                <p>API Rest, API stripe, API Telegram</p>
                <p>Framework : Flask, Springboot, Angular, React (bibliothèque JS), Symfony, Tailwindcss</p>
                <p>Devops : Mise en production, Docker, Kubernetes, Cloud Azure</p>
                <p>Travail d'équipe et organisé</p>
            </div>
            <span className="horizontal-separator"></span>
            <div className="projets" id="projets">
                <p>Mes projets</p>
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
            <Footer/>
        </>
    )
}

