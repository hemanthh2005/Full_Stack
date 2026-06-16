import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Card from "./components/Card";
import Modal from "./components/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="app">
      {/* Click handler flips state flag to true */}
      <Button text="Open Modal" onClick={() => setShowModal(true)} />

      <Card>
        <h3>React Card</h3>
        <p>This is a reusable card component.</p>
      </Card>

      {/* Click handler on close window resets state flag to false */}
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <h2>Modal Window</h2>
        <p>This is a reusable modal component.</p>
      </Modal>
    </div>
  );
}

export default App;
