function find(subsets, i) {
  if (subsets[i].parent !== i) {
    subsets[i].parent = find(subsets, subsets[i].parent)
  }

  return subsets[i].parent
}

function Union(subsets, x, y) {
  const xroot = find(subsets, x)
  const yroot = find(subsets, y)

  const { rank: xrank } = subsets[xroot]
  const { rank: yrank } = subsets[yroot]
  if (xrank < yrank) {
    subsets[xroot].parent = yroot
  } else if (xrank > yrank) {
    subsets[yroot].parent = xroot
  } else {
    subsets[yroot].parent = xroot
    subsets[xroot].rank++
  }
}

function KruakalMST(graph) {
  const { V } = graph
  const result = []
  const subsets = []
  let i = 0

  graph.edge.sort((a, b) => a.weight - b.weight)

  for (let v = 0; v < V; v++) {
    subsets.push({
      parent: v,
      rank: 0
    })
  }

  while(result.length < V - 1) {
    const next_edge = graph.edge[i++]

    const x = find(subsets, next_edge.src)
    const y = find(subsets, next_edge.dest)

    if (x !== y) {
      result.push(next_edge)
      Union(subsets, x, y)
    }
  }

  console.log('Following are the edges in the constructed MST')
  result.forEach(item => {
    console.log(`${item.src} -- ${item.dest} == ${item.weight}`)
  })
}

function main() {
  /*
             10
        0--------1
        |  \     |
       6|   5\   |15
        |      \ |
        2--------3
            4       */
  const V = 4
  const E = 5
  const graph = {
    V, E,
    edge: [{
      src: 0,
      dest: 1,
      weight: 10
    }, {
      src: 0,
      dest: 2,
      weight: 6
    }, {
      src: 0,
      dest: 3,
      weight: 5
    }, {
      src: 1,
      dest: 3,
      weight: 15
    }, {
      src: 2,
      dest: 3,
      weight: 4
    }]
  }

  KruakalMST(graph)
}

main()