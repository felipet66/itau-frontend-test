import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";

// connect requests with axios
import axios from "axios";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardFooter,
  Label,
  Form,
  FormGroup,
  Input,
  Col,
  Alert
} from "reactstrap";

import { Enviroments } from "../enviroments/enviroments";

function Login(props) {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event) {
    setError(null);

    event.preventDefault();
    if (!email || !password) {
      setError("Todos os campos são obrigatórios");
      console.log("All fields are mandatory");
      return;
    }

    setIsSubmitting(true);

    const loginData = {
      email,
      password
    };

    try {
      const res = await axios.post(
        `${Enviroments.API_URL_NODE}login`,
        loginData
      );
      console.log(res);
      localStorage.setItem("apiToken", res.data.token);
      localStorage.setItem("user", JSON.stringify(loginData));
      localStorage.setItem("email", res.data.user.email);
      localStorage.setItem("id", res.data.user.id);
      history.push("/admin/dashboard");
    } catch (err) {
      setError("Usuário ou senha invalido");
      console.log(err);
      setIsSubmitting(false);
      return;
    }
  }

  return (
    <div>
      <Col className="ml-auto mr-auto col-md-6 col-lg-4">
        <Card>
          <Form>
            <CardHeader>
              <CardTitle tag="h3">Login</CardTitle>
            </CardHeader>
            <CardBody>
              <Alert isOpen={error != null} color="danger">
                {error}
              </Alert>
              <FormGroup>
                <Label>Email</Label>
                <Input
                  defaultValue="Write your Email here"
                  placeholder="Email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </FormGroup>

              <FormGroup>
                <Label>Password</Label>
                <Input
                  defaultValue="Write your password here"
                  placeholder="Password"
                  type="password"
                  autoComplete="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </FormGroup>
            </CardBody>
            <CardFooter>
              <Button
                className="btn-fill"
                color="success"
                type="submit"
                onClick={e => handleSubmit(e)}
              >
                Login
                {isSubmitting ? "..." : ""}
              </Button>
            </CardFooter>
          </Form>
        </Card>
      </Col>
    </div>
  );
}

export default Login;
