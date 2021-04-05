const gpuList = [
  {
    id: 1,
    title: "GTX 1050",
    category: "10-series",
    price: 109,
    img: "./images/item-1.jpg",
    desc: `Base Clock: 1354 MHz <br> Boost Clock: 1455 MHz <br> Memory: 2 GB DDR5`,
    link: "https://www.nvidia.com/en-in/geforce/products/10series/geforce-gtx-1050/"
  },
  {
    id: 2,
    title: "GTX 1050Ti",
    category: "10-series",
    price: 139,
    img: "./images/item-2.jpg",
    desc: `Base Clock: 1291 MHz <br> Boost Clock: 1392 MHz <br> Memory: 4 GB DDR5`,
    link: "https://www.nvidia.com/en-in/geforce/products/10series/geforce-gtx-1050/"
  },
  {
    id: 3,
    title: "GTX 1060",
    category: "10-series",
    price: 299,
    img: "./images/item-3.jpg",
    desc: `Base Clock: 1506 MHz <br> Boost Clock: 1709 MHz <br> Memory: 6 GB DDR5`,
    link: "https://www.nvidia.com/en-in/geforce/products/10series/geforce-gtx-1060/"
  },
  {
    id: 4,
    title: "GTX 1070",
    category: "10-series",
    price: 379,
    img: "./images/item-4.jpg",
    desc: `Base Clock: 1506 MHz <br> Boost Clock: 1683 MHz <br> Memory: 8 GB GDDR5`,
    link: "https://www.nvidia.com/en-in/geforce/products/10series/geforce-gtx-1070/"
  },
  {
    id: 5,
    title: "GTX 1070Ti",
    category: "10-series",
    price: 399,
    img: "./images/item-5.jpg",
    desc: `Base Clock: 1607 MHz <br> Boost Clock: 1683 MHz <br> Memory: 8 GB GDDR5`,
    link: "https://www.nvidia.com/en-in/geforce/products/10series/geforce-gtx-1070/"
  },
  {
    id: 6,
    title: "GTX 1080",
    category: "10-series",
    price: 599,
    img: "./images/item-6.jpg",
    desc: `Base Clock: 1607 MHz <br> Boost Clock: 1733 MHz <br> Memory: 8 GB GDDR5X`,
    link: "https://www.nvidia.com/en-sg/geforce/products/10series/geforce-gtx-1080/"
  },
  {
    id: 7,
    title: "GTX 1080Ti",
    category: "10-series",
    price: 699,
    img: "./images/item-7.jpg",
    desc: `Base Clock: 1481 MHz <br> Boost Clock: 1582 MHz <br> Memory: 11 GB GDDR5X`,
    link: "https://www.nvidia.com/en-sg/geforce/products/10series/geforce-gtx-1080-ti/"
  },
  {
    id: 8,
    title: "RTX 2060",
    category: "20-series",
    price: 349,
    img: "./images/item-8.jpg",
    desc: `Base Clock: 1365 MHz <br> Boost Clock: 1680 MHz <br> Memory: 6 GB GDDR6`,
    link: "https://www.nvidia.com/en-us/geforce/graphics-cards/rtx-2060/"
  },
  {
    id: 9,
    title: "RTX 2060 super",
    category: "20-series",
    price: 399,
    img: "./images/item-9.jpg",
    desc: `Base Clock: 1470 MHz <br> Boost Clock: 1650 MHz <br> Memory: 8 GB GDDR6`,
    link: "https://www.nvidia.com/en-us/geforce/graphics-cards/rtx-2060-super/"
  },
  {
    id: 10,
    title: "RTX 2070",
    category: "20-series",
    price: 499,
    img: "./images/item-10.jpg",
    desc: `Base Clock: 1410 MHz <br> Boost Clock: 1620 MHz <br> Memory: 8 GB GDDR6`,
    link: "https://www.nvidia.com/en-us/geforce/graphics-cards/rtx-2070/"
  },
  {
    id: 11,
    title: "RTX 2070 super",
    category: "20-series",
    price: 499,
    img: "./images/item-11.jpg",
    desc: `Base Clock: 1605 MHz <br> Boost Clock: 1770 MHz <br> Memory: 8 GB GDDR6`,
    link: "https://www.nvidia.com/en-us/geforce/graphics-cards/rtx-2070-super/"
  },
  {
    id: 12,
    title: "RTX 2080",
    category: "20-series",
    price: 699,
    img: "./images/item-12.jpg",
    desc: `Base Clock: 1515 MHz <br> Boost Clock: 1710 MHz <br> Memory: 8 GB GDDR6`,
    link: "https://www.nvidia.com/en-us/geforce/graphics-cards/rtx-2080/"
  },
  {
    id: 13,
    title: "RTX 2080 super",
    category: "20-series",
    price: 699,
    img: "./images/item-13.jpg",
    desc: `Base Clock: 1650 MHz <br> Boost Clock: 1815 MHz <br> Memory: 8 GB GDDR6`,
    link: "https://www.nvidia.com/en-us/geforce/graphics-cards/rtx-2080-super/"
  },
  {
    id: 14,
    title: "RTX 2080Ti",
    category: "20-series",
    price: 999,
    img: "./images/item-14.jpg",
    desc: `Base Clock: 1350 MHz <br> Boost Clock: 1545 MHz <br> Memory: 11 GB GDDR6`,
    link: "https://www.nvidia.com/en-us/geforce/graphics-cards/rtx-2080-ti/"
  },
  {
    id: 15,
    title: "RTX 3060",
    category: "30-series",
    price: 329,
    img: "./images/item-15.jpg",
    desc: `Base Clock: 1320 MHz <br> Boost Clock: 1777 MHz <br> Memory: 12 GB GDDR6`,
    link: "https://www.nvidia.com/en-us/geforce/graphics-cards/30-series/rtx-3060-3060ti/"
  },
  {
    id: 16,
    title: "RTX 3060Ti",
    category: "30-series",
    price: 399,
    img: "./images/item-16.jpg",
    desc: `Base Clock: 1410 MHz <br> Boost Clock: 1665 MHz <br> Memory: 8 GB GDDR6`,
    link: "https://www.nvidia.com/en-us/geforce/graphics-cards/30-series/rtx-3060-3060ti/"
  },
  {
    id: 17,
    title: "RTX 3070",
    category: "30-series",
    price: 499,
    img: "./images/item-17.jpg",
    desc: `Base Clock: 1500 MHz <br> Boost Clock: 1725 MHz <br> Memory: 8 GB GDDR6`,
    link: "https://www.nvidia.com/en-us/geforce/graphics-cards/30-series/rtx-3070/"
  },
  {
    id: 18,
    title: "RTX 3080",
    category: "30-series",
    price: 699,
    img: "./images/item-18.jpg",
    desc: `Base Clock: 1440 MHz <br> Boost Clock: 1710 MHz <br> Memory: 10 GB GDDR6X`,
    link: "https://www.nvidia.com/en-us/geforce/graphics-cards/30-series/rtx-3080/"
  },
  {
    id: 19,
    title: "RTX 3090",
    category: "30-series",
    price: 1499,
    img: "./images/item-19.jpg",
    desc: `Base Clock: 1395 MHz <br> Boost Clock: 1695 MHz <br> Memory: 24 GB GDDR6X`,
    link: "https://www.nvidia.com/en-us/geforce/graphics-cards/30-series/rtx-3090/"
  }
];

