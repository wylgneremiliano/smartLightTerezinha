const Loader = () => {
    return <div className="loading">
        <span className="texto">Carregando</span>
        <div className="progress-bar-container">
            <div className="progress-bar-fill" />
        </div>
    </div>
}

export { Loader }