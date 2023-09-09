import { Component } from "react";
import { Gallery } from "./Gallery/Gallery";
import { SearchBar } from "./SearchBar/SearchBar";
import axios from "axios";
import { Loader } from "./Wrapper.styled";

const KEY = "38314645-d57637d53f9e89632580f05c8"
axios.defaults.baseURL = `https://pixabay.com/api/`;

export class App extends Component{
  
  state = {
    images: [],
    query: ' ',
    page: 0,
    isLoading: false,
    noImages: false,
    totalPages: 1,
    perPage: 12,
  }

  onQueryChange = newQuery => 
    this.setState({query: `${Date.now()}/${newQuery}`, images: [], page: 1});

    async getImages(){
      const data = await axios.get(`?key=${KEY}&q=${this.state.query.split('/')[1]}&page=${this.state.page}&per_page=12&image_type=photo&orientation=horizontal`)
      return data;
    }

  async componentDidUpdate(prevProps, prevState){

      if(prevState.query !== this.state.query || prevState.page !== this.state.page){
      try {
        this.setState({isLoading: true})
        const res = await this.getImages();
        
        const total = Math.ceil(res.data.total / 12);
        if(res.data.hits.length === 0){
          this.setState({isLoading: false, noImages: true})
        } else{
          this.setState({images: this.state.page > 1 ? [...prevState.images, ...res.data.hits] : res.data.hits, isLoading: false, noImages: false, totalPages: total})
          if(res.page === this.state.totalPages){
            console.log("that's all")
          }
        }
      } catch (error) {
        console.log(error)
      }
      
      }
    }

   onLoadMoreClick = async () => {
    this.setState(prevState => ({page: prevState.page +1}))
  }

  render(){
    return( 
    <main>
      <section>
        <div>
          <SearchBar onQueryChange = {this.onQueryChange}/>
        </div>
        <div>
          {this.state.isLoading 
          ? <Loader  height="100" 
          width="100" wrapperStyle={{justifyContent: "center", alignItems: "center"}}/> 
          : <Gallery images = {this.state.images} onLoadMoreClick = {this.onLoadMoreClick} noImages = {this.state.noImages} totalPages = {this.state.totalPages} page = {this.state.page}/>}
        </div>
      </section>
    </main>);
   
  }
  
};
