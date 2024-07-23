export default function appendToEachArrayValue(array, appendString) {
  const appendedArray = [];
  for (const index of array) {
    const value = index;
    appendedArray.push(appendString + value);
  }

  return appendedArray;
}
