import shoppingCart from '../../assets/shopping_cart_simple_icon.png';

export const Header = ({ onShowCart }) => {

    const toggleCart = () => onShowCart()

    return (
        <header className="position-relative">
            <div className="container-fluid py-4 px-4 bg-dark">
                <div className="d-flex justify-content-between">
                    <h1 className="text-white text-center">
                        La papa
                    </h1>
                    <button className='btn btn-warning '
                        onClick={toggleCart}>
                        <img src={shoppingCart}
                            style={{ width: "38px" }} />
                    </button>
                </div>
            </div>
        </header>
    )
}
