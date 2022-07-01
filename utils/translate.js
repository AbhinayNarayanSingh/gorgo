import Polyglot from "node-polyglot";
import { getCookie } from "./session";

const lang = getCookie("lang") || "en";

// 2-letter language code to Polyglot
var AllPolyglots = {};

const Languages = import.meta.globEager("./languages/*.json");
for (var RelPath in Languages) {
  var Key = RelPath.match(/([a-z]+)\.json/)[1];
  var Dictionary = Languages[RelPath].default;

  var LocalPolyglot = new Polyglot({ locale: Key });
  LocalPolyglot.extend(Dictionary);
  AllPolyglots[Key] = LocalPolyglot;
}

export const translate = (key, args) => {
  var selectPolyglot = AllPolyglots[lang];
  return selectPolyglot.t(key, args);
};
