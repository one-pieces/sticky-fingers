function createHTree(charArray, charFreq) {
  let root = null
  const queue = charArray.map((item, index) => ({
    c: item,
    data: charFreq[index],
    left: null,
    right: null
  })).sort((a, b) => a.data - b.data)

  while (queue.length > 1) {
    const x = queue.shift()
    const y = queue.shift()
    const f = {
      c: '',
      data: x.data + y.data,
      left: x,
      right: y
    }
    root = f
    queue.push(f)
    queue.sort((a, b) => a.data - b.data)
  }

  return root
}

function encryp(str) {
  const map = new Map()
  for (let char of str) {
    map.set(char, (map.get(char) || 0) + 1)
  }

  const charArray = Array.from(map.keys())
  const charFreq = Array.from(map.values())
  console.log(`原文共有${str.length}字符，有${charArray.length}个不同的字符，
  分别为 ${charArray.map((item, index) => `${item}(${charFreq[index]})`)}`)
  return createHTree(charArray, charFreq)
}

module.exports = {
  createHTree,
  encryp
}