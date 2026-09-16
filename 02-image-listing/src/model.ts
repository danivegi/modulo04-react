export interface PictureInfo {
  id: string;
  picUrl: string;
  title: string;
}

export const kitties: PictureInfo[] = [
  { id: "cat-a", title: "Kitty A", picUrl: "imagenes/cat1.webp" },
  { id: "cat-b", title: "Kitty B", picUrl: "imagenes/cat2.webp" },
  { id: "cat-c", title: "Kitty C", picUrl: "imagenes/cat3.webp" },
  { id: "cat-d", title: "Kitty D", picUrl: "imagenes/cat4.webp" },
];

export const puppies: PictureInfo[] = [
  { id: "dog-a", title: "Puppy A", picUrl: "imagenes/dog1.webp" },
  { id: "dog-b", title: "Puppy B", picUrl: "imagenes/dog2.webp" },
  { id: "dog-c", title: "Puppy C", picUrl: "imagenes/dog3.jpg" },
  { id: "dog-d", title: "Puppy D", picUrl: "imagenes/dog4.jpg" },
];

export const allPictures: PictureInfo[] = [...kitties, ...puppies];