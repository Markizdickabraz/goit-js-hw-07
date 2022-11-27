import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

// формуємо галерею

const gallery = document.querySelector('.gallery');
// console.log(gallery);

const makeGalleryItems = ({preview, original, description}) => {
    return `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `;
};

// додаю галерею в DOM

const galleryList = galleryItems.map(makeGalleryItems).join(' ');
// console.log(galleryList);
gallery.innerHTML = galleryList;



gallery.addEventListener('click', selectImg );

function selectImg (event){
  event.preventDefault();
  // console.dir(event.target);
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const galleryImg = document.querySelectorAll('.gallery__image');
    
  galleryImg.forEach(img => {img.src = img.dataset.source});

makeInstance()

};
function makeInstance(){
  const instance = basicLightbox.create(`
  <img src="${event.target.src}" width="800" height="600">  
  `)
  
  instance.show()
  
  document.addEventListener("keydown", event => {
   
  
    if(event.key !== 'Escape'){ 
      return
    }
      instance.close();  
  });
};


