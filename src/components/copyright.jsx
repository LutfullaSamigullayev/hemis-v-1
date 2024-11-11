import { Icons } from "../components";

export function Copyright() {
  return (
    <div className="copyright">
      <div className="container">
        <div className="copyright__wrapper">
          <div className="copyright__icons">
            <img src="/header/logo.png" alt="logo" />
            <div className="icons">
              <div>
                <Icons.facebook />
              </div>
              <div>
                <Icons.twitter />
              </div>
              <div>
                <Icons.instagram />
              </div>
            </div>
          </div>
          <div className="copyright__line"></div>
          <div className="copyright__contact">
            <div className="item">
              <p>Campus Joinville univille@univille.br (47) 3461-9000</p>
              <p>
                Unidade Centro Joinville unidadecentro@univille.br (47)
                3431-0600
              </p>
              <p>
                Campus São Bento do Sul univillesbs@univille.br (47) 3631-9120
              </p>
              <p>
                Unidade São Francisco do Sul univille.sfs@univille.br (47)
                3471-3800
              </p>
            </div>
            <div className="item item2">
              <p>
                Rua Paulo Malschitzki, 10 Zona Industrial Norte Joinville SC
                89219-710 Razão Social: Fundação Educacional da Região de
                Joinville CNPJ 84.714.682/0001-94
              </p>
              <p>
                Rua Rio do Sul, 270 Bucarein Joinville SC 89202-201 CNPJ:
                84.714.682/0004-37
              </p>
              <p>
                R. Norberto Eduardo Weihermann, 230 Colonial São Bento do Sul SC
                89288-385 CNPJ: 84.714.682/0002-75
              </p>
              <p>
                Rod. Duque de Caxias, Km 8, 6.365 Iperoba São Francisco do Sul
                SC 89240-000 CNPJ: 84.714.682/0003-56
              </p>
            </div>
          </div>
          <p className="title">
            University of Joinville Region - UNIVILLE(c) 2024
          </p>
        </div>
      </div>
    </div>
  );
}
