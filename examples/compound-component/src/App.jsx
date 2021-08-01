import React, { useState } from "react";
import "./App.css";
import Tab from "./Containers/Tab";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Tab>
        <Tab.Header>
          <Tab.Item id={0}>First Tab</Tab.Item>
          <Tab.Item id={1}>Second Tab</Tab.Item>
          <Tab.Item id={2}>Thrid Tab</Tab.Item>
        </Tab.Header>
        <Tab.Body body={0}>
          Lorem first ipsum dolor sit amet consectetur adipisicing elit.
          Veritatis illum impedit dignissimos vitae fugit accusantium
          consequuntur recusandae a natus, dolor doloremque, esse earum eaque
          repellat animi tenetur quas quisquam eum.
        </Tab.Body>
        <Tab.Body body={1}>
          Lorem second ipsum dolor sit amet consectetur adipisicing elit.
          Veritatis illum impedit dignissimos vitae fugit accusantium
          consequuntur recusandae a natus, dolor doloremque, esse earum eaque
          repellat animi tenetur quas quisquam eum.
        </Tab.Body>
        <Tab.Body body={2}>
          Lorem third ipsum dolor sit amet consectetur adipisicing elit.
          Veritatis illum impedit dignissimos vitae fugit accusantium
          consequuntur recusandae a natus, dolor doloremque, esse earum eaque
          repellat animi tenetur quas quisquam eum.
        </Tab.Body>
      </Tab>
    </div>
  );
}

export default App;
