import data from "./english.json" assert { type: "json" };

function search (word) {
  for (const def in data.words) {
    if (data.words[def].includes(word)) {
      return def;
    }
  }
  return new Error(`${word} not found`);
}

console.log(search(Deno.args[0]));