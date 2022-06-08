import React, { useState } from "react";
import FormAdded from "./FormAdded";

import { Form, Row, Col, Label, FormGroup, Button, Input, Badge } from "reactstrap";

const inputTypes = ["text", "email", "password", "number", "date", "time", "range", "search", "tel", "file", "checkbox", "radio", "select"];

const App = () => {
  const [label, setLabel] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [type, setType] = useState("");

  const [error, setError] = useState("");
  const [toggle, setToggle] = useState(false);
  const [sendingData, setSendingData] = useState([]);

  const isCreated = [label, placeholder, type].every(Boolean);
  const isTrueType = isCreated && inputTypes.includes(type);

  const handleSubmit = (e) => {
    if (isCreated) {
      if (!isTrueType) {
        setType("");
        setError("type valid data");
        setTimeout(() => setError(""), 2000);
      } else {
        setToggle((pre) => (pre !== true ? true : true));
        setSendingData((previousValue) => {
          let copyArr = previousValue && previousValue.length > 0 ? [...previousValue] : [];
          copyArr.push({ label, placeholder, type });
          return copyArr;
        });
      }

      setLabel("");
      setType("");
      setPlaceholder("");
    }

    e.preventDefault();
  };

  return (
    <div>
      {/*  <Container>*/}
      <Row className="h-100">
        <Col md="6" className="d-flex justify-content-center align-items-center">
          <Form onSubmit={handleSubmit}>
            <h1 className="mb-3 text-center">Form</h1>
            <FormGroup>
              <Label for="labelInput">Label generator</Label>
              <Input type="text" name="labelInput" id="labelInput" value={label} onChange={(e) => setLabel(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <Label for="typeInput">Type generator</Label>
              <Input type="text" name="typeInput" id="typeInput" value={type} placeholder={error } onChange={(e) => setType(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <Label for="placeholderInput">Placeholder generator</Label>
              <Input type="text" name="placeholderInput" id="placeholderInput" value={placeholder} onChange={(e) => setPlaceholder(e.target.value)} />
            </FormGroup>

            <Button color="primary" disabled={!isCreated} block>
              Create
            </Button>
          </Form>
        </Col>
        <Col md="6" className="d-flex justify-content-center align-items-center">
          {toggle ? (
            <FormAdded sendingData={sendingData} />
          ) : (
            <h1>
              <Badge color="danger">No created form</Badge>
            </h1>
          )}
        </Col>
      </Row>
      {/*  </Container>*/}
    </div>
  );
};

export default App;
