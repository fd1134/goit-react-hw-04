import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
const ImageGallery = ({ items, onClik }) => {
  return (
    <>
      <ul className={css.ImageGalleryContainer}>
        {items.map((img) => {
          return (
            <li key={img.id}>
              <ImageCard img={img} onClik={onClik} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ImageGallery;
