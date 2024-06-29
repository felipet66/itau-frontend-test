import React from "react";
import { Card, CardHeader, CardBody, CardTitle, Table } from "reactstrap";

export function SimpleTableView(props) {
  return (
    <Card>
      <CardHeader></CardHeader>
      <CardBody className="card-table" class="overflow-auto">
        <Table className="tablesorter">
          <thead className="text-primary">
            <tr>
              {props.dataHeaders.map(item => (
                <th>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {props.data.map(item => (
              <tr>
                {props.dataHeaders.map(headerItem => (
                  <td>
                    {item[headerItem] +
                      (headerItem == "porcentagem" ? "%" : "")}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </CardBody>
    </Card>
  );
}
