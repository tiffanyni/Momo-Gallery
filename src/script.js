document.addEventListener("DOMContentLoaded", () => {
  const picsArray = [
    [
      ["../pictures/Momo pose.JPG", "Momo pose"],
      ["../pictures/Side eye.PNG", "Side eye"],
      ["../pictures/Big yawn.JPG", "Big yawn"],
      ["../pictures/Doll.JPG", "Doll face"],
    ],
    [
      ["../pictures/Raise paw.jpg", "Raise paw"],
      ["../pictures/Scream.JPG", "Momo Scream"],
      ["../pictures/Shy.PNG", "Momo shy"],
      ["../pictures/Scratching tree.PNG", "Momo scratching tree"],
    ],
    [
      ["../pictures/With nature.PNG", "Momo with nature"],
      ["../pictures/Hiding.JPG", "Momo hiding"],
      ["../pictures/Elegant.PNG", "Elegant Momo"],
      ["../pictures/Rolls on floor.JPG", "Momo rolling on floor"],
    ],
  ];

  const rowArray = [
    "imageContainerRow1",
    "imageContainerRow2",
    "imageContainerRow3",
  ];

  picsArray.forEach((row, idx) => {
    const imageContainer = document.getElementById(rowArray[idx]);
    row.forEach(([src, alt]) => {
      const column = document.createElement("div");
      column.classList.add("column");

      const img = document.createElement("img");
      img.src = src;
      img.alt = alt;
      img.onclick = function () {
        expandImage(this);
      };

      column.appendChild(img);
      imageContainer.appendChild(column);
    });
  });
});

function expandImage(imgs) {
  // Get the expanded image and text
  var expandImg = document.getElementById("expandedImg");

  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;

  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
}
