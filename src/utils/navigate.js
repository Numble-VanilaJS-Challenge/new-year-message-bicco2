/**
 * @param  { string } to
 * @param  { boolean } isReplace
 */
export const navigate = (to, isReplace = false) => {
  const historyChangeEvent = new CustomEvent("historychange", {
    detail: {
      to,
      isReplace,
    },
  });

  console.log(historyChangeEvent);

  dispatchEvent(historyChangeEvent);
};
