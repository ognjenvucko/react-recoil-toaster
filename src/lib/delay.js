export const delay = async (ms = 0) => {
  return new Promise(res => {
    setTimeout(() => {
      res();
    }, ms);
  });
};
