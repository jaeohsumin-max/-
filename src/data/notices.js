export const NOTICES = [
  {
    id: "1",
    pinned: true,
    title: "♥전 상품 무료배송♥",
    author: "코드뮤즈",
    date: "2026.06.04",
    body: `안녕하세요, 코드뮤즈입니다.

코드뮤즈를 이용해 주시는 고객님께 감사드리며,
전 상품 무료배송 이벤트를 안내드립니다.

■ 혜택 내용
- 주문 금액·수량 관계없이 전 상품 무료배송

■ 유의 사항
- 제주 및 도서산간 지역은 추가 배송비가 발생할 수 있습니다.
- 일부 프로모션 상품은 사정에 따라 예외가 있을 수 있습니다.

앞으로도 코드뮤즈에 많은 관심 부탁드립니다.
감사합니다.`,
  },
];

export function getNoticeById(id) {
  return NOTICES.find((n) => n.id === id) ?? null;
}
