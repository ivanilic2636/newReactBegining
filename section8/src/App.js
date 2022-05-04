import "./App.css";
import Card from "./components/UI/Card";

import AddUser from "./components/User/AddUser";

function App() {
  return (
    <Card className="main">
      <AddUser />
    </Card>
  );
}

export default App;
