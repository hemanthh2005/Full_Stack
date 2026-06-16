import { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

function App() {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [joined, setJoined] = useState(false);

  const joinChat = () => {
    if (username.trim() !== "") {
      setJoined(true);
    }
  };

  const sendMessage = () => {
    if (message.trim() !== "") {
      socket.emit("send_message", {
        user: username,
        text: message,
      });

      setMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setChat((prev) => [...prev, data]);
    });

    return () => {
      socket.off("receive_message");
    };
  }, []);
  return (
    <div style={{ padding: "20px" }}>
      {!joined ? (
        <div>
          <h2>Enter Username</h2>

          <input
            type="text"
            placeholder="Enter Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <button onClick={joinChat}>Join Chat</button>
        </div>
      ) : (
        <>
          <h2>Welcome {username}</h2>

          <div
            style={{
              border: "1px solid black",
              height: "300px",
              overflowY: "scroll",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            {chat.map((msg, index) => (
              <p key={index}>
                <b>{msg.user}:</b> {msg.text}
              </p>
            ))}
          </div>

          <input
            type="text"
            placeholder="Type Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button onClick={sendMessage}>Send</button>
        </>
      )}
    </div>
  );
}

export default App;
