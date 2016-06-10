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

    parts.map((p, k) => {
      try {
        let item = typeof p === 'string' ? p.toLowerCase() : p.toString().toLowerCase()

        // 计算优先级权值
        let priority = parts.length - k
        result[index] += priority

        // 计算标签权值
        if (doc.tags.indexOf(item) > -1) {
          result[index] += WEIGHT.tag
        }

        let title = doc.title
        let content = doc.content
        let len = p.length

        // 计算标题权值
        while (title.indexOf(p) > -1) {
          title = title.slice(0, title.indexOf(p)) + title.slice(title.indexOf(p) + len)
          result[index] += WEIGHT.title
        }

        // 计算内容权值
        while (content.indexOf(p) > -1) {
          content = content.slice(0, content.indexOf(p)) + content.slice(content.indexOf(p) + len)
          result[index] += WEIGHT.content
        }
      } catch (e) {
        console.log(e)
      }
    })
  })

  return result
}

// 根据权值排序，取前n个（降序排列）
export function sortByWeigth (weight, n = weight.length) {
  const result = []
  let i = weight.length > n ? n : weight.length

  while (i > 0) {
    let max = Math.max(...weight)
    if (max !== WEIGHT.init) {
      let index = weight.indexOf(max)
      result.push(doc[index])
      weight.splice(index, 1, WEIGHT.init)
      i--
    } else {
      break
    }
  }

  return result
}
