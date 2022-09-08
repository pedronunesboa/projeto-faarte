// import './App.css'
import './cardProduto.css'
import './carrosel.css'

function Home() {
  return( 
<body>
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
                            <a className="nav-link active" aria-current="page" href="/institucional">Institucional</a>
                        </li>
                        <a href="/login"><button type="button" className="btn btn-primary-button">Login</button></a>
                        <span className="span-ou">|</span>
                        <a href="/cadastro"><button type="button" className="btn btn-primary-button">Cadastre-se</button></a>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <main>
        <section id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="./src/assets/img/pexels-sanketh-rao-716107.jpg" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="./src/assets/img/pexels-monstera-6621339.jpg" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="./src/assets/img/pexels-marina-sirazetdinova-2961010.jpg" className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </section>

        <h2>Ofertas</h2>

        <section className="card-produto">
            <div className="card-ofertas" id="card1">
                <img src="./src/assets/img/img1.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                    <a href="#" className="btn btn-primary" onClick="handleSeeProducts(this, 'card1')">Ver produto</a>
                </div>
            </div>

            <div className="card-ofertas" id="card2">
                <img src="./src/assets/img/6ffd62e0-5c50-45c1-9434-35a7f5d0a72e.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title 2</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content</p>
                    <a href="#" className="btn btn-primary" onClick="handleSeeProducts(this, 'card2')">Ver produto</a>
                </div>
            </div>

            <div className="card-ofertas" id="card3">
                <img src="./src/assets/img/8952a8d0-5273-4f79-a6c9-cf2ea6648e71.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                    <a href="#" className="btn btn-primary" onClick="handleSeeProducts(this, 'card3')">Ver produto</a>
                </div>
            </div>

            <div className="card-ofertas" id="card4">
                <img src="./src/assets/img/8f3b1a6e-530a-4ccb-b895-881af8f49b12.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                    <a href="#" className="btn btn-primary" onClick="handleSeeProducts(this, 'card4')">Ver produto</a>
                </div>
            </div>
            <div className="card-ofertas" id="card5">
                <img src="./src/assets/img/img1.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                    <a href="#" className="btn btn-primary" onClick="handleSeeProducts(this, 'card5')">Ver produto</a>
                </div>
            </div>
            <div className="card-ofertas" id="card6">
                <img src="./src/assets/img/6ffd62e0-5c50-45c1-9434-35a7f5d0a72e.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                    <a href="#" className="btn btn-primary" onClick="handleSeeProducts(this, 'card6')">Ver produto</a>
                </div>
            </div>
            <div className="card-ofertas" id="card7">
                <img src="./src/assets/img/8952a8d0-5273-4f79-a6c9-cf2ea6648e71.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                    <a href="#" className="btn btn-primary" onClick="handleSeeProducts(this, 'card7')">Ver produto</a>
                </div>
            </div>
            <div className="card-ofertas" id="card8">
                <img src="./src/assets/img/8f3b1a6e-530a-4ccb-b895-881af8f49b12.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                    <a href="#" className="btn btn-primary" onClick="handleSeeProducts(this, 'card8')">Ver produto</a>
                </div>
            </div>
            <div className="card-ofertas" id="card9">
                <img src="./src/assets/img/8f3b1a6e-530a-4ccb-b895-881af8f49b12.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                    <a href="#" className="btn btn-primary" onClick="handleSeeProducts(this, 'card9')">Ver produto</a>
                </div>
            </div>
        </section>
    </main>
    <footer></footer>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
        crossOrigin="anonymous"></script>
    <script src="../js/produto.js"></script>
</body>
  )
}

export default Home
