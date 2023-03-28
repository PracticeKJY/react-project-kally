import { atom, atomFamily, selector, selectorFamily } from 'recoil';

export const initialProductList = [
  {
    id: 'product-rksk',
    name: '[대구 반할만떡] 유부호만두',
    description: '유부로 속을 든든히 채운 군만두',
    price: 6900,
    saleRatio: 0.24,
    salePrice: 5244,
    image: {
      thumbnail: 'assets/product/ubuho/thumbnail.jpg',
      view: 'assets/product/ubuho/detail-view.jpg',
      banner: 'assets/product/ubuho/detail-banner.jpg',
      info: 'assets/product/ubuho/detail-info.jpg',
      alt: '유부호 만두',
    },
    stock: 3,
    category: '샐러드ㆍ간편식',
    kalryOnly: false,
    brand: '대구 반할만떡',
    storageType: 'frozen',
  },
  {
    id: 'product-ekfk',
    name: '[풀무원] 탱탱쫄면 (4개입)',
    description: '튀기지 않아 부드럽고 매콤한',
    price: 4980,
    saleRatio: 0,
    salePrice: 0,
    image: {
      thumbnail: 'assets/product/tangtang/thumbnail.jpg',
      view: 'assets/product/tangtang/detail-view.jpg',
      banner: 'assets/product/tangtang/detail-banner.jpg',
      info: 'assets/product/tangtang/detail-info.jpg',
      alt: '풀무원 탱탱쫄면',
    },
    stock: 11,
    category: '샐러드ㆍ간편식',
    kalryOnly: false,
    brand: '풀무원',
    storageType: 'temperature',
  },
  {
    id: 'product-akqk',
    name: '[홍대주꾸미] 주꾸미 볶음 300g (냉동)',
    description: '매콤달콤한 마력의 밥도둑',
    price: 7900,
    saleRatio: 0.13,
    salePrice: 6800,
    image: {
      thumbnail: 'assets/product/jukkumi/thumbnail.jpg',
      view: 'assets/product/jukkumi/detail-view.jpg',
      banner: 'assets/product/jukkumi/detail-banner.jpg',
      info: 'assets/product/jukkumi/detail-info.jpg',
      alt: '홍대 주꾸미',
    },
    stock: 8,
    category: '수산ㆍ해산ㆍ건어물',
    kalryOnly: true,
    brand: '홍대주꾸미',
    storageType: 'cold',
  },
  {
    id: 'product-tkwk',
    name: '[강남면옥] 소갈비찜',
    description: '보는 맛과 먹는 맛 모두 푸짐',
    price: 29800,
    saleRatio: 0,
    salePrice: 0,
    image: {
      thumbnail: 'assets/product/kangnam/thumbnail.jpg',
      view: 'assets/product/kangnam/detail-view.jpg',
      banner: 'assets/product/kangnam/detail-banner.jpg',
      info: 'assets/product/kangnam/detail-info.jpg',
      alt: '강남면옥 소갈비찜',
    },
    stock: 2,
    category: '국ㆍ반찬ㆍ메인요리',
    kalryOnly: true,
    brand: '강남면옥',
    storageType: 'temperature',
  },
  {
    id: 'product-ckzk',
    name: "[Kalry's] 한돈 삼겹 베이컨",
    description: '무항생제 한돈 삼겹살의 고소한 풍미 그대로',
    price: 4500,
    saleRatio: 0.25,
    salePrice: 3375,
    image: {
      thumbnail: 'assets/product/bacon/thumbnail.jpg',
      view: 'assets/product/bacon/detail-view.jpg',
      banner: 'assets/product/bacon/detail_banner.jpg',
      info: 'assets/product/bacon/detail_info.jpg',
      alt: '칼리 한돈 삼겹 베이컨',
    },
    stock: 13,
    category: '정육ㆍ계란',
    kalryOnly: true,
    brand: "Kalry's",
    storageType: 'cold',
  },
  {
    id: 'product-aaaa',
    name: '유명산지 설향딸기 500g',
    description: '유명산지에서 전하는 제철 딸기',
    price: 11900,
    saleRatio: 0.07,
    salePrice: 10990,
    image: {
      thumbnail:
        'https://img-cf.kurly.com/cdn-cgi/image/quality=85,width=676/shop/data/goods/1608801577622l0.jpg',
      view: 'https://img-cf.kurly.com/shop/data/goodsview/20201224/gv10000146606_1.jpg',
      banner:
        'https://img-cf.kurly.com/shop/data/goodsview/20201224/gv20000146480_1.jpg',
      info: 'https://img-cf.kurly.com/shop/data/goodsview/20221222/gv00000459448_1.jpg',
      alt: '유명산지 설향딸기 500g',
    },
    stock: 13,
    category: '과일ㆍ견과ㆍ쌀',
    kalryOnly: false,
    brand: '유명산지',
    storageType: 'frozen',
  },
  {
    id: 'product-aaab',
    name: "[Kalry's] 양념 소불고기 1kg (냉장)",
    description: '100g당 가격: 1,899원',
    price: 19990,
    saleRatio: 0.05,
    salePrice: 18990,
    image: {
      thumbnail:
        'https://img-cf.kurly.com/cdn-cgi/image/quality=85,width=676/shop/data/goods/165304027922l0.jpg',
      view: 'https://img-cf.kurly.com/shop/data/goodsview/20210804/gv20000208743_1.jpg',
      banner:
        'https://img-cf.kurly.com/shop/data/goodsview/20210804/gv00000208742_1.jpg',
      info: 'https://img-cf.kurly.com/shop/data/goodsview/20220217/gv40000281235_1.jpg',
      alt: '양념 소불고기 1kg (냉장)',
    },
    stock: 4,
    category: '정육ㆍ계란',
    kalryOnly: true,
    brand: "Kalry's",
    storageType: 'cold',
  },
  {
    id: 'product-aaac',
    name: '[이연복의 목란] 짬뽕 2인분 (맵기선택)',
    description: '입맛에 맞게 고르는 인기 메뉴',
    price: 13500,
    saleRatio: 0,
    salePrice: 0,
    image: {
      thumbnail: 'https://img-cf.kurly.com/shop/data/goods/1657518987370l0.jpg',
      view: 'https://img-cf.kurly.com/shop/data/goodsview/20220711/gv10000336082_1.jpg',
      banner:
        'https://img-cf.kurly.com/shop/data/goodsview/20220711/gv00000336080_1.jpg',
      info: 'https://img-cf.kurly.com/shop/data/goodsview/20220711/gv30000336081_1.jpg',
      alt: '짬뽕 2인분 (맵기선택)',
    },
    stock: 13,
    category: '면ㆍ양념ㆍ오일',
    kalryOnly: true,
    brand: '이연복의 목란',
    storageType: 'cold',
  },
  {
    id: 'product-aaad',
    name: '[브룩클린688] 호주산 목초육 치마살 구이용 300g (냉장)',
    description: '100g 당 5166원',
    price: 15500,
    saleRatio: 0.1,
    salePrice: 13975,
    image: {
      thumbnail:
        'https://img-cf.kurly.com/cdn-cgi/image/quality=85,width=676/shop/data/goods/165303917855l0.jpeg',
      view: 'https://img-cf.kurly.com/shop/data/goodsview/20210513/gv20000183220_1.jpg',
      banner:
        'https://img-cf.kurly.com/shop/data/goodsview/20200821/gv00000115282_1.jpg',
      info: 'https://img-cf.kurly.com/shop/data/goodsview/20200821/gv20000115287_1.jpg',
      alt: '호주산 목초육 치마살',
    },
    stock: 4,
    category: '정육ㆍ계란',
    kalryOnly: false,
    brand: '브룩클린688',
    storageType: 'temperature',
  },
  {
    id: 'product-aaae',
    name: '[포비베이글] 크림치즈 8종',
    description: '집에서 즐기는 녹진한 그 맛',
    price: 9900,
    saleRatio: 0.1,
    salePrice: 8910,
    image: {
      thumbnail:
        'https://img-cf.kurly.com/cdn-cgi/image/quality=85,width=676/shop/data/goods/1653034267999l0.jpg',
      view: 'https://img-cf.kurly.com/shop/data/goodsview/20210218/gv10000159388_1.jpg',
      banner:
        'https://img-cf.kurly.com/shop/data/goodsview/20210218/gv30000159387_1.jpg',
      info: 'https://img-cf.kurly.com/shop/data/goodsview/20210218/gv40000159400_1.jpg',
      alt: '크림치즈 8종',
    },
    stock: 13,
    category: '베이커리ㆍ치즈ㆍ델리',
    kalryOnly: false,
    brand: '포비베이글',
    storageType: 'cold',
  },
  {
    id: 'product-aaaf',
    name: '[그래놀라 하우스] 그래놀라 5종 (택1)',
    description: '도톰하게 뭉쳐 만든 수제 그래놀라',
    price: 13500,
    saleRatio: 0,
    salePrice: 0,
    image: {
      thumbnail:
        'https://img-cf.kurly.com/cdn-cgi/image/quality=85,width=676/shop/data/goods/1653035941542l0.jpg',
      view: 'bacon/detail-view.jpg',
      banner: 'bacon/detail_banner.jpg',
      info: 'bacon/detail_info.jpg',
      alt: '그래놀라 5종',
    },
    stock: 7,
    category: '간식ㆍ과자ㆍ떡',
    kalryOnly: true,
    brand: '그래놀라 하우스',

    storageType: 'temperature',
  },
  {
    id: 'product-aaag',
    name: '[스타벅스] by 네스프레소 호환 캡슐 11종',
    description:
      '싱글오리진 과테말라 신규 출시! 집에서 내려 마시는 스타벅스 커피',
    price: 7990,
    saleRatio: 0,
    salePrice: 0,
    image: {
      thumbnail:
        'https://img-cf.kurly.com/cdn-cgi/image/quality=85,width=676/shop/data/goods/1563948119225l0.jpg',
      view: 'https://img-cf.kurly.com/shop/data/goodsview/20230119/gv40000479274_3.jpg',
      banner:
        'https://img-cf.kurly.com/shop/data/goodsview/20220401/gv30000298378_1.jpg',
      info: 'https://img-cf.kurly.com/shop/data/goodsview/20220401/gv40000298379_1.jpg',
      alt: '네스프레소 호환 캡슐 11종',
    },
    stock: 6,
    category: '생수ㆍ음료ㆍ우유ㆍ커피',
    kalryOnly: false,
    brand: '스타벅스',
    storageType: 'frozen',
  },
  {
    id: 'product-aaah',
    name: '[켄트] 콤팩트 초극세모 칫솔 4개입 세트',
    description: '작은 헤드로 구석구석 개운하게',
    price: 17200,
    saleRatio: 0,
    salePrice: 0,
    image: {
      thumbnail:
        'https://img-cf.kurly.com/cdn-cgi/image/quality=85,width=676/shop/data/goods/1655468290167l0.jpeg',
      view: 'https://img-cf.kurly.com/shop/data/goodsview/20201207/gv10000140807_1.jpg',
      banner:
        'https://img-cf.kurly.com/shop/data/goodsview/20201207/gv20000140805_1.jpg',
      info: 'https://img-cf.kurly.com/shop/data/goodsview/20201207/gv20000140910_1.jpg',
      alt: '콤팩트 초극세모',
    },
    stock: 13,
    category: '헤어ㆍ바디ㆍ구강',
    kalryOnly: false,
    brand: '켄트',
    storageType: 'temperature',
  },
  {
    id: 'product-aaai',
    name: '[KF365] 오리지널 바베큐폭립 1kg(500gX2EA)',
    description: '온 가족이 즐기는 큼직한 바베큐 폭립!',
    price: 23500,
    saleRatio: 0.15,
    salePrice: 19900,
    image: {
      thumbnail:
        'https://product-image.kurly.com/cdn-cgi/image/quality=85,width=676/product/image/b8c4673a-8e39-4dfc-9e3c-d2fd013e8cfa.jpg',
      view: 'https://img-cf.kurly.com/shop/data/goodsview/20221103/gv10000445202_1.jpg',
      banner:
        'https://img-cf.kurly.com/shop/data/goodsview/20221103/gv40000435517_1.jpg',
      info: 'https://img-cf.kurly.com/shop/data/goodsview/20221012/gv20000435519_1.jpg',
      alt: '온 가족이 즐기는 큼직한 바베큐 폭립',
    },
    stock: 13,
    category: '샐러드ㆍ간편식',
    kalryOnly: true,
    brand: 'KF365',
    storageType: 'cold',
  },
  {
    id: 'product-aaaj',
    name: '[스윗밸런스] 오늘의 샐러드 10종 (리뉴얼) (택1)',
    description: '다채로운 토핑을 얹은 샐러드',
    price: 4900,
    saleRatio: 0,
    salePrice: 0,
    image: {
      thumbnail:
        'https://img-cf.kurly.com/cdn-cgi/image/quality=85,width=676/shop/data/goods/1655775819130l0.jpg',
      view: 'https://img-cf.kurly.com/shop/data/goodsview/20220620/gv10000328466_1.jpg',
      banner:
        'https://img-cf.kurly.com/shop/data/goodsview/20221222/gv40000469749_1.jpg',
      info: 'https://img-cf.kurly.com/shop/data/goodsview/20210208/gv00000157620_1.jpg',
      alt: ' 오늘의 샐러드',
    },
    stock: 6,
    category: '샐러드ㆍ간편식',
    kalryOnly: false,
    brand: '스윗밸런스',
    storageType: 'frozen',
  },
];

export const productListState = atom({
  key: 'productListState',
  default: initialProductList,
});

export const productListFamily = atomFamily({
  key: 'productListFamily',
  default: (id) => {
    console.log('패밀리작동');

    const t = initialProductList.find((order) => order.id === id);

    console.log('패밀리작동: ', t);

    return t;
  },
});

export const selectedproductId = atom({
  key: 'selectedproductId',
  default: 'product-rksk',
});
