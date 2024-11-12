import React from "react";
import { Card, Container } from "react-bootstrap";
import CounterShow from "./component/CounterShow.jsx";
import IncreaseNumber from "./component/IncreaseNumber.jsx";
import DecreseNumber from "./component/DecreseNumber.jsx";
import ResetNumber from "./component/ResetNumber.jsx";
import List from "./component/List.jsx";

const App = () => {
  return (
    <Container className=" mx-auto  mt-5 ">
      <Card
        className=" bg-light-subtle w-100"
        style={{ maxWidth: "24rem", margin: "auto" }}
      >
        <Card.Body>
          <div className="text-center mt-5">
            <CounterShow />
            <div className="d-flex gap-3 justify-content-center mt-4">
              <IncreaseNumber />
              <DecreseNumber />
              <ResetNumber />
            </div>
          </div>
        </Card.Body>
      </Card>
      <div className=" container mt-4">
        <h4 className="text-white">API Calling Show :</h4>
        <List />
      </div>
    </Container>
  );
};

export default App;
