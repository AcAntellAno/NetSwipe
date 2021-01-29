import Container from "react-bootstrap/Container";
import Navbarc from "./Navbarc";
import Home from './Home'

function App() {
  return (
    <div>
      <Navbarc />
        <Container>
          <Home />
      </Container>
    </div>
  );
}

export default App;
