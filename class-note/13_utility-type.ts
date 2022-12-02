interface Product {
    id: number;
    name: string;
    price: number;
    brand: string;
    stock: number;
}

// 상품 목록을 받아오기 위한 API 함수
function fetchProducts(): Promise<Product[]> {
    // ..
}

// interface ProductDetail {
//     id: number;
//     name: string;
//     price: number;
// }

type ShoppingItem = Pick<Product, "id" | "name" | "price">;
// Product 인터페이스의 일부만 필요한경우?
function displayProductDetail(shoppingItem: Pick<Product, 'id' | 'name' | 'price'>) {
    // Pick을 사용하면 불필요하게 interface를 다시 선언하지 않아도 되기 때문에, 불필요한 코드가 줄어듦
    
}