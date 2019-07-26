function RemoveSpecialCaracters(text) {
  const cleanText = text.replace(/[^a-zA-Z ]/g, "");
  return cleanText
}

export default RemoveSpecialCaracters