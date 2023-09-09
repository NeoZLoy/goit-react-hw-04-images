
import { GalleryItem } from "components/GalleryItem/GalleryItem"
import { StyledList,LoadMoreButton } from "./Gallery.styled"

export const Gallery = ({images, onLoadMoreClick, noImages, totalPages, page}) =>{
    return(
        <>
        {noImages 
        ? <p>We cant find images :c</p> 
        : <StyledList>
        {images.map(image => {
            return(
            <li key = {image.id} >
                <GalleryItem image = {image}/>
            </li>
            )
           
        })}
        </StyledList>}
         
        {(images.length > 0 && totalPages !== page ) && (
            <LoadMoreButton onClick={onLoadMoreClick}>Load More</LoadMoreButton>
        )}
        </>
)
}
