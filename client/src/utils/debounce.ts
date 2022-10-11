function debounce<
  T extends string[]
>(
  func: (...args: T) => void,
  delay = 500
):
  (...args: T) => void {
  let timer: NodeJS.Timeout;
  return (...args: T) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

export default debounce;
