export const handleScroll = (callback) => {
  const handleScroll = () => {
    callback(window.scrollY > 50);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
};
