import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Button,
  Label
} from "reactstrap";
import { chartExample2 } from "variables/charts.js";
import { LineChartView } from "backedComponents/LineChart/LineChartView";
import { Enviroments } from "../enviroments/enviroments";
import HistoryOdds from "../components/HistoryOdds/HistoryOdds";
import HistoryOddsPinks from "../components/HistoryOddsPinks/HistoryOddsPinks";
import SignalBot from "../components/SignalBot/SignalBot";
import SignalBotTwo from "../components/SignalBotTwo/SignalBotTwo";
import moment from "moment";
import LogRocket from "logrocket";

const Dashboard = () => {
  const [betHouse, setBetHouse] = useState("APOSTA_GANHA");
  const [analysisVela, setAnalysisVela] = useState(2);
  const [
    analysisHistoryResultsAviator,
    setAnalysisHistoryResultsAviator
  ] = useState([{ odd: 1 }]);
  const [
    analysisHistoryMostPositionsAndQuantity,
    setAnalysisHistoryMostPositionsAndQuantity
  ] = useState([0]);
  const [analysisHistoryByOdd, setAnalysisHistoryByOdd] = useState([0]);
  const [
    numberLastVelasFilterAnalysis,
    setNumberLastVelasFilterAnalysis
  ] = useState(10);
  const [analysisLoading, setAnalysisLoading] = useState(false);
  const [mediaState, setMedia] = useState({ average: 0, averageBefore: 0 });
  const [medianState, setMedian] = useState({ median: 0, medianBefore: 0 });
  const [chartRef2, setChartRef2] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")) || undefined;
    LogRocket.identify(localStorage.getItem("id") || "nao encontrado", {
      useId: localStorage.getItem("id") || "nao encontrado",
      email: user?.email
    });
  }, []);

  const getAnalysisHistoryVela = async () => {
    setAnalysisLoading(false);
  };

  const handleIframeUrl = () => {
    return betHouse === "APOSTA_GANHA"
      ? "https://external.afiliadosapostaganha.bet/"
      : "https://go.aff.minesbet.com/8byv2ss0";
  };

  const handleClickSearchOdd = () => {
    getAnalysisHistoryVela();
  };

  const handleResultsUpdated = results => {
    setAnalysisHistoryResultsAviator(results);
  };

  return (
    <div className="content mt-4">
      <Row>
        <Col xs="12">
          <HistoryOdds props={{ betHouse: betHouse }} />
        </Col>
      </Row>
      <Row>
        <Col xs="12">
          <HistoryOddsPinks
            props={{ betHouse: betHouse }}
            onResultsUpdated={handleResultsUpdated}
          />
        </Col>
      </Row>
      <Row>
        <Col md="12">
          <Card>
            <CardHeader>
              <h5 className="title">{betHouse}</h5>
              <p className="category">
                Pode operar diretamente pelo nosso Dashboard!
              </p>
            </CardHeader>
            <CardBody className="all-icons">
              <iframe
                height="700"
                title="Hacking Aviator"
                style={{ border: "none" }}
                width={window.screen.width}
                name="aviator"
                className="col-md-12"
                src={handleIframeUrl()}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg="12">
          <Card className="card-chart">
            <CardHeader>
              <h5 className="card-category">
                Gráfico de Analise de Vela:{" "}
                <strong className="text-primary">10X</strong>
              </h5>
              <LineChartView
                data={
                  chartExample2(analysisHistoryResultsAviator.map(x => x.odd))
                    .data
                }
                options={
                  chartExample2(analysisHistoryResultsAviator.map(x => x.odd))
                    .options
                }
                passedRef={newRef => setChartRef2(newRef)}
                totalData={analysisHistoryResultsAviator.length}
              />
            </CardHeader>
          </Card>
        </Col>
        {/* <Col lg="8">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">
                  Histórico Detalhado de Analise de Vela
                </h5>
                <h5>
                  Vela:{' '}
                  <strong className="text-primary">{analysisVela}X</strong>
                </h5>
                <CardTitle tag="h3">
                  <SimpleTableView
                    dataHeaders={[
                      'posicao',
                      'intervalo_tempo',
                      'odd',
                      'minutes',
                      'mediana',
                      'media',
                    ]}
                    data={analysisHistoryResultsAviator}
                  />
                  <i className="tim-icons icon-send text-primary" />{' '}
                </CardTitle>
              </CardHeader>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">
                  Posicao que repetiu o mesmo valor da ODD:{' '}
                  <strong className="text-primary">{analysisVela}X</strong>
                </h5>
                <CardTitle tag="h3">
                  <SimpleTableView
                    dataHeaders={['posicao', 'quantidade', 'percentage']}
                    data={analysisHistoryMostPositionsAndQuantity}
                  />
                </CardTitle>
              </CardHeader>
            </Card>
          </Col>*/}
      </Row>
    </div>
  );
};

export default Dashboard;
