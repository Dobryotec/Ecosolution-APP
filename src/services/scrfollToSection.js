export const scrollToSection = (name) => {
  const element = document.getElementById(name);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
