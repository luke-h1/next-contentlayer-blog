const pick = (obj: any, keys: any[]) => {
  return keys.reduce((acc, key) => {
    acc[key] = obj[key];
    return acc;
  }, {})
}
export default pick;

