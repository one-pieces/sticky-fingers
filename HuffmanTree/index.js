const { encryp } = require('./HuffmanTree')
const { printCode } = require('./tools')

const str = 'If the input array is sorted, there exists a linear time algorithm. We will soon be discussing in our next post.'
const hTree = encryp(str)
printCode(hTree, '')
console.log('编码后长度为', hTree.data)