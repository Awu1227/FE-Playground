function flatten(arr) {
  return arr.reduce((result, item) => {
    return result.concat(Array.isArray(item) ? flatten(item) : item);
  }, []);
}

console.log(flatten([1,2,4,[2,5,[1,2,[1,4]]]]));