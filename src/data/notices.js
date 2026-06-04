export const NOTICES = [
  {
    id: "1",
    pinned: true,
    title: "♥전 상품 무료배송♥",
    author: "코드뮤즈",
    date: "2026.06.04",
    body: `안녕하세요, 코드뮤즈입니다.

코드뮤즈는 전 상품 무료배송으로 운영하고 있습니다.

■ 배송 안내
- 주문 금액·수량 관계없이 전 상품 무료배송

■ 유의 사항
- 제주 및 도서산간 지역은 추가 배송비가 발생할 수 있습니다.

앞으로도 코드뮤즈에 많은 관심 부탁드립니다.
감사합니다.`,
  },
];

export function getNoticeById(id) {
  return NOTICES.find((n) => n.id === id) ?? null;
}
