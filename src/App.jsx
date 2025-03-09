
import { useState } from 'react';
import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
import ImageGallery from './components/ImageGallery/ImageGallery';
import { ColorRing } from 'react-loader-spinner'

function App() {
  const [images, setImages] = useState([]);
  const [search,setSearch]=useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const searchi=(query)=>{
    setSearch(query);
  }
  /* const handleSearch = async (topic) => {
    try {
			setImages([]);
			setError(false);
      setLoading(true);
      const data = await fetchArticlesWithTopic(topic);
      setImages(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  */

  return (
    <>
      <SearchBar onSearch={searchi} />
      {images.length > 0 && <ImageGallery items={images} />}
     {
      loading &&
      <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="color-ring-loading"
      wrapperStyle={{}}
      wrapperClass="color-ring-wrapper"
      colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />

     } 
      {/*
    {loading && <Loader />}
      {error && <Error />}
      {images.length > 0 && <ArticleList items={images} />}
    */}
    </>
  )
}

export default App
