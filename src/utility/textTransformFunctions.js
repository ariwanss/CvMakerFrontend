export const toCamelCase = (text) => {
  let words = text.toLowerCase().split(' ');
  let capitalizedWords = words.map(word => word[0].toUpperCase() + word.slice(1));
  capitalizedWords[0] = capitalizedWords[0].toLowerCase();
  return capitalizedWords.join('');
}

export const camelCaseToNormal = (text) => {
  let word = '';
  let phrase = '';
  for (let char of text) {
    if (char.charCodeAt(0) < 97) {
      phrase += ' ' + word;
      word = '';
    }
    word += char;
  }
  phrase += ' ' + word;
  return phrase;
}