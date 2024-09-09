function pages(blockName) {
  
  const categories = document.querySelectorAll(".list")
  const categoryName = document.querySelector(`.${blockName} .title`).textContent
  const category = document.querySelectorAll(`.${blockName} .list-item`)
  const listItem = document.querySelectorAll(`.${blockName} .list-item`)

  const arrList = []
  Array.from(listItem).forEach(item => {arrList.push(item.textContent)})
  const longWord = arrList.reduce((a, b) => (b.length > a.length) ? b : a)

  console.log(
  `Number of Categories:${categories.length}
  ----
  Category: ${categoryName}
  Elements: ${category.length}
  LongestElement: ${longWord}
  ----`
  )
}

pages("books");
pages("music");
pages("countries");
pages("courses");
pages("movies");
