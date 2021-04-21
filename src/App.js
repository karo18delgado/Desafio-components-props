import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/Card';
import NavB from './components/NavB';
import Carrusel from './components/Carrusel';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [section, setSection] = useState('Carrousel de estrenos')

  const articulos = [
    { image: "http://www.cinesunstar.com/images/2021/04/14/mortalkombat_poster.jpg", titulo: 'Mortal Kombat', descripcion: 'Acción,Aventuras y Fantasía' },
    { image: "http://www.cinesunstar.com/images/2021/04/14/enguerraabuelo_poster.jpg", titulo: 'En Guerra con mi Abuelo', descripcion: 'Comedia y Familiar' },
    { image: "http://www.cinesunstar.com/images/2021/04/06/pequenossecretos_poster.jpg", titulo: 'Pequeños Secretos', descripcion: 'Crimen y thriller' },
    { image: "http://www.cinesunstar.com/images/2021/04/06/freaky_poster.jpg", titulo: 'Freaky', descripcion: 'Comedia y Terror' },
  ]
  return (
    <div>
      <NavB setSection={setSection} />

      {section === 'Carrousel de estrenos' && <Carrusel />}

      {section=== 'Películas' && (<div >
        <div className="row py-5">
          {articulos.map((articulo) => (
            <Card
              articulo={articulo}
            // imagen={articulo.image} 
            // titulo={articulo.titulo} 
            // descripcion={articulo.descripcion} 
            />))}
        </div>
      </div>)}


      <Footer />
    </div>
  );
}

export default App;
