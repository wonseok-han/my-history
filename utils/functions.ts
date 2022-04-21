/**
 * NOTE: guid 생성
 * @returns "a101b4ce-04f4-3e30-fcca-7d06145e2276"
 */
export const makeGuid = (): string => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };
  return (
    alphabet.charAt(Math.floor(Math.random() * alphabet.length)) +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    s4() +
    s4()
  );
};
