import { Tab, Tabs } from 'react-bootstrap';
import './styles/App.css';
import Muestra from './pages/muestras.js'
import Examen from './pages/examen.js'

function App() {
  return (
    <div className="App">
        <Tabs defaultActiveKey="link-1" id="uncontrolled-tab-example" variant="tabs">
        <Tab eventKey="link-1" title="Imágenes Aleatorias">
          <Muestra/>
        </Tab>
        <Tab eventKey="link-2" title="Subir Imagen">
          <Examen/>
        </Tab>
        </Tabs>
    </div>
  );
}

export default App;
