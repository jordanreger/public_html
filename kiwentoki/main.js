const search = Deno.args[0] ?? (() => { throw new Error("No word provided") })();

const english = JSON.parse(await Deno.readTextFile("./english.json"));

const def = Object.keys(english.words).find((x) => {
  const defs = english.words[x];
  for (const def in defs) {
    if (defs[def] === search) return defs[def];
    else return null;
  }
});

def ?? (() => { throw new Error(`${search} not found`) })();
console.log(def);
