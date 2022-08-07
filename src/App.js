import { useEffect } from "react";

function App() {
  useEffect(() => {
    new WebSocket("ws://localhost:3000/", "echo-protocol");
  }, []);

  return (
    <div className="App">
      <h1>App</h1>
    </div>
  );
}

export default App;
