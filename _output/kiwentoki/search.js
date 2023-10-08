import data from "https://jordanreger.com/kiwentoki/english.json" assert { type: "json" };

export default function search (word) {
  for (const def in data.words) {
    if (data.words[def].includes(word)) {
      return def;
    }
  }
  return new Error(`${word} not found`);
}
