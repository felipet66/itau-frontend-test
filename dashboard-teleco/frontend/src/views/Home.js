/*!

=========================================================
* Black Dashboard React v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";
// connect requests with axios
import axios from "axios";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line } from "react-chartjs-2";

// reactstrap components
import {
  UncontrolledAlert,
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col
} from "reactstrap";

// core components
import { chartExample2, chartExample4 } from "variables/charts.js";
import { Task } from "backend-sdk/task.sdk";
import { LineChartView } from "backedComponents/LineChart/LineChartView";

function Dashboard(props) {
  const [historyResultsAviator, setHistoryResultsAviator] = React.useState([0]);
  const [loading, setLoading] = React.useState(true);

  const [bigChartData, setbigChartData] = React.useState("data1");
  const setBgChartData = name => {
    setbigChartData(name);
  };

  const [chartRef2, setChartRef2] = React.useState(null);
  const [chartRef4, setChartRef4] = React.useState(null);

  const options = {
    method: "GET",
    url:
      "https://aposta-ganha-aviator-api1.p.rapidapi.com/apostaganha-aviator-latest",
    headers: {
      "X-RapidAPI-Key": "8c90b725fdmshc520ab6927c0896p1cf1cfjsn89c7ac202a8e",
      "X-RapidAPI-Host": "aposta-ganha-aviator-api1.p.rapidapi.com"
    }
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      getHistoryResultsAviator();
    }, 5000);
    return () => clearInterval(interval);
  });

  const getHistoryResultsAviator = async () => {
    try {
      const response = await axios.request(options);
      if (historyResultsAviator !== response) {
        setHistoryResultsAviator(response.data);
        notify("bc");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const notificationAlertRef = React.useRef(null);
  const notify = place => {
    var color = Math.floor(Math.random() * 5 + 1);
    var type;
    switch (color) {
      case 1:
        type = "primary";
        break;
      case 2:
        type = "success";
        break;
      case 3:
        type = "danger";
        break;
      case 4:
        type = "warning";
        break;
      case 5:
        type = "info";
        break;
      default:
        break;
    }
    var options = {};
    options = {
      place: place,
      message: (
        <div>
          <div>
            <b>Possível entrada, voar até {color}X</b>
          </div>
        </div>
      ),
      type: type,
      icon: "tim-icons icon-bell-55",
      autoDismiss: 10
    };
    notificationAlertRef.current.notificationAlert(options);
  };

  const historyOddPink = historyResultsAviator.filter(item => item >= 10);
  const historyOddFive = historyResultsAviator.filter(
    item => item >= 5 && item < 10
  );

  const getBadgeClassName = value => {
    if (value < 2) {
      return "bg-info";
    } else if (value <= 9.99) {
      return "bg-purple";
    } else if (value >= 10) {
      return "bg-primary";
    }
  };

  return (
    <>
      <div className="content">
        {loading ? (
          <div className="d-flex justify-content-center align-items-center w-100">
            <div class="lds-spinner">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        ) : (
          <>
            <Row>
              <div className="react-notification-alert-container">
                <NotificationAlert ref={notificationAlertRef} />
              </div>

              <Col xs="12">
                <Card className="card-chart">
                  <CardHeader>
                    <Row>
                      <Col className="text-left" sm="6">
                        <h5 className="card-category">
                          Histórico de velas do Aviator
                        </h5>
                        <CardTitle tag="h2">Histórico de Velas</CardTitle>
                      </Col>
                      <Col sm="6">
                        <ButtonGroup
                          className="btn-group-toggle float-right"
                          data-toggle="buttons"
                        >
                          <Button
                            tag="label"
                            className={classNames("btn-simple", {
                              active: bigChartData === "data1"
                            })}
                            color="info"
                            id="0"
                            size="sm"
                            onClick={() => setBgChartData("data1")}
                          >
                            <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                              Aposta Ganha
                            </span>
                            <span className="d-block d-sm-none">
                              <i className="tim-icons icon-single-02" />
                            </span>
                          </Button>
                          <Button
                            color="info"
                            id="1"
                            size="sm"
                            tag="label"
                            className={classNames("btn-simple", {
                              active: bigChartData === "data2"
                            })}
                            onClick={() => setBgChartData("data2")}
                          >
                            <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                              ESTRELA BET
                            </span>
                            <span className="d-block d-sm-none">
                              <i className="tim-icons icon-gift-2" />
                            </span>
                          </Button>
                          <Button
                            color="info"
                            id="2"
                            size="sm"
                            tag="label"
                            className={classNames("btn-simple", {
                              active: bigChartData === "data3"
                            })}
                            onClick={() => {
                              setBgChartData("data3");
                            }}
                          >
                            <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                              BLAZE
                            </span>
                            <span className="d-block d-sm-none">
                              <i className="tim-icons icon-tap-02" />
                            </span>
                          </Button>
                        </ButtonGroup>
                      </Col>
                    </Row>
                  </CardHeader>
                  <CardBody>
                    <div className="history-results">
                      {historyResultsAviator.map(item => (
                        <span
                          className={`badge text-wrap ${getBadgeClassName(
                            item
                          )}`}
                          style={{
                            color: "white",
                            backgroundColor:
                              getBadgeClassName(item) === "bg-purple"
                                ? "#5603ad"
                                : ""
                          }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col lg="4">
                <LineChartView
                  data={chartExample2(historyOddFive).data}
                  options={chartExample2(historyOddFive).options}
                  passedRef={newRef => setChartRef2(newRef)}
                  dataName="Ultimas maiores que 5"
                  totalData={historyOddFive.length + 1}
                />
              </Col>
              <Col lg="4">
                <Card className="card-chart">
                  <CardHeader>
                    <h5 className="card-category">Ultímas Rosas</h5>
                    <CardTitle tag="h3">
                      <i className="tim-icons icon-send text-primary" />{" "}
                      {historyOddPink.length + 1}
                    </CardTitle>
                  </CardHeader>
                  <CardBody>
                    <div className="chart-area">
                      <Line
                        data={chartExample4(historyOddPink).data}
                        options={chartExample4(historyOddPink).options}
                        ref={newRef => setChartRef4(newRef)}
                      />
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </>
        )}
      </div>
    </>
  );
}

export default Dashboard;
