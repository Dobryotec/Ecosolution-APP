export const validateForm = (name, email, tel, setErrors) => {
  const newErrors = {};

  if (!name.trim() || !/^[A-Z][a-z]{2,}$/.test(name)) {
    newErrors.name =
      "Name is required and should start with a capital letter and have a minimum length of 3 characters";
  }

  if (!email.trim() || !/@/.test(email)) {
    newErrors.email = "Email is required and should contain @";
  }

  if (!tel.trim() || !/^\+380\d{9}$/.test(tel)) {
    newErrors.tel =
      "Phone is required and should be in the format +380XXXXXXXXX";
  }

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};
