import React from "react";
import { useHistory, useParams } from "react-router-dom";
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
  Row,
  Col,
  Alert
} from "reactstrap";

import { Enviroments } from "../enviroments/enviroments";
import PhoneInput from "../components/PhoneInput/PhoneInput";

function Register(props) {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { role } = useParams();

  React.useEffect(() => {
    console.log(role);
  }, []);

  async function handleSubmit(event) {
    setError(null);
    event.preventDefault();
    if (!email || !password1 || !name || !phoneNumber) {
      setError("Todos campos devem ser preenchidos!");
      console.log("All fields are mandatory");
      return;
    }
    if (password1 !== password2) {
      setError("Senhas não conferem!");
      console.log("Passwords do not match");
      return;
    }
    setIsSubmitting(true);

    await handlePostDataFromApi();
  }

  const handlePostDataFromApi = async () => {
    const costumer = {
      name: name,
      email: email,
      password: password1,
      phone: phoneNumber,
      role: "user"
    };

    try {
      const res = await axios.post(
        `${Enviroments.API_URL_NODE}users`,
        costumer
      );

      if (res.status === 200) {
        history.push("/auth/login");
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  return (
    <div>
      <Col className="ml-auto mr-auto col-md-6 col-lg-4">
        <Card>
          <Form>
            <CardHeader>
              <CardTitle tag="h3">Cadastro</CardTitle>
            </CardHeader>
            <CardBody>
              <Alert isOpen={error != null} color="danger">
                {error}
              </Alert>
              <FormGroup>
                <Label>
                  Email<span className="text-danger"> *</span>
                </Label>
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
                <Label>
                  Senha<span className="text-danger"> *</span>
                </Label>
                <Input
                  defaultValue="Digite sua senha aqui"
                  placeholder="Senha"
                  type="password"
                  autoComplete="password"
                  value={password1}
                  onChange={e => setPassword1(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label>
                  Digite novamente sua senha
                  <span className="text-danger"> *</span>
                </Label>
                <Input
                  defaultValue="Digite sua senha novamente aqui"
                  placeholder="Repita sua senha"
                  type="password"
                  autoComplete="password"
                  value={password2}
                  onChange={e => setPassword2(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label>
                  Name<span className="text-danger"> *</span>
                </Label>
                <Input
                  defaultValue="Name"
                  placeholder="Digite seu nome"
                  type="name"
                  autoComplete="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label>
                  Celular<span className="text-danger"> *</span>
                </Label>
                <PhoneInput
                  type="text"
                  class="form-control"
                  defaultValue="Digite seu telefone com DDD aqui"
                  placeholder="Digite seu celular"
                  type="phoneNumber"
                  autoComplete="phoneNumber"
                  value={phoneNumber}
                  onChange={e => setPhoneNumber(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label>
                  CÓDIGO CADASTRO<span className="text-danger"> *</span>
                </Label>
                <Input
                  defaultValue="Name"
                  placeholder="Digite seu nome"
                  type="name"
                  autoComplete="name"
                  value={role}
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
                Cadastrar
                {isSubmitting ? "..." : ""}
              </Button>
            </CardFooter>
          </Form>
        </Card>
      </Col>
    </div>
  );
}

export default Register;
