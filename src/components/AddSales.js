import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function AddSales() {
  return (
    <div>
      <h1 style={{ margin: "1rem", textAlign: "center" }}>ADD SALES ENTRY</h1>
      <Form
        className="form"
        style={{
          marginLeft: "10%",
          width: "80%",
          padding: "2rem",
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Product Name </Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Quantity</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Amount</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Button variant="primary" type="submit" style={{ width: "100%" }}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default AddSales;
