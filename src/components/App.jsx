import { useState, useEffect } from "react";
import { Gallery } from "./Gallery/Gallery";
import { SearchBar } from "./SearchBar/SearchBar";
import { Loader } from "./Wrapper.styled";
import toast, { Toaster } from 'react-hot-toast';
import getImages from "api";



export const App = () => {
  const [images, setImages] = useState([])
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(0)
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);

  // get images from server
  useEffect(() => {
    if(query === ''){
      return
    }
    async function fetchImages (){
      try {
        setIsLoading(true)
        const data = await getImages(query, page);
        setTotalPages(Math.ceil(data.total / 12));
        if(data.hits.length === 0){
          toast.error("We cant find images on Your query", {duration: 1500,})
        }
        if(page === 1){
          setImages(data.hits)
        }
        if(page > 1){
          setImages(prevState => [...prevState, ...data.hits])
        }
      } catch (error) {
        toast.error(error)
      } finally{
        setIsLoading(false)
      }
    }
    
    fetchImages()
  }, [page, query,])


  const changeQuery = (newQuery) => {
    setQuery(`${Date.now()}/${newQuery}`);
    setImages([]);
    setPage(1);
  }

  const loadMore = () => {
    setPage(prevState => prevState + 1)
  }

  return( 
    <main>
      <section>
        <div>
          <SearchBar onQueryChange = {changeQuery}/>
        </div>
        <div>   
          {isLoading && 
            <Loader  height="100" 
            width="100" wrapperStyle={{justifyContent: "center", alignItems: "center"}}/>
            }    
          {images.length > 0 && 
          <Gallery images = {images} onLoadMoreClick = {loadMore} totalPages = {totalPages} page = {page}/>}
          
          <Toaster/>
        </div>
      </section>
    </main>);
}