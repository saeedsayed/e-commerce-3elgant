export function handleArticleBody(body: string) {
    const imgUrlReg = /\((https?:\/\/[^\)]+)\)/
    let br = body.split('\n')
    br = br.filter((item) => item !== '')
    let b = br.map((item) => {
        let element
        if (item.startsWith('#')) {
            // item = `<h1>${item.slice(2)}</h1>`
            element = document.createElement('h1')
            element.innerHTML = item.slice(2)
        } else if (item.startsWith('##')) {
            item = `<h2>${item.slice(3)}</h2>`
        } else if (item.startsWith('###')) {
            item = `<h3>${item.slice(4)}</h3>`
        } else if (item.startsWith('####')) {
            item = `<h4>${item.slice(5)}</h4>`
        } else if (item.startsWith('#####')) {
            item = `<h5>${item.slice(6)}</h5>`
        } else if (item.startsWith('######')) {
            item = `<h6>${item.slice(7)}</h6>`
        } else if (item.startsWith('!')) {
            item = `<img src="${item.match(imgUrlReg)}"/>`
            console.log('item: ', item)
        } else {
            item = `<p>${item}</p>`
        }
        return element
    }).join('')
    console.log('br: ', br)
    console.log('b: ', b)
    return b
}