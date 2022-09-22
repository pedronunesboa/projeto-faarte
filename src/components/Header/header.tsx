function Header() {
  return (
            <header>
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/"><img className="navbar-brand navbar-logo"
                                src="./src/assets/img/logoFAARTE.png" alt="Logo FARTE"/></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <form className="d-flex" role="search">
                                    <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
                                    <button className="btn btn-outline-success-pesquisar" type="submit"><img className="icon-search"
                                            src="./src/assets/img/search.svg"/></button>
                                </form>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page"
                                        href="/institucional">Institucional</a>
                                </li>
                                <a href="/login"><button type="button"
                                        className="btn btn-primary-button">Login</button></a>
                                <span className="span-ou">Ou</span>
                                <a href="/cadastro"><button type="button"
                                        className="btn btn-primary-button">Cadastre-se</button></a>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
  )
}

export default Header