import arepaAmarilloCarne from '../assets/arepa-queso-carne-mechada.jpg';


export const FoodCard = (picture) => {
    console.log(picture)
  return (
    <div className="card">
        <img src={ arepaAmarilloCarne } className="card-img-top" alt="arepa-amarillo-carne"></img>
        <div className="card-body">
            <h3 className="card-title">Arepa queso y carne</h3>
            <h5 className="card-title">900 cal</h5>
            <h2 className='text-end'>$9.00</h2>
            <p className="card-text">Hecho a base de masa de maíz seco molido o de harina de maíz precocida. Rellena con carne mechada y queso rayado gouda.</p>
            <a href="#" className="btn btn-primary">Ordenar</a>
        </div>
    </div>
  )
}
