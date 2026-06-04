import { useCallback, useEffect, useState } from "react";

const SCRIPT_SRC =
  "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";

let scriptPromise = null;

function loadPostcodeScript() {
  if (window.daum?.Postcode) return Promise.resolve();
  if (scriptPromise) return scriptPromise;

  scriptPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${SCRIPT_SRC}"]`);
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () =>
        reject(new Error("우편번호 스크립트 로드 실패")),
      );
      return;
    }

    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("우편번호 스크립트 로드 실패"));
    document.head.appendChild(script);
  });

  return scriptPromise;
}

export function useDaumPostcode() {
  const [ready, setReady] = useState(Boolean(window.daum?.Postcode));
  const [error, setError] = useState(null);

  useEffect(() => {
    if (ready) return;
    loadPostcodeScript()
      .then(() => setReady(true))
      .catch((e) => setError(e.message));
  }, [ready]);

  const openPostcode = useCallback(
    (onComplete) => {
      if (!window.daum?.Postcode) {
        setError("우편번호 서비스를 불러오는 중입니다. 잠시 후 다시 시도해 주세요.");
        return;
      }

      new window.daum.Postcode({
        oncomplete(data) {
          let address = data.address;
          if (data.addressType === "R") {
            if (data.bname) address += ` ${data.bname}`;
            if (data.buildingName) address += ` ${data.buildingName}`;
          }
          onComplete({
            zonecode: data.zonecode,
            address,
            roadAddress: data.roadAddress,
            jibunAddress: data.jibunAddress,
          });
        },
      }).open();
    },
    [],
  );

  return { ready, error, openPostcode, loadError: error };
}
