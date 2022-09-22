import './cadastro.css'
function Cadastro() {
    return (

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
                                    <a className="nav-link active" aria-current="page"
                                        href="/institucional">Institucional</a>
                                </li>
                                <a href="/login"><button type="button"
                                        className="btn btn-primary-button">Login</button></a>
                                <span className="span-ou">Ou</span>
                                <a href="/cadastrar"><button type="button"
                                        className="btn btn-primary-button">Cadastre-se</button></a>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <main className="cadastro">

                <div className="cadastro__container">
                    <h1 className="cadastro__title">Ficha de Filiação de Associado</h1>
                    <h2>Dados da Entidade</h2>
                    <form className="cadastro__form">

                        <label>Nome entidade:</label>
                        <input className="cadastro__input" type="text" id="nome-entidade" name="nome-entidade"
                        placeholder="nome entidade" required/>
                        <span className="cadastro__input-border"></span>
                        <label>"Nome fantasia:</label>
                        <input className="cadastro__input" type="text" id="nome-fantasia" name="nome-fantasia"
                        placeholder="nome fantasia" required/>
                        <span className="cadastro__input-border"></span>
                        <label>Forma Jurídica (Associação e/ou Cooperativa, ou coletivo):</label>
                        <input className="cadastro__input" type="text" id="forma-juridica" name="forma-juridica"
                        placeholder="forma juridica" required/>
                        <span className="cadastro__input-border"/>
                        <label>Endereço</label>
                        <input className="cadastro__input" type="text" id="endereco" name="endereco" placeholder="endereço"
                        required/>
                        <span className="cadastro__input-border"/>
                        <label>Cidade da Entidade</label>
                        <select className="cadastro__input" name="cidade-da-entidade" id="cidade-da-entidade">
                            <option label="selecione" value="-1">Selecione</option>
                            <option label="Gama" value="g">Gama</option>
                            <option label="Taguatinga" value="t">Taguatinga</option>
                            <option label="Brazlândia" value="b">Brazlândia</option>
                            <option label="Sobradinho" value="s">Sobradinho</option>
                            <option label="Planaltina" value="p">Planaltina</option>
                            <option label="Paranoá" value="pr">Paranoá</option>
                            <option label="Núcleo " value="n">Núcleo </option>
                            <option label="Bandeirante" value="bd">Bandeirante</option>
                            <option label="Ceilândia " value="c">Ceilândia </option>
                            <option label="Guará " value="gr">Guará </option>
                            <option label="Samambaia " value="smb">Samambaia </option>
                            <option label="Santa Maria " value="sm">Santa Maria </option>
                            <option label="São Sebastião " value="sb">São Sebastião </option>
                            <option label="Recanto das Emas " value="rde">Recanto das Emas </option>
                            <option label="Riacho Fundo I " value="rf1">Riacho Fundo I </option>
                            <option label="Riacho Fundo II " value="rf2">Riacho Fundo II </option>
                            <option label="Candangolândia" value="cd">Candangolândia</option>
                        </select>

                        <label>Telefone</label>
                        <input className="cadastro__input" type="tel" id="telefone-da-entidade" name="telefone-da-entidade"
                            placeholder="(xx) xxxxx-xxxx" pattern="\([0-9]{2}\)[\s][0-9]{5}-[0-9]{4}" required/>
                        <span className="cadastro__input-border"/>
                        <label>CNPJ</label>
                        <input className="cadastro__input" type="text" placeholder="xx.xxx.xxx/0001-xx"/>
                            {/* // onkeypress="$(this).mask('00.000.000/0000-00')" required/> */}
                        <span className="cadastro__input-border"/>
                        <label>CEP</label>
                        <input className="cadastro__input" type="text" id="cep-da-entidade" name="cep-da-entidade"
                            placeholder="xxxxx-xxx" pattern="\[\s][0-9]{5}-[0-9]{3}" required/>
                        <span className="cadastro__input-border"/>
                        <label>Data de Criação</label>
                        <input className="cadastro__input" type="date" id="data-criacao" name="data-criacao"
                            placeholder="dd/mm/aaaa"
                            pattern="^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)(?:0?2|(?:Feb))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$"
                            required/>
                        <span className="cadastro__input-border"/>
                        <label>E-mail da entidade</label>
                        <input className="cadastro__input" type="email" id="email" name="email" placeholder="e-mail" required/>
                        <span className="cadastro__input-border"/>


                        <h2>Dados do Responsável</h2>


                        <label>Nome do Responsável</label>
                        <input className="cadastro__input" type="text" id="nome-responsavel" name="nome-responsavel"
                            placeholder="nome do responsável" required/>
                        <span className="cadastro__input-border"/>
                        <label>Cargo na Entidade</label>
                        <input className="cadastro__input" type="text" id="cargo-na-entidade" name="cargo-na-entidade"
                            placeholder="nome na entidade" required/>
                        <span className="cadastro__input-border"/>
                        <label>Endereço</label>
                        <input className="cadastro__input" type="text" id="endereco" name="endereco" placeholder="endereço"
                            required/>
                        <span className="cadastro__input-border"/>
                        <label>Estado</label>
                        <select className="cadastro__input" name="estado">
                            <option value="estado">Selecione o Estado</option>
                            <option value="ac">Acre</option>
                            <option value="al">Alagoas</option>
                            <option value="am">Amazonas</option>
                            <option value="ap">Amapá</option>
                            <option value="ba">Bahia</option>
                            <option value="ce">Ceará</option>
                            <option value="df">Distrito Federal</option>
                            <option value="es">Espírito Santo</option>
                            <option value="go">Goiás</option>
                            <option value="ma">Maranhão</option>
                            <option value="mt">Mato Grosso</option>
                            <option value="ms">Mato Grosso do Sul</option>
                            <option value="mg">Minas Gerais</option>
                            <option value="pa">Pará</option>
                            <option value="pb">Paraíba</option>
                            <option value="pr">Paraná</option>
                            <option value="pe">Pernambuco</option>
                            <option value="pi">Piauí</option>
                            <option value="rj">Rio de Janeiro</option>
                            <option value="rn">Rio Grande do Norte</option>
                            <option value="ro">Rondônia</option>
                            <option value="rs">Rio Grande do Sul</option>
                            <option value="rr">Roraima</option>
                            <option value="sc">Santa Catarina</option>
                            <option value="se">Sergipe</option>
                            <option value="sp">São Paulo</option>
                            <option value="to">Tocantins</option>
                        </select>
                        <span className="cadastro__input-border"/>
                        <label>Cidade</label>
                        <input className="cadastro__input" type="text" id="cidade" name="cidade" placeholder="cidade" required/>
                        <span className="cadastro__input-border"/>
                        <label>CEP</label>
                        <input className="cadastro__input" type="text" id="cep" name="cep" placeholder="xxxxx-xxx"
                            pattern="\[\s][0-9]{5}-[0-9]{3}" required/>
                        <span className="cadastro__input-border"/>
                        <label>Telefone</label>
                        <input className="cadastro__input" type="text" id="telefone" name="telefone" placeholder="(xx) xxxxx-xxxx"
                            pattern="\([0-9]{2}\)[\s][0-9]{5}-[0-9]{4}" required/>
                        <span className="cadastro__input-border"/>
                        <label>CPF</label>
                        <input className="cadastro__input" type="text" id="cpf" name="cpf" placeholder="000.000.000-00"
                            pattern="([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})"
                            required/>
                        <span className="cadastro__input-border"/>
                        <label>RG</label>
                        <input className="cadastro__input" type="text" id="rg" name="rg" placeholder="0.000.000"
                            pattern="(^\d{1,2}).?(\d{3}).?(\d{3})-?(\d{1}|X|x$)" required/>
                        <span className="cadastro__input-border"/>
                        <label>Órgão Expedidor</label>
                        <input className="cadastro__input" type="text" id="orgao" name="orgao"
                            placeholder="expedidor da Carteira de Identidade" required/>
                        <span className="cadastro__input-border"/>
                        <label>Estado civil</label>
                        <select className="cadastro__input" name="estado">
                            <option value="estado">Estado Civil</option>
                            <option value="solteiro">Solteiro (a)</option>
                            <option value="solteiro">Casado (a)</option>
                            <option value="solteiro">Divorciado (a)</option>
                            <option value="solteiro">Viúvo (a)</option>
                        </select>
                        <span className="cadastro__input-border"/>
                        <label>Nacionalidade</label>
                        <input className="cadastro__input" type="text" id="nacionalidade" name="nacionalidade"
                            placeholder="brasileiro (a)" required/>
                        <span className="cadastro__input-border"></span>
                        <label>Naturalidade</label>
                        <input className="cadastro__input" type="text" id="naturalidade" name="naturalidade"
                            placeholder="local de origem" required/>
                        <span className="cadastro__input-border"></span>
                        <label>Data de Filiação:</label>
                        <input className="cadastro__input" type="date" id="data-filiacao" name="data-filiacao"
                            placeholder="dd/mm/aaaa"
                            pattern="^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)(?:0?2|(?:Feb))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$"
                            required/>
                        <span className="cadastro__input-border"></span>
                        <label>Nº Carteira de Artesão SICAB:</label>
                        <input className="cadastro__input" type="number" id="carteira-de-artesão" name="carteira-de-artesão"
                            placeholder="" required/>
                        <span className="cadastro__input-border"></span>
                        <label>Data de vencimento carteira:</label>
                        <input className="cadastro__input" type="date" id="data-vencimento-carteira" name="data-vencimento-carteira"
                            placeholder="dd/mm/aaaa"
                            pattern="^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)(?:0?2|(?:Feb))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$"
                            required/>
                        <span className="cadastro__input-border"></span>
                        <label>E-mail do Responsável</label>
                        <input className="cadastro__input" type="email" id="email" name="email" placeholder="e-mail" required/>
                        <span className="cadastro__input-border"></span>
                        <label>Senha</label>
                        <input className="cadastro__input" type="password" id="password" name="password"
                            placeholder="senha 8 caracteres"
                            pattern="(?=^.{6,}$)((?=.*\w)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[|!'$%&\/\(\)\?\^\'\\\+\-\*]))^.*"
                            required/>
                        <span className="cadastro__input-border"></span>
                        <label>
                            <h3>Dados dos produtos expostos na Associação:</h3>
                        </label>
                        <textarea></textarea>
                        <br/>
                        <input className="cadastro__submit" type="submit" value="Enviar"/>

                    </form>
                </div>
            </main>
        </body>
    )
}
export default Cadastro