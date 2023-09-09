
import { GalleryItem } from "components/GalleryItem/GalleryItem"
import { StyledList,LoadMoreButton } from "./Gallery.styled"
import { StyledItem } from "components/GalleryItem/GalleryItem.syled"

export const Gallery = ({images, onLoadMoreClick, totalPages, page}) =>{
    return(
        <>
            <StyledList>
                {images.map(image => {
                return(
                    <StyledItem key = {image.id} >
                        <GalleryItem image = {image}/>
                    </StyledItem>
                )
            
                })}
            </StyledList>
         
        {(images.length > 0 && totalPages !== page ) && (
            <LoadMoreButton onClick={onLoadMoreClick}>Load More</LoadMoreButton>
        )}
        </>
)
}
