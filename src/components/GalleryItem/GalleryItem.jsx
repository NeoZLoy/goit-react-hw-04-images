
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { disableBodyScroll, enableBodyScroll, } from 'body-scroll-lock';
import { StyledImage, StyledPreview } from './GalleryItem.syled';

Modal.setAppElement('#root');

let targetElement = null;

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '0',
      height: '90vh',
      position: 'fixed',
    },
    overlay: {
        backgroundColor: 'rgba(0,0,0, 0.3)',
        position: 'fixed',
    }
  };

export const GalleryItem = ({image}) => {

    const [isModalOpen, setIsModalOpen] = useState(false)   
    
    const openModal = () => {
        disableBodyScroll(targetElement)
        setIsModalOpen(true);
    }

    const closeModal = () => {
        enableBodyScroll(targetElement);
        setIsModalOpen(false);
    }

    useEffect(() => {
        targetElement = document.querySelector('#root');
    })

    return(
        <>
            <StyledPreview src={image.webformatURL} alt={image.id} onClick={openModal} />

            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <StyledImage src={image.largeImageURL} alt={image.id} />
            </Modal>
        </>
       
    )
}