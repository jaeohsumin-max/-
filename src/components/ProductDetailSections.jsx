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

export function ProductComment({ lines, image, productName = "" }) {
  if (!lines?.length) return null;

  return (
    <div className="py-10 md:py-14">
      {image && (
        <div className="max-w-[240px] md:max-w-[280px] mx-auto mb-8 md:mb-10">
          <img
            src={image}
            alt={productName}
            className="w-full rounded-2xl"
            loading="lazy"
          />
        </div>
      )}
      <ul className="max-w-[520px] mx-auto space-y-3 text-[14px] md:text-[15px] text-[#444] leading-[1.75]">
        {lines.map((line) => (
          <li key={line} className="flex gap-2.5">
            <span className="shrink-0 text-[#999]">•</span>
            <span>{line}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const SIZE_NOTICE_LINES = [
  "*위의 실측사이즈는 '단면의 길이'입니다.",
  "*측정 방법에 따라 1~3cm 정도의 차이가 있을 수 있습니다.",
  "*사용자의 모니터의 화면 해상도, 화면 설정에 따라 색상의 차이가 있을 수 있습니다.",
  "제품컷의 색상이 실제 제품 색상과 비슷합니다.",
];

export function ProductSpecSection({ composition, size, modelSize }) {
  if (!composition && !size && !modelSize) return null;

  return (
    <div className="py-10 md:py-14 text-center max-w-[640px] mx-auto border-t border-[#eee]">
      {composition && (
        <div className="mb-10 md:mb-12">
          <h3 className="text-[13px] md:text-[14px] tracking-[0.25em] text-[#111] font-light mb-4">
            혼용률
          </h3>
          <p className="text-[14px] text-[#444]">{composition}</p>
        </div>
      )}

      {size && (
        <div className="mb-10 md:mb-12">
          <h3 className="text-[13px] md:text-[14px] tracking-[0.25em] text-[#111] font-light mb-4">
            SIZE
          </h3>
          {typeof size === "object" ? (
            <>
              <p className="text-[13px] text-[#666] mb-2">{size.labels}</p>
              <p className="text-[14px] text-[#333]">{size.values}</p>
            </>
          ) : (
            <p className="text-[14px] text-[#333]">{size}</p>
          )}
          <div className="mt-8 md:mt-10 space-y-1.5 text-[12px] md:text-[13px] text-[#888] leading-relaxed">
            {SIZE_NOTICE_LINES.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
      )}

      {modelSize && (
        <div>
          <h3 className="text-[13px] md:text-[14px] tracking-[0.25em] text-[#111] font-light mb-4">
            MODEL SIZE
          </h3>
          <p className="text-[14px] text-[#444]">{modelSize}</p>
        </div>
      )}
    </div>
  );
}

export function ProductCustomDetail({ sections }) {
  if (!sections?.length) return null;

  return (
    <div className="max-w-[680px] mx-auto text-center">
      {sections.map((section, index) => {
        const key = `${section.type}-${index}`;

        if (section.type === "image") {
          return (
            <img
              key={key}
              src={section.src}
              alt={section.alt ?? ""}
              className={`w-full mx-auto ${section.className ?? ""}`}
              loading="lazy"
            />
          );
        }

        if (section.type === "label") {
          return (
            <p
              key={key}
              className="mt-14 mb-5 text-center text-[11px] text-[#555] tracking-[0.12em]"
            >
              {section.text}
            </p>
          );
        }

        if (section.type === "notice") {
          return (
            <div
              key={key}
              className="mb-8 text-center text-[11px] md:text-[12px] text-[#555] leading-relaxed"
            >
              {section.heading && (
                <p className="mb-6 text-[18px] md:text-[20px] text-[#999]">
                  {section.heading}
                </p>
              )}
              {section.title && <p className="mb-5 text-[#111]">{section.title}</p>}
              {section.lines?.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          );
        }

        if (section.type === "text") {
          return (
            <div
              key={key}
              className="my-14 md:my-16 text-center text-[11px] md:text-[12px] text-[#555] leading-[2.2]"
            >
              {section.lines?.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          );
        }

        if (section.type === "sizeInfo") {
          return (
            <div
              key={key}
              className="my-16 md:my-20 text-center text-[11px] md:text-[12px] text-[#555] leading-[2.4]"
            >
              <p className="mb-4">SIZE: FREE</p>
              <p>허리 / 밑위길이 / 허벅지 단면 / 총장 / 엉덩이 / 밑단 (cm)</p>
              <p className="my-5">30 / 30 / 33 / 97 / 60 / 25</p>
              <div className="mt-8 space-y-4">
                <p>*위의 실측사이즈는 '단면의 길이'입니다.</p>
                <p>*측정 방법에 따라 1~3cm 정도의 차이가 있을 수 있습니다.</p>
                <p>*사용자의 모니터의 화면 해상도, 화면 설정에 따라 색상의 차이가 있을 수 있습니다.</p>
                <p>제품컷의 색상이 실제 제품 색상과 비슷합니다.</p>
              </div>
            </div>
          );
        }

        if (section.type === "specInfo") {
          return (
            <div
              key={key}
              className="my-16 md:my-20 text-center text-[11px] md:text-[12px] text-[#555] leading-[2.4]"
            >
              {section.composition && (
                <div className="mb-16 md:mb-20">
                  <p className="mb-4">혼용률</p>
                  <p>{section.composition}</p>
                </div>
              )}
              {section.size && (
                <div>
                  <p className="mb-4">SIZE: {section.size.name ?? "FREE"}</p>
                  {section.size.labels && <p>{section.size.labels}</p>}
                  {section.size.values && <p className="my-5">{section.size.values}</p>}
                  {section.size.notes?.length > 0 && (
                    <div className="mt-8 space-y-4">
                      {section.size.notes.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        }

        if (section.type === "modelInfo") {
          return (
            <div
              key={key}
              className="my-14 md:my-16 text-center text-[11px] md:text-[12px] text-[#555] leading-loose"
            >
              <p className="mb-3">MODEL INFO</p>
              <p>{section.text}</p>
            </div>
          );
        }

        if (section.type === "dividerTitle") {
          return (
            <div key={key} className="mt-16 mb-8">
              <div className="border-t border-[#111] mb-8" />
              <p className="text-[11px] text-[#555] tracking-[0.18em]">
                {section.text}
              </p>
            </div>
          );
        }

        if (section.type === "spacer") {
          return <div key={key} className={section.className ?? "h-12"} />;
        }

        return null;
      })}
    </div>
  );
}

export function RichProductDetail({ detail, productName = "" }) {
  if (!detail) return null;

  if (detail.customSections?.length) {
    return <ProductCustomDetail sections={detail.customSections} />;
  }

  if (detail.comment?.length) {
    return (
      <>
        <ProductComment
          lines={detail.comment}
          image={detail.commentImage}
          productName={productName}
        />
        <ProductSpecSection
          composition={detail.composition}
          size={detail.size}
          modelSize={detail.modelSize}
        />
      </>
    );
  }

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
