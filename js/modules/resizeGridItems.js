function resizeGridItems() {
  const gridCells = document.querySelectorAll('.feed > div')
  gridCells.forEach(item => {
    const grid = document.querySelector(".feed");
    const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('gap'));
    const rowSpan = Math.ceil((item.querySelector('.feed--image').getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
    console.log(rowSpan)
    item.style.gridRowEnd = `span ${rowSpan}`;
  })
}

export { resizeGridItems }