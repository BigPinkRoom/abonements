export function isEmptyObject(object) {
  if (Object.entries(object).length) {
    return true;
  } else {
    return false;
  }
}