const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");

// load items when page is opened
window.addEventListener("DOMContentLoaded", () => {
  displayGPUListItems(gpuList);
  displayCategoryButtons();
});

// create function displayGPUListItems
var displayGPUListItems = (gpuItems) => {

  // map creates a new array
  let displayNewGPUList = gpuItems.map((item) => {
    return `<article class="gpu-list-item">
    <a href=${item.link} target="_blank"><img src=${item.img} class="photo" alt=${item.title}></a>
    <div class="item-info">
      <header>            
        <h4>${item.title}</h4>
        <h4 class="price">$${item.price}</h4>
      </header>
      <p class="item-text">${item.desc}</p>
    </div>
  </article>`;
  });

  // join all the generated HTML code in one array
  // "" used to avoid commas between generated article tag
  displayNewGPUList = displayNewGPUList.join("");

  // add the array to the HTML file in section-center class
  sectionCenter.innerHTML = displayNewGPUList;
}

var displayCategoryButtons = () => {

  // reduce function takes two inputs and it must return the first parameter
  // an initial value also needs to be supplied, which will be returned (["all"])
  // 'values' return the initial value (in this case ["all"])
  const categories = gpuList.reduce((values, item) => {
    if (!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  }, ["all"]);

  const categoryBtns = categories.map((category) => {
    return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`
  }).join("");
  container.innerHTML = categoryBtns;
  const filterBtns = document.querySelectorAll(".filter-btn");
  
  // filter items
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;
      const gpuCategory = gpuList.filter((gpuItem) => {
        if (gpuItem.category === category) {
          return gpuItem;
        }
      });
      // check if "all" button is pressed, pass the original array
      if (category === "all") {
        displayGPUListItems(gpuList);
      } else {
        // else pass the new filtered array
        displayGPUListItems(gpuCategory);
      }
    });
  });
}