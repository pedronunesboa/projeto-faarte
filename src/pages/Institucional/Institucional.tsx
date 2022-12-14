// import './App.css'
// import './Institucional.css'

function Institucional() {
  return( 
    <body>
      <header>
        <nav className='navbar navbar-expand-lg bg-light'>
            <div className='container-fluid'>
                <a className="navbar-brand" href="/"><img className="navbar-brand navbar-logo" src="./src/assets/img/logoFAARTE.png" alt="Logo FARTE"></img></a>
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
                                href="/institucional">Institucional</a>
                        </li>
                        <button type="button" className="btn btn-primary-button">Login</button>
                        <span className="span-ou">ou</span>
                        <button type="button" className="btn btn-primary-button">Cadastre-se</button>
                    </ul>
                </div>
            </div>
        </nav>
    </header>

      
    <div className="App">
      <main className='institucional'>

<div className='institucional__container'>

    <h1 className='institucional__title'>Apresenta????o</h1>
    <p className='institucional__texto'>
        A FAARTE ??? Federa????o das Associa????es de Artes??os do Distrito Federal e Entorno, fundada a mais de trinta
        anos, ?? pioneira no segmento de artesanato. Como entidade sem fins lucrativos, tem a miss??o de fomentar
        a????es que promovam os mais de trinta e quatro mil artes??os com seus trabalhos, em benef??cio da classe
        artes?? e tamb??m da sociedade.
    </p>

    <h2 className='institucional__title'>Quem somos</h2>
    <p className='institucional__texto'>
        A Federa????o das Associa????es dos Artes??os do Distrito Federal e Entorno ??? FAARTE/DF, entidade de
        Administra????o Estadual, ?? formada pela uni??o das entidades do Distrito Federal e Entorno, abaixo citadas
        no Artigo 4??, de ??mbito Estadual e Municipal, tem sua sede no SCS Quadra 01 Sala 209 ??? Edif??cio Cear?? ???
        Bras??lia ??? DF, CEP: 70303-900.
        CNPJ: 00.686.568/0001-08
    </p>
    <p className='institucional__texto'>
        A Federa????o das Associa????es de Artes??os do Distrito Federal e Entorno ?? constitu??da pelas Associa????es,
        Sindicatos, Empreendimentos da Economia Solid??ria, Povos Tradicionais e Cooperativas de Artes??os, ora
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
        <li>Diretor Secret??rio;</li>
        <li>2?? Secret??rio;</li>
        <li>Diretor Tesoureiro;</li>
        <li>2?? Tesoureiro;</li>
    </ul>
    </p>
    <h3 className='Institucional_sub-title'>Composto por</h3>
    <ul className='institucional__texto institucional__texto-lista'>
        <li>Presidente: Hebert Tavares de Amorim</li>
        <li>Vice-presidente: Maria Bernadete Almeida Rodrigues,</li>
        <li>1?? tesoureira: Maria do Socorro Silva</li>
        <li>2?? tesoureira: Ana Cl??udia Batista da Silva</li>
        <li>1?? Secretaria: Maria de F??tima Roque</li>
        <li>2?? Secretaria: Katia Maria Gon??alves da Silva</li>
    </ul>

</div>
</main>
    </div>
    </body>
  )
}

export default Institucional
