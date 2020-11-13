const re = new RegExp('What is your favorite food', 'gi')
const matches = document.documentElement.innerHTML.match(re)

chrome.runtime.onMessage.addListener(function (request) {
    alert(request)
    console.log('a')
    //const a = document.querySelector("#hplogo").getAttribute('alt')
    const div = document.querySelector(".dati1w0a.qt6c0cv9.hv4rvrfc.cxgpxx05")
    const qCount = div.firstChild.childElementCount
    const answerArray = []
    for (let i = 0; i < qCount; i++) {
    let answer = div.firstChild.childNodes[i].childNodes[1].innerText
        answerArray.push(answer)
    }
    //console.log(a)
    //const b = document.querySelector
    //console.log(matches[0].nextElementSibling)
    console.log(answerArray)
})

