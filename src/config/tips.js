const tips = [
  '关键词用空格分隔，便于做分词查询',
  'PC端单击输入内容，即可全选',
  '移动端摇一摇即可清空输入'
]

export default function pick () {
  let len = tips.length
  let index = Math.floor(Math.random() * len)
  return tips[index]
}
