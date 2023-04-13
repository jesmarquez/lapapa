import { FoodCard } from './';

export const CardDeck = ({ items, onShowOffcanvas, onShowOrdenar }) => {
    return (
        <section>
            <div id="card-deck" className="container py-5">
                <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center g-5">
                    {
                        items
                            ?
                            items.map(detailsFood => (
                                <FoodCard
                                    key={detailsFood.id}
                                    setShowOrdenar={onShowOrdenar}
                                    showOffcanvas={onShowOffcanvas}
                                    detailsFood={detailsFood} />
                            ))
                            : <h1>Cargando!</h1>
                    }
                </div>
            </div>
        </section>
    )
}
