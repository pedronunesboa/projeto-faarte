
function Produto(){
  return (

    <body onload="loadProductPage()">
    <header>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/"
            ><img
              className="navbar-brand navbar-logo"
              src="../assets/img/logoFAARTE.png"
              alt="Logo FARTE"
          /></a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Buscar"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success-pesquisar" type="submit">
                  <img className="icon-search" src="../assets/img/search.svg" />
                </button>
              </form>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/institucional"
                  >Institucional</a
                >
              </li>
              <a href="/login"
                ><button type="button" className="btn btn-primary-button">
                  Login
                </button></a
              >
              <span className="span-ou">Ou</span>
              <a href="/cadastrar"
                ><button type="button" className="btn btn-primary-button">
                  Cadastre-se
                </button></a>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <main>
      <div className="card">
        <img className="card-img-top" alt="..." id="produto-img" />
        <div className="">
          <h5 className="card-title" id="produto-title"></h5>
          <p className="card-text" id="produto-text"></p>
          <a href="#" className="btn-instituicao-postadora">Disponível em</a>
        </div>
      </div>

      <h2>Produtos Relacionados</h2>

      <section className="card-produto">
        <div className="card-relacionados" id="card1">
          <img
            src="../assets/img/img1.jpg"
            className="card-img-top-rel"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a
              href="#"
              className="btn btn-primary"
              onclick="handleSeeProducts(this, 'card1')"
              >Ver produto</a
            >
          </div>
        </div>

        <div className="card-relacionados" id="card2">
          <img
            src="../assets/img/6ffd62e0-5c50-45c1-9434-35a7f5d0a72e.jpg"
            className="card-img-top-rel"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title 2</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content
            </p>
            <a
              href="#"
              className="btn btn-primary"
              onclick="handleSeeProducts(this, 'card2')"
              >Ver produto</a
            >
          </div>
        </div>

        <div className="card-relacionados" id="card3">
          <img
            src="../assets/img/8952a8d0-5273-4f79-a6c9-cf2ea6648e71.jpg"
            className="card-img-top-rel"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a
              href="#"
              className="btn btn-primary"
              onclick="handleSeeProducts(this, 'card3')"
              >Ver produto</a
            >
          </div>
        </div>

        <div className="card-relacionados" id="card4">
          <img
            src="../assets/img/8f3b1a6e-530a-4ccb-b895-881af8f49b12.jpg"
            className="card-img-top-rel"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a
              href="#"
              className="btn btn-primary"
              onclick="handleSeeProducts(this, 'card4')"
              >Ver produto</a
            >
          </div>
        </div>
      </section>
    </main>
    <footer></footer>
    <script
      type="text/javascript"
      src="https://p.simg.uol.com.br/out/pagseguro/j/simulador_de_frete.js"
    ></script>
    <script
      src="../js/produto.js"
      type="text/javascript"
      defer="defer"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
      crossorigin="anonymous"
    ></script>
  </body>

  )
}
  
export default Produto