const search = Deno.args[0] ?? (() => { throw new Error("No word provided") })();

const english = await Deno.readTextFile("./english.json")
.then(res => JSON.parse(res));

const keys = Object.keys(english.words).filter((key) => {
  if (typeof english.words[key] === "object") return english.words[key].some(def => def.toLowerCase() === search.toLowerCase());
  else return english.words[key].toLowerCase() === search.toLowerCase();
});

keys.length === 0 ? console.log(`${search} not found`) : console.log(keys[0]);
