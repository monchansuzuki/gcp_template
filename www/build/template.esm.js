import { p as patchBrowser, b as bootstrapLazy } from './index-f1cb2b6e.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["template-classic",[[1,"template-classic",{"tokken":[1]}]]],["template-insta",[[1,"template-insta",{"tokken":[1],"headerTitle":[1,"header-title"]}]]]], options);
});
