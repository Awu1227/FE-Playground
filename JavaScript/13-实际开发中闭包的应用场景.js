function createCache() {
  const data = {}
  return {
    set: function (key, value) {
      data[key] = value
    },
    get: function (key) {
      return data[key]
    },
  }
}
const c = createCache()
c.set("a", 1)
console.log(c.get("a"))
