// import './App.css'

function App() {
  return( 
    <body>
      <header>
        <nav className='navbar navbar-expand-lg bg-light'>
            <div className='container-fluid'>
                <a className="navbar-brand" href="../html/index.html"><img className="navbar-brand navbar-logo" src="./src/assets/img/logoFAARTE.png" alt="Logo FARTE"></img></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <form className="d-flex" role="search">
                            <input className='form-control me-2' type='search' placeholder='Buscar' aria-label='Search'/>
                            <button className='btn btn-outline-success-pesquisar' type='submit'><img className='icon-search'
                                    src='./src/assets/img/search.svg'/></button>
                        </form>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page"
                                href="../html/institucional.html">Institucional</a>
                        </li>
                        <button type="button" className="btn btn-primary-button">Login</button>
                        <span className="span-ou">Ou</span>
                        <button type="button" className="btn btn-primary-button">Cadastre-se</button>
                    </ul>
                </div>
            </div>
        </nav>
    </header>

      
    <div className="App">
      <main className='institucional'>

<div className='institucional__container'>

    <h1 className='institucional__title'>Apresentação</h1>
    <p className='institucional__texto'>
        A FAARTE – Federação das Associações de Artesãos do Distrito Federal e Entorno, fundada a mais de trinta
        anos, é pioneira no segmento de artesanato. Como entidade sem fins lucrativos, tem a missão de fomentar
        ações que promovam os mais de trinta e quatro mil artesãos com seus trabalhos, em benefício da classe
        artesã e também da sociedade.
    </p>

    <h2 className='institucional__title'>Quem somos</h2>
    <p className='institucional__texto'>
        A Federação das Associações dos Artesãos do Distrito Federal e Entorno – FAARTE/DF, entidade de
        Administração Estadual, é formada pela união das entidades do Distrito Federal e Entorno, abaixo citadas
        no Artigo 4º, de âmbito Estadual e Municipal, tem sua sede no SCS Quadra 01 Sala 209 – Edifício Ceará –
        Brasília – DF, CEP: 70303-900.
        CNPJ: 00.686.568/0001-08
    </p>
    <p className='institucional__texto'>
        A Federação das Associações de Artesãos do Distrito Federal e Entorno é constituída pelas Associações,
        Sindicatos, Empreendimentos da Economia Solidária, Povos Tradicionais e Cooperativas de Artesãos, ora
        denominadas simplesmente por Entidades Artesanais e Manuelistas, existentes no Distrito Federal e
        Entorno que a ela livremente se filiem.
    </p>
    <p className='institucional__texto'>
        Entende-se por Entidades Artesanais, aquelas que agreguem produtores de trabalhos manuais e Artesanais a
        elas filiadas.
        administrada por uma diretoria composta dos seguintes membros:
    <ul className='institucional__texto institucional__texto-lista'>
        <li>Diretor-Presidente;</li>
        <li>Diretor vice-presidente;</li>
        <li>Diretor Secretário;</li>
        <li>2º Secretário;</li>
        <li>Diretor Tesoureiro;</li>
        <li>2º Tesoureiro;</li>
    </ul>
    </p>
    <h3 className='Institucional_sub-title'>Composto por</h3>
    <ul className='institucional__texto institucional__texto-lista'>
        <li>Presidente: Hebert Tavares de Amorim</li>
        <li>Vice-presidente: Maria Bernadete Almeida Rodrigues,</li>
        <li>1° tesoureira: Maria do Socorro Silva</li>
        <li>2° tesoureira: Ana Cláudia Batista da Silva</li>
        <li>1° Secretaria: Maria de Fátima Roque</li>
        <li>2° Secretaria: Katia Maria Gonçalves da Silva</li>
    </ul>

</div>
</main>
    </div>
    </body>
  )
}

export default App
