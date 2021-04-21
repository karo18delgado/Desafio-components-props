import './card.css';

export default function Card(props) {
    return (
        <div className="col-sm-3 card-col p-1 card-ubic">
            <div className="">
                <div className="card card-sm fondo-card" style={{ width: "20rem" }}>
                    <img
                        src={props.articulo.image}
                        className="card-img-top imagen-card"
                        alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.articulo.titulo}</h5>
                        <p className="card-text">{props.articulo.descripcion}</p>
                        <p className="card-text">Puntaje: <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="far fa-star"></i></p>
                        <a href="#" className="btn btn-dark">Ver</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
