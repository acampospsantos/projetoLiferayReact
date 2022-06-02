
import './App.css';
import Header from './Cabeçalho';
import MiddleContent from './Conteudo';
import Footer from './Rodapé';


function App() {
  return (
    <div className="App">
      <Header /> {/* Cabeçalho */}

      <MiddleContent /> {/* Conteúdo do meio da página */}

      <Footer /> {/* Rodapé */}      
    </div>
  );
}

export default App;
