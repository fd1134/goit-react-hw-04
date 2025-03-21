import css from "./LoadMoreBtn.module.css";
const LoadMoreBtn = ({ onClik }) => {
  return (
    <>
      <div className={css.loadMoreContainer}>
        <button className={css.btn} onClick={onClik}>
          Load More
        </button>
      </div>
    </>
  );
};

export default LoadMoreBtn;
