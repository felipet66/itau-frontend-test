import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

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

const SignalBot = ({ props }) => {
  const [latestUpdate, setLatestUpdate] = useState(null);
  const token =
    props.betHouse === "APOSTA_GANHA"
      ? "6433509933:AAHZ-wTwWo2a7aW_bokFbQbM_ATY3Qc_pV0"
      : "7111114407:AAF5Md6emV9rJwhVNeDJdY5vEvf1K13DMVE";

  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get(`https://api.telegram.org/bot${token}/getUpdates?offset=-1`)
        .then(response => {
          const updates = response.data.result;
          if (updates.length > 0) {
            const latestUpdate = updates[updates.length - 1];
            setLatestUpdate(latestUpdate?.channel_post?.text);
          }
        })
        .catch(error => {
          console.error(error);
        });
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [token]);

  return (
    <Row>
      <Col xs="12">
        <Card className="card-chart">
          <CardHeader>
            <Row>
              <Col className="text-left" sm="12">
                <h5 className="card-category">
                  I.A. De sinais para Aviator 10X - {props.betHouse}
                </h5>
                <CardTitle tag="h3">
                  I.A. Dashboard 10X{" "}
                  <span
                    style={{
                      fontSize: 10,
                      border: "1px solid",
                      borderRadius: 4,
                      padding: 4,
                      opacity: "0.8"
                    }}
                  >
                    EM BREVE
                  </span>
                </CardTitle>
                <div>
                  {latestUpdate && (
                    <div>
                      <p>{latestUpdate}</p>
                    </div>
                  )}
                </div>
              </Col>
            </Row>
          </CardHeader>
          <CardBody></CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default SignalBot;
