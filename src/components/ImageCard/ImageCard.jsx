import css from "./ImageCard.module.css";

const ImageCard = ({ img, onClik }) => {
  return (
    <div className={css.imageCard}>
      <img
        src={img.urls.small}
        alt={img.alt_description}
        className={css.thumbnail}
        onClick={() => onClik(img)}
      />
    </div>
  );
};

export default ImageCard;
