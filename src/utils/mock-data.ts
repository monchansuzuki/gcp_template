export interface Get {
  author: string;
  title: string;
  imgSrc: string;
  text: string;
  src: string;
}

export const getImages = (): Get[] => {
  return [
    {
      author: "unitednations",
      title: "corona Is REEL??",
      imgSrc: "https://media.npr.org/assets/img/2020/03/30/coronavirus-tokyo-olympics_wide-55c44dff95b341fdc97b5b042e926734dd336359-s800-c85.jpg",
      text: "test text",
      src: "insta"
    },
    {
      author: "degimalus_078",
      title: "corona is horrible",
      imgSrc: "https://photos.lci.fr/images/1280/720/carte-coronavirus-france-maj-17-mars-2020-3b809b-0@1x.jpeg",
      text: "this is horible",
      src: "insta"
    },
    {
      author: "degimalus_078",
      title: "corona is horrible",
      imgSrc: "https://i.insider.com/5e5e79c2a9f40c0241456b16?width=1100&format=jpeg&auto=webp",
      text: "this is horible",
      src: "insta"
    },
    {
      author: "degimalus_078",
      title: "corona is hosdfsadfrrible",
      imgSrc: "https://calmatters.org/wp-content/uploads/sites/2/2020/02/Coronavirus_illustration.jpg",
      text: "this is horible",
      src: "insta"
    },
  ]
};
