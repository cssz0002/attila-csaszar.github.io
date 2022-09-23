let grade_cells = document.getElementsByClassName('grade')
console.log(grade_cells)
let osszeg = 0

for (let i = 0; i < 4; ++i) {
  if (grade_cells[i].innerHTML != '') {
    if (parseFloat(grade_cells[i].innerHTML >= 5.5)) {
      osszeg +=
        grade_cells[i].previousElementSibling.previousElementSibling.innerHTML
    }
  }
}

function megnez(hanyat, cells) {
    let ec = (cells.previousElementSibling.previousElementSibling.innerHTML);
    for (let i = 0; i < hanyat; ++i) {
    if (cells.innerHTML == '' || ) {
      osszeg += if(parseFloat(cells[i].innerHTML <= 5.5) {
        return 0;
      }
    }
  }
}

for (let i = 0; i < grade_cells.length; ++i) {
  if (i < 4) {
    osszeg += megnez(1, [grade_cells[i]])
    if (i == 5) {
      osszeg += megnez()
    }
  }
}

document.getElementsByClassName('progress_bar_fillout')[0],
  (style.width = (osszeg / 60) * 100 + '%')
