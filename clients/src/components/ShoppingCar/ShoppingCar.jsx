import { useDispatch } from 'react-redux'
import { createOrder } from '../../Redux/actions/actions'
import Styles from "./ShoppingCar.module.css"
export default function ShoppingCar (){
    const dispatch = useDispatch();
    const productos1 = [{
        name: "ATX Motherboard M-550",
        price: "149.00",
        description: "Feature-rich ATX motherboard with support for the latest processors and multiple GPUs.",
        stock: 50,
        valoration: 88,
        category: "Motherboard",
        categoryid: 16,
        marca: "ATX",
        image: "https://www.asus.com/media/global/products/rwed1stzwbm96li3/P_setting_xxx_0_90_end_500.png"
    },
    {
        name: "Graphics Card GTX-3080",
        price: "699.99",
        description: "Powerful graphics card with real-time ray tracing for exceptional gaming visuals.",
        stock: 40,
        valoration: 90,
        category: "Graphics Card",
        categoryid: 4,
        marca: "Nvidia",
        image: "https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ampere/rtx-3080/images/design/geforce-rtx-3080-4-960.jpg"
    },
    {
        name: "Micro ATX Case C-200",
        price: "69.00",
        description: "Compact Micro ATX case with efficient airflow and cable management features.",
        stock: 100,
        valoration: 86,
        category: "Case",
        categoryid: 12,
        marca: "Game Factor",
        image: "https://m.media-amazon.com/images/I/71oC-+srxzL._AC_UF894,1000_QL80_.jpg"
    }
    ]
    const shoppingCar = [{
        title: "Laptop",
        unit_price: 300,
        current_id: "ARS",
        quantity: 6,
    },
        {
            title: "PC",
            unit_price: 60,
            current_id: "ARS",
            quantity: 1,
        }] 

    const handleBuy = async () => {
    
        dispatch(createOrder(shoppingCar))
    }

    return(
        <div className={Styles.productContainer}>
            {productos1.map((producto, index) => (
                <div key={index} className={Styles.productCard}>
                    <img src={producto.image} alt="product" className={Styles.productImage} />
                    <span className={Styles.productName}>{producto.name}</span>
                    <span className={Styles.productPrice}>${producto.price}</span>
                    <p className={Styles.productStock}>Stock: {producto.stock}</p>
                    <button className={Styles.productButton} onClick={() => handleBuy(producto)}>
                        Comprar
                    </button>
                </div>
            ))}
        </div>
    );
}