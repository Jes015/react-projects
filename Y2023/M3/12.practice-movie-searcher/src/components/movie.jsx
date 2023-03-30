export default function Movie ({ title, year, poster }) {
    return(
        <div>
            <header>
                <span>{title}</span>
                -   
                <span>{year}</span>
            </header>
            <footer>
                <img src={poster} alt={title} />
            </footer>
        </div>
    )
}