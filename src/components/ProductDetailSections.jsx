export function ProductInfoTable({ rows }) {
  return (
    <table className="w-full text-[12px] md:text-[13px] border-t border-[#333]">
      <tbody>
        {rows.map((row) => (
          <tr key={row.label} className="border-b border-[#e5e5e5]">
            <th className="w-[28%] md:w-[22%] py-3 px-3 md:px-4 bg-[#fafafa] text-left font-medium text-[#555] align-top">
              {row.label}
            </th>
            <td className="py-3 px-3 md:px-4 text-[#333] leading-relaxed whitespace-pre-line">
              {row.value}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function ProductDetailTabs({ tabs, active, onChange }) {
  return (
    <div className="flex border-b border-[#ddd]">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => onChange(tab.id)}
          className={`flex-1 py-3.5 text-[12px] md:text-[13px] border-b-2 -mb-px transition-colors ${
            active === tab.id
              ? "border-[#333] text-[#111] font-medium"
              : "border-transparent text-[#888] hover:text-[#333]"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export function RichProductDetail({ detail }) {
  if (!detail) return null;

  return (
    <div className="text-[13px] text-[#444] leading-[1.85] space-y-10">
      {detail.tagline && (
        <p className="text-[15px] md:text-[16px] text-[#111] font-medium leading-relaxed">
          {detail.tagline}
        </p>
      )}

      {detail.summary && (
        <div className="space-y-4">
          {detail.summary.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      )}

      {detail.delightPoints?.length > 0 && (
        <div>
          <h3 className="text-[14px] font-semibold text-[#111] mb-4">
            ✨ DELIGHT POINTS (디자인 포인트)
          </h3>
          <ul className="space-y-4">
            {detail.delightPoints.map((point) => (
              <li key={point.title}>
                <p className="font-medium text-[#111] mb-1">{point.title}</p>
                <p>{point.body}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {detail.colors?.length > 0 && (
        <div>
          <h3 className="text-[14px] font-semibold text-[#111] mb-4">🎨 COLOR</h3>
          <ul className="space-y-2">
            {detail.colors.map((color) => (
              <li key={color.name}>
                <span className="font-medium text-[#111]">{color.name}</span>
                {color.note && <span className="text-[#666]"> — {color.note}</span>}
              </li>
            ))}
          </ul>
        </div>
      )}

      {detail.productInfo && (
        <div>
          <h3 className="text-[14px] font-semibold text-[#111] mb-4">
            🔎 PRODUCT INFO (상품 상세 정보)
          </h3>
          <ProductInfoTable rows={detail.productInfo} />
        </div>
      )}

      {detail.washingGuide && (
        <div>
          <h3 className="text-[14px] font-semibold text-[#111] mb-3">
            🧼 WASHING GUIDE (세탁 가이드)
          </h3>
          <p>{detail.washingGuide}</p>
        </div>
      )}
    </div>
  );
}

export const DEFAULT_SHIPPING_INFO = `배송 방법 : 택배
배송 지역 : 전국지역
배송 비용 : 무료
배송 기간 : 2일 ~ 7일

결제 완료 후(입금 확인 후), 상품 준비기간이 2-7일 소요됩니다. (주말/공휴일 제외)
재고가 소진되거나 택배사 사정상 배송이 지연되는 경우, 상품 발송일이 2-3주 이상 소요 될 수 있습니다.
주말 및 공휴일에는 배송업무가 이루어지지 않습니다.`;

export const DEFAULT_EXCHANGE_INFO = `▶ 교환 및 반품이 가능한 경우
- 상품 수령 후 7일 이내에 반드시 교환/반품 의사를 남겨주셔야 합니다.
- Q&A 게시판에 교환/반품 요청글을 남겨주세요.
- 고객님의 단순변심에 의한 반품은 왕복 택배요금을 부담해주셔야 합니다.

▶ 교환 및 반품이 불가능한 경우
- 교환&반품 접수기간(수령 후 7일 이내)이 경과된 상품
- 사이즈텍/라벨이 제거된 상품
- 소비자의 사용/소비에 의해 상품의 가치가 현저히 감소한 경우`;

export const DEFAULT_PAYMENT_INFO = `▶ 무통장입금
주문 시 입력한 입금자명과 주문금액이 동일해야 자동입금처리가 진행됩니다.

▶ 카드결제
카드결제 후 부분취소를 원하실 경우 고객센터로 연락을 주셔야 합니다.`;
