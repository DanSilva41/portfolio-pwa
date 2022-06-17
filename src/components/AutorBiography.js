import { AutorBiografyContainer } from "../styles/AutorBiografyContainer";
import ReactRoundedImage from "react-rounded-image";
import ProfilePicture from "../assets/img/profile.jpg";

export const AutorBiografy = () => (
    <AutorBiografyContainer>
        <div>
            <ReactRoundedImage image={ProfilePicture} imageWidth="150" imageHeight="150" />
        </div>
        <div>
            <h1>Danilo Silva</h1>
            <h4>Engenheiro de software detalhista, dinâmico, comprometido e apaixonado com a capacidade da tecnologia em impactar pessoas.

                <br />Com experiência na definição, construção, implementação e testes de aplicações, entregando produtos back-end e web complexos usando diversas linguagens e tecnologias de programação.
                Bem adequado as boas práticas e metodologias ágeis, procuro progressivamente aprender novas tecnologias, frameworks e conceitos, com o objetivo de fazer produtos em sua melhor versão.
            </h4>
        </div>
    </AutorBiografyContainer>
)