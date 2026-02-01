import { createRequire } from 'module';const require = createRequire(import.meta.url);

// node_modules/@angular/cdk/fesm2022/_array-chunk.mjs
function coerceArray(value) {
  return Array.isArray(value) ? value : [value];
}

// node_modules/@angular/cdk/fesm2022/coercion.mjs
function coerceBooleanProperty(value) {
  return value != null && `${value}` !== "false";
}

export {
  coerceArray,
  coerceBooleanProperty
};
//# sourceMappingURL=chunk-3YX3VALW.js.map
