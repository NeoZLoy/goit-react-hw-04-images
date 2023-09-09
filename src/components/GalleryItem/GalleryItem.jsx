
import React, { Component } from 'react';
import Modal from 'react-modal';
import { disableBodyScroll, enableBodyScroll, } from 'body-scroll-lock';
import { StyledImage, StyledPreview } from './GalleryItem.syled';

Modal.setAppElement('#root');

export class GalleryItem extends Component{

    state= {
        isModalOpen: false,
    }

    targetElement = null;

    componentDidMount() {
        this.targetElement = document.querySelector('#root');
      }

    customStyles = {
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
    
    openModal = () => {
        disableBodyScroll(this.targetElement);
        this.setState({isModalOpen:true})};
    
    closeModal = () => 
    {
        enableBodyScroll(this.targetElement);
        this.setState({isModalOpen:false});
    }
    
    

    render(){
        const {
            image: {id, largeImageURL, webformatURL}
        } = this.props;

        return(
            <>
            <StyledPreview src={webformatURL} alt={id} onClick={this.openModal} />
            <Modal
            isOpen={this.state.isModalOpen}
            onRequestClose={this.closeModal}
            style={this.customStyles}
            >
                <StyledImage src={largeImageURL} alt={id} />
                
            </Modal>
            </>
           
        )
        
}
}
