/**
 * 扁平化树形结构
 * @param arr
 * @returns
 */
 function flatTree(arr) {
    return arr.flatMap(item => {
      if (item.routes && item.routes.length > 0) {
        return flatTree(item.routes)
      }
      return item
    })
  }
