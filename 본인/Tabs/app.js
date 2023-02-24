const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");



btns.forEach((btn)=> {
  btn.addEventListener('click', (e) => {
    btns.forEach((c)=> {
      c.classList.remove('active')
    })
    btn.classList.add('active')

    articles.forEach((a)=> {
      if(btn.id === a.id) {
        a.classList.add('active')
      } else (
        a.classList.remove('active')
      )
    })
  })
})
