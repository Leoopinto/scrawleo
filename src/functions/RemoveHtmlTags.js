function RemoveHtmlTags(text) {
  const cleanText = text.replace(/<[^>]+>/g, '');
  return cleanText
}

export default RemoveHtmlTags