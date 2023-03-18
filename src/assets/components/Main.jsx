import React from "react";

export default function Main() {
  return (
    <main className="main-container">
      <div className="main-button">
        <a className="main-button--link" href="https://thiagoaprado.github.io/Portfolio/">
          <button className="main-button--portifolio">Portfólio</button>
        </a>
        <a className="main-button--link" href="https://www.linkedin.com/in/thiagoaprado">
          <button className="main-button--linkedin">LinkedIn</button>
        </a>  
      </div>

      <div className="main-text_content">
        <h2 className="main-title">Sobre</h2>
        <p className="main-paragraph">
        Olá! Me chamo Thiago Prado, tenho 20 anos e atualmente estou
        cursando ciência da computação na Universidade Católica de 
        Santos (UNISANTOS). Tenho interesse em aprender novas tecnologias 
        e ferramentas para desenvolver novos projetos Front-end e afins. 
        Sempre faço a documentação e mantenho o código constantemente 
        limpo em todos os projetos que realizo.
        </p>

        <h2 className="main-title">Interesses</h2>
        <p className="main-paragraph">
        Academia. Arquearia. Games. Inovação. Investimento. Praia. 
        Tecnologia.
        </p>
      </div>
    </main>
  )
}