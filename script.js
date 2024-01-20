const mainTag = document.getElementsByClassName("main")[0];
const Tag = document.getElementsByClassName("front")[0];
const aboveText = document.getElementsByClassName("text")[0];
const imgsrc = document.getElementsByTagName("img")[0];
const belowText = document.getElementsByTagName("p")[0];
const left = document.getElementsByClassName("left")[0];
const right = document.getElementsByClassName("right")[0];

const frontcards = [
  {
    downtext: "Gorilla",
    img: "https://i.pinimg.com/564x/55/05/1f/55051f760b397d5fffc7fd636d8c4aff.jpg",
  },
  {
    downtext: "Rabbit",
    img: "https://media.istockphoto.com/id/649799438/photo/white-bunny-isolated-on-white.jpg?s=612x612&w=0&k=20&c=DfQa1fpCUVfjtEOq-4TGBKgDJvFrnRCXLELzDYHDSLI=",
  },
  {
    downtext: "Tiger",
    img: "https://classroomclipart.com/image/static7/preview2/photo-tiger-isolated-on-white-background-61254.jpg",
  },
  {
    downtext: "Parrot",
    img: "https://png.pngtree.com/png-clipart/20230504/original/pngtree-parrot-isolated-on-white-background-png-image_9140655.png",
  },
  {
    downtext: "Crocodile",
    img: "https://st5.depositphotos.com/1813140/65510/i/450/depositphotos_655104640-stock-photo-close-crocodile-action-show-mouth.jpg",
  },
];
const backcards = [
  {
    uptext: "Do You Know?",
    img: "https://i.pinimg.com/564x/83/37/6d/83376db258cd5d4b747355c6e8d883be.jpg",
    downtext: "Gorillas are genearlly calm and passive animals",
  },
  {
    uptext: "Do You Know?",
    img: "https://media.istockphoto.com/id/90946426/photo/white-rabbit-on-the-grass.jpg?s=612x612&w=0&k=20&c=e-1Ubl263OgSyH51PQ2qfm48KJeiIBwiOWhanw01vqc=",
    downtext: "Rabbits communicate through a complex system of body language",
  },
  {
    uptext: "Do You Know?",
    img: "https://images.pexels.com/photos/64152/tiger-cub-tiger-cub-big-cat-64152.jpeg?cs=srgb&dl=pexels-pixabay-64152.jpg&fm=jpg",
    downtext:
      "tiger are strong swimmers and can mimic the sounds of other animals",
  },
  {
    uptext: "Do You Know?",
    img: "https://zupreem.com/wp-content/uploads/elementor/thumbs/shutterstock_1637478913-scaled-plo4mwroarkyujpak5hvrd2t4n3xosaxrfgoexwpwg.jpg",
    downtext:
      "Parrots are not only skilled mimics with the ability to imitate human speech",
  },
  {
    uptext: "Do You Know?",
    img: "https://www.floridamuseum.ufl.edu/wp-content/uploads/sites/23/2017/08/sc-aquarium-nile-crocodile-edit1.jpg",
    downtext:
      "Crocodiles have a salt-excreting gland for survival in different waters",
  },
];

let frontClcik = true;

const back = (i) => {
  console.log("back");
  Tag.classList.remove("front");
  Tag.classList.add("back");

  imgsrc.classList.remove("frontimg");
  imgsrc.classList.add("backimg");

  belowText.classList.remove("frontText");
  belowText.classList.add("backText");

  aboveText.innerHTML = backcards[i].uptext;
  imgsrc.src = backcards[i].img;
  belowText.innerHTML = backcards[i].downtext;
  frontClcik = false;
};

const front = () => {
  console.log("front");
  Tag.classList.remove("back");
  Tag.classList.add("front");

  imgsrc.classList.remove("backimg");
  imgsrc.classList.add("frontimg");

  belowText.classList.remove("backText");
  belowText.classList.add("frontText");

  aboveText.innerHTML = "";
  imgsrc.src = frontcards[i].img;
  belowText.innerHTML = frontcards[i].downtext;
  frontClcik = true;
};

let i = 0;
if (i === 0) {
  mainTag.addEventListener("click", () => {
    if (frontClcik) {
      back(i);
    } else {
      front(i);
    }
  });
}

left.addEventListener("click", () => {
  if (i === 0) {
    i = frontcards.length - 1;
    front(i);
  } else {
    i -= 1;
    front(i);
  }
});

right.addEventListener("click", () => {
  if (i === frontcards.length - 1) {
    i = 0;
    front(i);
  } else {
    i += 1;
    front(i);
  }
});
