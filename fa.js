const tds = document.querySelectorAll("td")
tds.forEach((item) => {
  /* 或者item.onclick = function(){} */
  item.addEventListener("click", function () {
    // console.log(item.style.backgroundColor)
    item.style.backgroundColor = "white"
  })
})
