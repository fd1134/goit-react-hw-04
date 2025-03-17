import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { fetchImages } from "./images-api";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ImageModal from "./components/ImageModal/ImageModal";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

function App() {
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [img, setImg] = useState("");
  const [page, setPage] = useState(1);
  const handleSsearch = async (query) => {
    try {
      setImages([]);
      setLoading(true);
      setSearch(query);
      const data = await fetchImages(query);
      setImages(data);
    } catch (error) {
      setError(true);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleOnclik = (img) => {
    setIsOpenModal(true);
    setImg(img);
  };

  const handleModalClik = () => {
    setIsOpenModal(false);
  };
  const handleMore = async () => {
    try {
      setLoading(true);
      setPage((prev) => prev + 1);
      const data = await fetchImages(search, page);
      setImages((prev) => [...prev, ...data]);
    } catch (error) {
      setError(true);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <SearchBar onSearch={handleSsearch} />
      {images.length > 0 && (
        <ImageGallery
          items={images}
          onClik={handleOnclik}
          isOpenModal={isOpenModal}
        />
      )}
      {loading && <Loader />}
      {error && <Toaster position="top-right" reverseOrder={false} />}
      {images.length > 0 && <LoadMoreBtn onClik={handleMore} />}
      {isOpenModal && <ImageModal img={img} onClik={handleModalClik} />}
      {/*
   
      {error && <Error  message={error}/>}
     
    */}
    </>
  );
}

export default App;
