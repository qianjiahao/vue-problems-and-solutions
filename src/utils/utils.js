import doc from '../config/doc.js'
import { WEIGHT } from '../config/settings.js'

// 分词
export function participle (value) {
  const parts = value.split(' ').filter(v => v)

  return unique(parts)
}

// 去重
export function unique (array) {
  return [...new Set(array)]
}

// 计算权值
export function countWeight (parts) {
  const result = []

  doc.map((doc, index) => {
    // 基础权值
    result[index] = WEIGHT.init

    parts.map((p) => {
      let item = p.toLowerCase()
      // 计算标签权值
      if (doc.tags[item]) {
        result[index] += WEIGHT.tag
      }

      let title = doc.title
      let content = doc.content
      let len = p.length

      // 计算标题权值
      while (title.indexOf(p) > 0) {
        title = title.slice(title.indexOf(p), title.indexOf(p) + len)
        result[index] += WEIGHT.title
      }

      // 计算内容权值
      while (content.indexOf(p) > 0) {
        content = content.slice(content.indexOf(p), content.indexOf(p) + len)
        result[index] += WEIGHT.content
      }
    })
  })

  return result
}

// 根据权值排序，取前n个（降序排列）
export function sortByWeigth (weight, n = 5) {
  const result = []
  let i = weight.length > n ? n : weight.length

  while (i > 0) {
    let max = Math.max(...weight)
    let index = weight.indexOf(max)
    result.push(index)
    weight.splice(index, 1, 0)
    i--
  }

  return result
}
