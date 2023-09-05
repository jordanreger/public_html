const search = Deno.args[0] ?? (() => { throw new Error("No word provided") })();

const english = await fetch("https://jordanreger.com/kiwentoki/english.json")
.then(res => res.json());

const keys = Object.keys(english.words).filter((key) => {
  if (typeof english.words[key] === "object") return english.words[key].some(def => def.toLowerCase() === search.toLowerCase());
  else return english.words[key].toLowerCase() === search.toLowerCase();
});

keys.length === 0 ? console.log(`${search} not found`) : console.log(keys[0]);