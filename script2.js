
const imagGallery = [
  {
    src: "https://burst.shopifycdn.com/photos/person-in-athletic-wear-with-a-mug-with-both-hands.jpg?width=373&format=pjpg&exif=0&iptc=0",
    alt: "руки и кофе"
  },
  {
    src: "https://burst.shopifycdn.com/photos/laptop-from-above.jpg?width=373&format=pjpg&exif=0&iptc=0",
    alt: "ноутбук"
  },
  {
    src: "https://burst.shopifycdn.com/photos/graphic-designer-at-work.jpg?width=373&format=pjpg&exif=0&iptc=0",
    alt: "графический дизайн"
  },
  {
    src: "https://burst.shopifycdn.com/photos/lenses-lattes.jpg?width=373&format=pjpg&exif=0&iptc=0",
    alt: "фотоапарат и кофе"
  },
  {
    src: "https://burst.shopifycdn.com/photos/iced-latte-at-coffee-shop-window.jpg?width=373&format=pjpg&exif=0&iptc=0",
    alt: "холодное кофе"
  },
  {
    src: "https://burst.shopifycdn.com/photos/skincare-treatment-and-a-nice-coffee.jpg?width=373&format=pjpg&exif=0&iptc=0",
    alt: "утренний кофе"
  },
  {
    src: "https://burst.shopifycdn.com/photos/macbook-air-on-desk.jpg?width=373&format=pjpg&exif=0&iptc=0",
    alt: "удаленная работа "
  },
  {
    src: "https://burst.shopifycdn.com/photos/croissant-coffee.jpg?width=373&format=pjpg&exif=0&iptc=0",
    alt: "кругасан"
  },
  {
    src: "https://burst.shopifycdn.com/photos/coffee-with-milk.jpg?width=373&format=pjpg&exif=0&iptc=0",
    alt: "кофе"
  },
  {
    src: "https://burst.shopifycdn.com/photos/hand-full-of-roasted-coffee.jpg?width=373&format=pjpg&exif=0&iptc=0",
    alt: "зерна кофе"
  },
  {
    src: "https://burst.shopifycdn.com/photos/coffee-from-above.jpg?width=373&format=pjpg&exif=0&iptc=0",
    alt: "приготовление кофе"
  },
  {
    src: "https://burst.shopifycdn.com/photos/metal-coffee-tamp.jpg?width=373&format=pjpg&exif=0&iptc=0",
    alt: "кофе тамп"
  },
  {
    src: "https://burst.shopifycdn.com/photos/side-hustler-coffee-cup.jpg?width=373&format=pjpg&exif=0&iptc=0",
    alt: alt="кофе с собой"
  },
  {
    src: "https://burst.shopifycdn.com/photos/purchased-favorite-coffee.jpg?width=373&format=pjpg&exif=0&iptc=0",
    alt: alt="женщина и кофе"
  },
  {
    src: "https://burst.shopifycdn.com/photos/kettle-and-cup-in-front-of-tent.jpg?width=373&format=pjpg&exif=0&iptc=0",
    alt: "согревающий кофе"
  },
  {
    src: "https://burst.shopifycdn.com/photos/pouring-an-espresso.jpg?width=373&format=pjpg&exif=0&iptc=0",
    alt: "еспрессо"
  },
];


const div = document.createElement('div');
const wrap = document.querySelector("a");
wrap.after(div);
div.classList.add("wrapper");

const newGallery = imagGallery.map(({src, alt}) => {
  const img = document.createElement('img');
  const gallery = img
  img.setAttribute('src', src)
  img.setAttribute('alt', alt)
  img.classList.add('image')
  return gallery
})


div.append(...newGallery)


function random() {
  const gall = newGallery.sort(() => Math.random() - 0.5);
  div.append(...gall)
}

div.addEventListener('click', random)


