/**
 * @param  { string } to
 * @param  { boolean } isReplace
 */
export const navigate = (to, isReplace = false) => {
  const historyChangeEvent = new CustomEvent("historychange", {
    // CustomEvent(이벤트이름, 이벤트 내에포함할 세부정보 (기본값 null));
    detail: {
      to, // 이동하게 될 url
      isReplace, // history 스택에 추가 여부
    },
  });

  dispatchEvent(historyChangeEvent); // 매개변수는 발송할 event 객체임
};
