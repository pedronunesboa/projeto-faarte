import './login.css'

function Login(){
    return (

        <body>
            <header>
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="../html/index.html"><img className="navbar-brand navbar-logo"
                                src="../assets/img/logoFAARTE.png" alt="Logo FARTE"/></a>
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
                                            src="../assets/img/search.svg"/></button>
                                </form>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page"
                                        href="../html/institucional.html">Institucional</a>
                                </li>
                                <a href="../html/login.html"><button type="button"
                                        className="btn btn-primary-button">Login</button></a>
                                <span className="span-ou">Ou</span>
                                <a href="../html/fichacadastro.html"><button type="button"
                                        className="btn btn-primary-button">Cadastre-se</button></a>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <main className="login">
                
                <div className="login__container">
                    
                    <h1 className="login__title">Login</h1>
                    <form action="" className="login__form">
                        <input className="login__input" type="email" placeholder="example@email.com" required/>
                        <span className="login__input-border"></span>
                        <input className="login__input" type="password" id="password" name="password" placeholder="senha 8 caracteres" pattern="(?=^.{6,}$)((?=.*\w)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[|!'$%&\/\(\)\?\^\'\\\+\-\*]))^.*" required/>
                        <span className="login__input-border"></span>
                        <button className="login__submit">Login</button>
                        <a className="login__reset" href="#">Esqueceu a senha?</a>
                        <a className="login__registre" href="../html/fichacadastro.html">Registre-se</a>
                    </form>
                </div>
            </main>
            
            <footer className="rodape" >
                <a href='https://www.freepik.com/photos/haberdashery'>Haberdashery photo created by freepik - www.freepik.com</a>
            </footer>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
                crossOrigin="anonymous"></script>
            </body>

    )
}

export default Login