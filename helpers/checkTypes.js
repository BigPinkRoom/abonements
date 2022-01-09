export function isEmptyObject(object) {
  if (Object.entries(object).length) {
    return false;
  } else {
    return true;
  }
}
