// 单个根节点或者多个根结点都可用-----通用
function arrayToTree(items) {
  let result = []; // 存放结果集
  const itemMap = {}; //
  
  // 先找到根节点
  const pids = [...new Set(arr.filter(item => !arr.map(item => item.id).includes(item.pid)).map(item => item.pid))]

  items.forEach(item => {
    const pid = item.pid
    const id = item.id

    if (!itemMap[id]) {
        itemMap[id] = {
            ...item,
            children: []
        }
    }

    if (!itemMap[pid]) {
        itemMap[pid] = {
            id: pid,
            children: [itemMap[id]]
        }
    } else {
        itemMap[pid].children.push(itemMap[id])
    }

  })
  
  pids.forEach(pid => {
    result = result.concat(itemMap[pid].children)
  })
  return result;
}

// 通过递归。父节点只能维一
function arrayToTree2(items, result, pid) {
    for (let i = 0; i < items.length; i++) {
        const item = {...items[i], children: []}
        if (item.pid === pid) {
            result.push(item)
            arrayToTree2(items, item.children, item.id)
        }
    }
}

let arr = [
  { id: 1, name: "部门1", pid: 0 },
  { id: 2, name: "部门2", pid: 0 },
  { id: 3, name: "部门3", pid: 1 },
  { id: 4, name: "部门4", pid: 3 },
  { id: 5, name: "部门5", pid: 4 },
];

console.log(JSON.stringify(arrayToTree(arr), ' ', 2))

// let res = []
// arrayToTree2(arr, res, 0)
// console.log(JSON.stringify(res, ' ', 2))
