import React from "react";
import CardVideo from "./Card/CardVideo";
//import "./styles.css";
import { GlobalStyle } from "./GlobalStyle";
import { Footer, Header, Main, Nav } from "./Style";


export default function App() {
  const card1 = {
    titulo: "La Lotto",
    imagemDoVideo: "https://i.ytimg.com/an_webp/DgR3W3pbpPo/mqdefault_6s.webp?du=3000&sqp=CJrnpp4G&rs=AOn4CLDnd6APZqtXD1WlY45iO6Mo4o7clw",
    textoAlternativo: "descrição da imagem"
  };

  const card2 = {
    titulo: "Destino",
    imagemDoVideo: "https://i.ytimg.com/an_webp/Dr6iQxNu0wo/mqdefault_6s.webp?du=3000&sqp=CPjepp4G&rs=AOn4CLB46825k7eTPG9Ca_N98exzQwtC0A",
    textoAlternativo: "descrição da imagem"
  };

  const card3 = {
    titulo: "La Triple",
    imagemDoVideo: "https://i.ytimg.com/an_webp/SydGHrvcTZA/mqdefault_6s.webp?du=3000&sqp=CPCEp54G&rs=AOn4CLDcllsseKDiRTn-vZ94TITE_p0vFQ",
    textoAlternativo: "descrição da imagem"
  };

  const card4 = {
    titulo: " Suéltate El Pelo",
    imagemDoVideo: "https://i.ytimg.com/an_webp/SRt0KAMCI4Q/mqdefault_6s.webp?du=3000&sqp=CPTMpp4G&rs=AOn4CLASXYYaO8XIFEMnR-tRH3MR0C-AkQ",
    textoAlternativo: "descrição da imagem"
  };

  const card5 = {
    titulo: "Muñecas",
    imagemDoVideo: "https://i.ytimg.com/an_webp/vuTPXmFXrak/mqdefault_6s.webp?du=3000&sqp=COHfpp4G&rs=AOn4CLBa0kl6RXi26fK4cEJkRDCe7sl2OA",
    textoAlternativo: "descrição da imagem"
  };

  const card6 = {
    titulo: "https://i.ytimg.com/an_webp/vqaLwY2Ok4M/mqdefault_6s.webp?du=3000&sqp=CPPopp4G&rs=AOn4CLDL85bQbz7IycLCupWMi3EEs8sWaw",
    imagemDoVideo: "https://i.ytimg.com/an_webp/vqaLwY2Ok4M/mqdefault_6s.webp?du=3000&sqp=CPPopp4G&rs=AOn4CLDL85bQbz7IycLCupWMi3EEs8sWaw",
    textoAlternativo: "descrição da imagem"
  };

  const card7 = {
    titulo: "Título do vídeo",
    imagemDoVideo: "https://picsum.photos/400/400?a=1",
    textoAlternativo: "descrição da imagem"
  };

  const card8 = {
    titulo: "Título do vídeo",
    imagemDoVideo: "https://picsum.photos/400/400?a=1",
    textoAlternativo: "descrição da imagem"
  };

  const card9 = {
    titulo: "Título do vídeo",
    imagemDoVideo: "https://picsum.photos/400/400?a=1",
    textoAlternativo: "descrição da imagem"
  };

  return (
    <div>
      <GlobalStyle></GlobalStyle>
      <div className="tela-inteira">
        <Header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </Header>

        <Main>
          <Nav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </Nav>

          <section className="painel-de-videos">
            <CardVideo
              image1={card1.imagemDoVideo}
              titulo={card1.titulo}
              textoAlternativo={card1.textoAlternativo}
          
              image2={card2.imagemDoVideo}
              titulo2={card2.titulo}
              textoAlternativo2={card2.textoAlternativo}
            />

          </section>
        </Main>

        <Footer>
          <h4>Oi! Eu moro no footer!</h4>
        </Footer>
      </div>
    </div>
  );
}
