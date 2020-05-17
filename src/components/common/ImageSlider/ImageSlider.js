import React, { useState } from "react";
import sliderData from "../../../../src/sliderImages";
const ImageSlider = () => {
  const [photos, setPhotos] = useState(sliderData);
  //console.log(photos);
  const [slideCount, setSlideCount] = useState(0);
  function goToPrevSlide() {
    setSlideCount(slideCount - 1);
  }
  function goToNextSlide() {
    //console.log('called');
    setSlideCount(slideCount + 1);
  }
  return (
    <>
      <div className='carousel slide'>
        <div className='carousel-inner'>
          {photos.map((option, index) => {
            return (
              <>
                <div>
                  {photos.indexOf(option) === slideCount ? (
                    <div>
                      <img src={option.imageSrc} alt={index} />
                    </div>
                  ) : null}
                </div>
              </>
            );
          })}
        </div>
        {slideCount !== 0 ? (
          <a className='carousel-control-prev' onClick={goToPrevSlide}>
            <span
              className='carousel-control-prev-icon'
              aria-hidden='true'
            ></span>
          </a>
        ) : null}
        {slideCount !== photos.length - 1 ? (
          <a className='carousel-control-next' onClick={goToNextSlide}>
            <span
              className='carousel-control-next-icon'
              aria-hidden='true'
            ></span>
          </a>
        ) : null}
      </div>
    </>
  );
};

export default ImageSlider;
