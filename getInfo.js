//Info user (HEADER)
async function getUser() {
  const users = await fetch("https://randomuser.me/api/?results=1");
  const data = await users.json();
  const user = data.results[0];
  console.log(user);
  return {
    name: `${user.name.first} ${user.name.last}`,
    location: `${user.location.city}, ${user.location.country}`,
    picture: user.picture.thumbnail,
  };
}

const header = document.querySelector(".header");
const printUser = async () => {
  const user = await getUser();
  const headerUserInfo = `
    <div class="user-avatar--container">
      <img src="${user.picture}" alt="avatar" class="user-avatar">
    </div>
    <div class="header__info">
      <h3 class="header__info--name">${user.name}</h3>
      <h4 class="header__info--direction">${user.location}</h4>
    </div>
  `;
  header.innerHTML = headerUserInfo;
};
printUser();

//swiper initialization.
const swiper = new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

//Bring photos
const getPhotos = async () => {
  const photosURL = "https://picsum.photos/v2/list?page=2&limit=4";
  try {
    const response = await fetch(photosURL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("-----Error in getData-----", error);
  }
};

const swiperWrapper = document.querySelector(".swiper-wrapper");
const printPhotos = async () => {
  const photos = await getPhotos();
  const slides = photos
    .map((photo, i) => {
      return `
          <div class="swiper-slide">
            <img src=${photo.download_url} alt="photo number ${i}">
          </div>
        `;
    })
    .join("");
  swiperWrapper.innerHTML = slides;
};
printPhotos();


