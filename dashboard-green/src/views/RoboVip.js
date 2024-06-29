import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Col } from "reactstrap";

function RoboVip(props) {
  return (
    <div>
      <Col className="ml-auto mr-auto col-md-8 col-lg-8 col-sm-8">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Apresentação do Robo VIP do Teleco</CardTitle>
            <CardTitle tag="p">
              Seja bem vindo ao unico robo do mercado que foi desenvolvido com
              mais de 95% de assertividade. Os sinais são enviados 24hs, e você
              recebera dois robos, que funcionam para casas de apostas
              diferentes, ou seja, voce bate a meta em duas casas diferentes
              todos os dias.
            </CardTitle>
          </CardHeader>
          <CardBody>
            <iframe
              height={500}
              style={{ width: "100%", borderRadius: 12 }}
              src="https://www.youtube.com/embed/WPNY4sWF4Q0?si=eVSafuTE-hIBbQ_a"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </CardBody>
          <div className="flex justify-content-space-between">
            <a
              href="https://pay.kirvano.com/abd64f56-6d0b-4eac-913c-b033814ab325"
              target="_blank"
              className="flex flex-column align-items-center justify-content-center px-3 py-3"
              rel="noreferrer"
            >
              <h5 className="text-center">
                CLIQUE NO BOTÃO ABAIXO PARA APROVEITAR ESSA OPORTUNIDADE
              </h5>
              <button
                className="btn btn-primary w-100 p-0"
                style={{ height: 30 }}
              >
                COMPRAR COMPRAR ROBO
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

export default RoboVip;
