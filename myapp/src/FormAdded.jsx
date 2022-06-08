import React from "react";
import { Form, Label, FormGroup, Input, Button } from "reactstrap";

const FormAdded = ({ sendingData }) => {
  
   const postData = async () => {
    const response = await fetch("http://localhost:3001/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: "John",
        email: ""
   })});

   const getData = async () => {
    const response = await fetch("");
    const data = await response.json();
    console.log(data);
   }
   
  const renderedInput = sendingData.map((obj) => {
    return (
      <FormGroup>
        <Label htmlFor={obj.label} className="text-upper-wizard">
          {obj.label}
        </Label>
        <Input type={obj.type} name={obj.label} id={obj.label} placeholder={obj.placeholder} required={obj.required} />
      </FormGroup>
    );
  });

  return (
    <Form>
      {renderedInput}
      <Button block outline color="danger">
        Add
      </Button>
    </Form>
  );
};

export default FormAdded;
