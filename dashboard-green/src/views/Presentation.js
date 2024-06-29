import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Col } from "reactstrap";

function Presentation(props) {
  return (
    <div>
      <Col className="ml-auto mr-auto col-md-8 col-lg-8 col-sm-8">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Apresentação do Dashboard</CardTitle>
            <CardTitle tag="p">
              Seja bem vindo a ferramenta que vai mudar os seus resultados
              dentro do Aviator, assita o vídeo abaixo detalhado do nosso
              produto, para efetuar a compra basta acessar o botão de compra
              logo após o vídeo o acesso do Dashboard chegará via email.
            </CardTitle>
          </CardHeader>
          <CardBody>
            <iframe
              height={500}
              style={{ width: "100%", borderRadius: 12 }}
              src="https://www.youtube.com/embed/I3mtVoQ3lX4?si=cj5p4TJdd9zDjrf1"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </CardBody>
          <div className="flex justify-content-space-between">
            <a
              href="https://pay.kirvano.com/63026244-691e-4564-b5bd-05843bf119b7"
              target="_blank"
              className="flex flex-column align-items-center justify-content-center px-3 py-3"
              rel="noreferrer"
            >
              <h5 className="text-center">
                Deseja comprar o acesso para o Dashboard ?
              </h5>
              <button
                className="btn btn-primary w-100 p-0"
                style={{ height: 30 }}
              >
                COMPRAR DASHBOARD + CURSO POR R$147,00
              </button>
            </a>

            <a
              href="https://apostaganha.me/FelipeTeles95"
              target="_blank"
              className="flex flex-column align-items-center justify-content-center px-3 py-3"
              rel="noreferrer"
            >
              <h5 className="text-center">
                Cadastre-se na plataforma e ganhe R$5,00 pra começar operar no
                Aviator.
              </h5>
              <button
                className="btn btn-secondary w-100 p-0"
                style={{ height: 30 }}
              >
                GANHAR R$5,00 NO AVIATOR
              </button>
            </a>
          </div>
        </Card>
      </Col>
      <a
        href="https://wa.me/+5511971522258?text=Desejo Obter Mais informações sobre o produto."
        target="_blank"
        className="flex flex-column align-items-center justify-content-center px-3 py-3 whatsapp"
        rel="noreferrer"
      >
        <p className="whatsapp-call">Suporte</p>
      </a>
    </div>
  );
}

export default Presentation;
