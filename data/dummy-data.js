import Product from "../model/Product";
export const PRODUCTS = [
    new Product(
        'p1',
        'blouse',
        'OVS',
        '30$',
        require('../assets/images/products/productcard_model1.jpg'),
        19,
        4,
        true,
        false
    ),
    new Product(
        'p2',
        'T-Shirt Sailing',
        'Mango Boy',
        '10$',
        require('../assets/images/products/productcard_model2.jpg'),
        5,
        2,
        true,
        false
    ),
    new Product(
        'p3',
        'Jeans',
        'cool',
        '45$',
        require('../assets/images/products/productcard_model2.jpg'),
        48,
        3,
        false,
        true
    ),
    new Product(
        'p4',
        'Evening Dress',
        'Dorothy Perkins',
        '15$',
        require('../assets/images/products/productcard_model3.jpg'),
        10,
        5,
        true,
        false
    ),
    new Product(
        'p5',
        'Sport Dress',
        'sitily',
        '22$',
        require('../assets/images/products/productcard_model4.png'),
        98,
        5,
        true,
        false
    ),
    new Product(
        'p6',
        'Gucci',
        'full Gown',
        '85$',
        require('../assets/images/products/productcard_model5.jpg'),
        854,
        5,
        true,
        false
    )
]