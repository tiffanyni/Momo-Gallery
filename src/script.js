document.addEventListener("DOMContentLoaded", () => {
  const picsArray = [
    [
      ["./pictures/Momo pose.JPG", "Momo poses for the camera"],
      ["./pictures/Side eye.PNG", "Quirky Momo"],
      ["./pictures/Big yawn.JPG", "Big yawn"],
      ["./pictures/Doll.JPG", "Doll face"],
    ],
    [
      ["./pictures/Momo stare.PNG", "Momo stares"],
      ["./pictures/Scream.JPG", "Momo Screams"],
      ["./pictures/Shy.PNG", "Shy Momo"],
      ["./pictures/Scratching tree.PNG", "Momo scratching tree"],
    ],
    [
      ["./pictures/With nature.PNG", "Lion king Momo"],
      ["./pictures/Hiding.JPG", "Momo camouflaging (failed)"],
      ["./pictures/Elegant.PNG", "Elegant Momo"],
      ["./pictures/Rolls on floor.JPG", "Momo rolling around"],
    ],
    [
      ["./pictures/FlowerBoy.png", "Flower Boy Momo"],
      ["./pictures/MomoBag.png", "Momo's Bag"],
      ["./pictures/MomoChinRub.png", "Momo Enjoying His Chin Rub"],
      ["./pictures/MomoScratchingBag.png", "Momo Destroying My Bag"],
    ],
  ];

  const rowArray = [
    "imageContainerRow1",
    "imageContainerRow2",
    "imageContainerRow3",
    "imageContainerRow4",
  ];

  picsArray.forEach((row, idx) => {
    const imageContainer = document.getElementById(rowArray[idx]);
    row.forEach(([src, alt], imgIdx) => {
      const column = document.createElement("div");
      column.classList.add("column");

      const overlayDiv = document.createElement("div");
      overlayDiv.classList.add("overlay");

      const img = document.createElement("img");
      img.src = src;
      img.alt = alt;
      img.onclick = function () {
        expandImage(this, idx, imgIdx);
      };

      overlayDiv.innerHTML = img.alt;
      column.appendChild(img);
      column.appendChild(overlayDiv);
      imageContainer.appendChild(column);
    });
  });
  window.picsArray = picsArray;

  document.querySelector(".closebtn").addEventListener("click", () => {
    document.querySelector(".imageContainer").classList.remove("blurred");
    document.querySelector(".profile").classList.remove("blurred");
    document.body.classList.remove("no-scroll");
  });
});

let currentRowIndex = 0;
let currentImgIndex = 0;

function expandImage(imgs, rowIndex, imgIndex) {
  const expandImg = document.getElementById("expandedImg");
  const imageContainer = document.querySelector(".imageContainer");
  const profileContainer = document.querySelector(".profile");
  expandImg.src = imgs.src;
  expandImg.alt = imgs.alt;

  const expandedImgContainer = expandedImg.parentElement;
  expandedImgContainer.style.display = "block";

  imageContainer.classList.add("blurred");
  profileContainer.classList.add("blurred");
  document.body.classList.add("no-scroll");

  //update the current image indices
  currentRowIndex = rowIndex;
  currentImgIndex = imgIndex;
  console.log(rowIndex, imgIndex);
}

function nextImage() {
  if (currentImgIndex < window.picsArray[currentRowIndex].length - 1) {
    currentImgIndex++;
  } else if (currentRowIndex < window.picsArray.length - 1) {
    currentRowIndex++;
    currentImgIndex = 0;
  } else {
    currentRowIndex = 0;
    currentImgIndex = 0;
  }

  //display the new image
  const [src, alt] = window.picsArray[currentRowIndex][currentImgIndex];
  expandImage({ src, alt }, currentRowIndex, currentImgIndex);
}

function prevImage() {
  if (currentImgIndex > 0) {
    currentImgIndex--;
  } else if (currentRowIndex > 0) {
    currentRowIndex--;
    currentImgIndex = window.picsArray[currentRowIndex].length - 1;
  } else {
    currentRowIndex = window.picsArray.length - 1;
    currentImgIndex = window.picsArray[currentRowIndex].length - 1;
  }

  //display the new image
  const [src, alt] = window.picsArray[currentRowIndex][currentImgIndex];
  expandImage({ src, alt }, currentRowIndex, currentImgIndex);
}
