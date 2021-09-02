function ajax(url) {
  const p = new Promise((resolve, reject) => {
    let xhr = XMLHttpRequest()
    xhr.open("GET", url, true)
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        resolve(xhr.responseText)
      } else {
        reject(new Error("404 not found"))
      }
    }
    xhr.send()
  })
  return p
}
