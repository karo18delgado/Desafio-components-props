import './footer.css';

export default function Footer() {
    return (
        <footer className="container-fluid footer w-100">
      <div className="row p-2 align-items-center">
    <div className="col-12 col-md-4 social mt-3 text-center text-md-start">
    <i class="fab fa-2x fa-facebook p-1"></i>
    <i class="fab fa-2x fa-github p-1"></i>
    <i class="fab fa-2x fa-slack p-1"></i>
    </div>
    <div className=" col-12 col-md-4 mt-5 text-center"> 
      <address>pelis@correo.com </address>
    </div>
    <div className=" col-12 col-md-4 text-end">
      <ul className="nav flex-column text-align-center text-md-end">
        <li className="nav">Inicio</li>
        <li className="nav">Contacto</li>
        <li className="nav">Sobre Nosotros</li>
        <li className="nav"> Términos y condiciones</li>
      </ul>
    </div>
  </div>
    </footer>
    )
}
