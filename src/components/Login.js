import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
function Login() {
  return (
    <div>
      <h1 style={{ margin: "1rem", textAlign: "center" }}>LOGIN FORM</h1>
      <Form
        className="form"
        style={{
          marginLeft: "10%",
          width: "80%",
          padding: "2rem",
        }}
      >
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" />
        </Form.Group>

        <Button variant="primary" type="submit" style={{ width: "100%" }}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Login;
