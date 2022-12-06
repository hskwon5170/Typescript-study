interface Product {
    id: number;
    name: string;
    price: number;
    brand: string;
    stock: number;
}

// 1. 상품 목록을 받아오기 위한 API 함수
// function fetchProducts(): Promise<Product[]> {
//     // ..
// }

// interface ProductDetail {
//     id: number;
//     name: string;
//     price: number;
// }

// 2. 특정 상품의 상세 정보를 나타내기 위한 함수
type ShoppingItem = Pick<Product, "id" | "name" | "price">;
// Product 인터페이스의 일부만 필요한경우 (또 다른 인터페이스를 추가로 선언하는것은 비효율적)
function displayProductDetail(shoppingItem: Pick<Product, 'id' | 'name' | 'price'>) {
    // Pick을 사용하면 불필요하게 interface를 다시 선언하지 않아도 되기 때문에, 불필요한 코드가 줄어듦
    // 필요한 타입만 "Pick"한다
    
}

// interface UpdateProduct {
//   id?: number;
//   name?: string;
//   price?: number;
//   brand?: string;
//   stock?: number;
// }

// Partial : 정의된 타입 전체에 옵셔널("?")처리
// 특정 타입이 수정될수도 있고 안될수도 있고
type UpdateProduct = Partial<Product>
// 3. 특정(일부) 상품 정보를 업테이트(갱신)하는 함수
function updateProductItem(productItem: Partial<Product>) {
}

// 4. 유틸리티 타입 구현하기 - Partial
interface UserProfile {
    username: string;
    email: string;
    profilePhotoUrl: string;
}
// interface UserProfileUpdate {
//   username?: string;
//   email?: string;
//   profilePhotoUrl?: string;
// }

// #1
// type UserProfileUpdate = {
//     username?: UserProfile['username'];
//     email?: UserProfile['email'];
//     profilePhotoUrl?: UserProfile['profilePhotoUrl'];
// };

// #2 맵드타입
// type UserProfileUpdate = {
//     [p in 'username' | 'email' | 'profilePhotoUrl']?: UserProfile[p]
// }

// type UserProfileKeys = keyof UserProfile

// #3
type UserProfileUpdate = {
  [p in keyof UserProfile]?: UserProfile[p];
};

// #4
type Subset<T> = {
  [p in keyof T]?: T[p];
}; 

