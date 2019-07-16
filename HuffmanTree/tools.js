function printCode(root, s) {
  if (root.left === null && root.right === null && root.c !== '') {
    console.log(`${root.c}: ${s}, ${root.data * s.length}`)
    return
  }

  printCode(root.left, s + '0')
  printCode(root.right, s + '1')
}

module.exports = {
  printCode
}