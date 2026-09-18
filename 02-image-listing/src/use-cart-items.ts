import type { PictureInfo } from "./model";
import { allPictures } from "./model";
import { useCart } from "./cart-context";

// Resuelve los IDs del carrito a sus PictureInfo. Antes estaba duplicado
// en cart.tsx y checkout.tsx; ahora vive en un solo sitio.
export const useCartItems = (): PictureInfo[] => {
  const { cartIds } = useCart();
  return cartIds
    .map((id) => allPictures.find((picture) => picture.id === id))
    .filter((picture): picture is PictureInfo => Boolean(picture));
};