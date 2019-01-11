import React, { Component } from 'react';
import { default as ReactLightbox } from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

interface LightboxProps {
  imagesArr: any;
  imageNumber: number;
  toggleLightbox: any;
}
interface LightboxState {
  imageNumber: number;
}

class Lightbox extends Component<LightboxProps, LightboxState> {
  constructor(props: any) {
    super(props);

    this.state = {
      imageNumber: this.props.imageNumber,
    };
  }

  render() {
    const { imagesArr, toggleLightbox } = this.props;
    const { imageNumber } = this.state;

    return (
      <ReactLightbox
        mainSrc={imagesArr[imageNumber]}
        nextSrc={imagesArr[(imageNumber + 1) % imagesArr.length]}
        prevSrc={
          imagesArr[(imageNumber + imagesArr.length - 1) % imagesArr.length]
        }
        onCloseRequest={toggleLightbox}
        onMovePrevRequest={() =>
          this.setState({
            imageNumber:
              (imageNumber + imagesArr.length - 1) % imagesArr.length,
          })
        }
        onMoveNextRequest={() =>
          this.setState({
            imageNumber: (imageNumber + 1) % imagesArr.length,
          })
        }
        reactModalStyle={{ overlay: { zIndex: 4000 } }}
        enableZoom={false}
      />
    );
  }
}

export default Lightbox;
