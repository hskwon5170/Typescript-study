type Heroes = 'Hulk' | 'Capt' | 'Thor'

// 기존에 있던 타입을 -> 맵드 타입으로 변환해내는것 (마치 map()를 돌리는것처럼!)
type HeroAges = { // Heros들을 순회하면서 각각을 number로 타이핑 (마치 interface)
    [K in Heroes]: number 
}
const ages: HeroAges = {
    Hulk: 33,
    Capt: 100,
    Thor: 1000,
}