import React, { useEffect } from 'react';
import '../../style/ListPage/listpage.css';

export default function List() {
  const nextButton = `❭`;
  const prevButton = `❬`;

  useEffect(() => {
    if (!loading) {
      let slides = document.querySelectorAll(".slide");
    let slideCopies = document.querySelectorAll(".slide-copy");
    let originalSlides = document.querySelectorAll(".original-slide");
      let lastSlide = slides[slides.length - 1];

      slides.forEach(slide => {
        let slideDataID = slide.getAttribute('data-id');
        let slidePos = slideDataID - Math.floor(slides.length / 2);

        slide.style.transform = `translateX(${slidePos * 100}%)`;
        slide.style.zIndex = 2;
      });

    if(!originalSlides[0]) {
      slides.forEach(slide => {
        let slideDataID = slide.getAttribute('data-id');
        let originalSlide = slide.cloneNode(true);
        originalSlide.setAttribute("data-id", slideDataID);
        let slidePos = originalSlide.getAttribute("data-id") - Math.floor(slides.length / 2);
        originalSlide.className = "original-slide";
        lastSlide.after(originalSlide);
  
        originalSlide.style.transform = `translateX(${slidePos * 100}%)`;
        originalSlide.style.zIndex = 0;
      });
    }
    
    if(!slideCopies[0]) {
      slides.forEach(slide => {
        let slideDataID = slide.getAttribute('data-id');
        let slidePos = slideDataID - Math.floor(slides.length / 2);
        let slideCopy = slide.cloneNode(true);
        slideCopy.className = "slide-copy";
        lastSlide.after(slideCopy);
              
        slideCopy.style.transform = `translateX(${((slidePos + 20) + slides.length) * 100}%)`;
        slideCopy.setAttribute("data-id", (parseInt(slideDataID) + slides.length) + 20);
      });
    }

    let animationSlides = document.querySelectorAll(".new-slide");
    let k = 0;

      if(!animationSlides[0]) {
        for(let i = 20; i > 0; i--) {
          if(k < slides.length) {
            let newSlide = slides[k].cloneNode(true);

          lastSlide.after(newSlide);
          newSlide.setAttribute("data-id", ((slides.length - 1) + i));
          newSlide.className = "new-slide";
          newSlide.style.transform = `translateX(${((Math.floor(slides.length / 2) + i) * 100)}%)`;
          k++;
        } else {
          k = 0;
          let newSlide = slides[k].cloneNode(true);

          lastSlide.after(newSlide);
          newSlide.setAttribute("data-id", ((slides.length - 1) + i));
          newSlide.className = "new-slide";
          newSlide.style.transform = `translateX(${((Math.floor(slides.length / 2) + i) * 100)}%)`;
          k++;
        }
      }


    }
  });

  return (
    <div className='list-page-container'>
      <header>
        <h1>
          <strong>List</strong>
        </h1>
        <h5>by username</h5>
      </header>
      <div className="slider">
        <div className="slider-bg"></div>

        <div className="slide" data-id={0}>
          <div className="slide-content">
            <h1>slide 0</h1>
          </div>
        </div>

          {/* <div className="slide" data-id={1}>
            <div className="slide-content">
              <h1>slide 1</h1>
            </div>
          </div>

        <div className="slide" data-id={2}>
          <div className="slide-content">
            <h1>slide 2</h1>
          </div>
        </div>

        <div className="slide" data-id={3}>
          <div className="slide-content">
            <h1>slide 3</h1>
          </div>
        </div>

        <div className="slide" data-id={4}>
          <div className="slide-content">
            <h1>slide 4</h1>
          </div>
        </div>

        <div className="slide" data-id={5}>
          <div className="slide-content">
            <h1>slide 5</h1>
          </div>
        </div>

        <div className="slide" data-id={6}>
          <div className="slide-content">
            <h1>slide 6</h1>
          </div>
        </div>

        <button className="next-btn slider-btn"
          onClick={() => {
            let slides = document.querySelectorAll(".slide");
            
            slides.forEach(slide => {
              let slideDataID = slide.getAttribute('data-id');
              let slidePos = slideDataID - Math.floor(slides.length / 2);
              
              slidePos--;
              if(slidePos < (Math.floor(slides.length / 2) * -1)) {
                slide.style.transform = `translateX(${(slides.length - ((Math.floor(slides.length / 2)) + 1)) * 100}%)`;
                slide.setAttribute("data-id", (slides.length - 1));
                slide.style.zIndex = 0;
                console.log(slidePos);
              } else {
                slide.style.transform = `translateX(${slidePos * 100}%)`;
                slide.setAttribute("data-id", slidePos + (Math.floor(slides.length / 2)));
                slide.style.zIndex = 2;
                console.log(slidePos);
              }
            });
          }}>
          <div className="arrow">{nextButton}</div>
        </button>
        <button className="prev-btn slider-btn"
          onClick={() => {
            let slides = document.querySelectorAll(".slide");
            
            slides.forEach(slide => {
              let slideDataID = slide.getAttribute('data-id');
              let slidePos = slideDataID - Math.floor(slides.length / 2);
              
              slidePos++;
              if(slidePos > (Math.floor(slides.length / 2))) {
                slide.style.transform = `translateX(${((slidePos - slides.length) * 100)}%)`;
                slide.setAttribute("data-id", 0);
                slide.style.zIndex = 0;
                console.log(slidePos);
              } else {
                slide.style.transform = `translateX(${slidePos * 100}%)`;
                slide.setAttribute("data-id", (slidePos + 3));
                slide.style.zIndex = 2;
                console.log(slidePos);
              }
            });
          }}>
          <div className="arrow">{prevButton}</div>
        </button>
      </div>
      <button className="random-button"
        onClick={() => {
          let animationSlides = document.querySelectorAll(".new-slide");
          let oldSlides = document.querySelectorAll(".old-slide");
          let slides = document.querySelectorAll(".slide");
          let originalSlides = document.querySelectorAll(".original-slide");
          let randomSlide = Math.floor(Math.random() * slides.length);
          let slideOffset = randomSlide - (Math.floor(slides.length / 2));
          let lastSlide = slides[slides.length - 1];
          let k = 0;
          
          console.log(randomSlide);
          console.log(slideOffset);
          if(oldSlides[0]) {
            setTimeout(() => {
              oldSlides.forEach(slide => {
                slide.remove();
              })
            }, 1000);
          }

          slides.forEach(slide => {
            let slideDataID = slide.getAttribute('data-id');
            let slidePos = slideDataID - Math.floor(slides.length / 2);

            slide.style.transform = `translateX(${((slidePos - slides.length) - 20) * 100}%)`;
            slide.setAttribute("data-id", ((slidePos - slides.length) - 20));
            slide.className = "old-slide";
            slide.style.zIndex = 2;
          })

            let x = animationSlides.length - 1;

          animationSlides.forEach(slide => {
            let slideDataID = slide.getAttribute('data-id');
            slide.style.transform = `translateX(${(((slideDataID - slides.length) - Math.floor(slides.length / 2)) - 20) * 100}%)`;
            slide.className = "old-slide";
            slide.setAttribute("data-id", ((Math.floor(slides.length / -2)) - x));
            x--;
          })

          let slideCopies = document.querySelectorAll(".slide-copy");

          slideCopies.forEach((slide, index) => {
            let slideDataID = slide.getAttribute('data-id') - 20 - slides.length;


            if(slideDataID > (Math.floor(slides.length / 2)) + randomSlide) {
              slide.setAttribute("data-id", (parseInt(slideDataID) - slides.length) - slideOffset);
              let newDataID = slide.getAttribute("data-id");

              slide.style.transform = `translateX(${((newDataID - Math.floor(slides.length / 2)) * 100)}%)`;
            } else if(slideDataID < randomSlide - (Math.floor(slides.length / 2))) {
              slide.setAttribute("data-id", (parseInt(slideDataID) + slides.length) - slideOffset);
              let newDataID = slide.getAttribute("data-id");

              slide.style.transform = `translateX(${((newDataID - Math.floor(slides.length / 2)) * 100)}%)`;
            } else {
              slide.setAttribute("data-id", parseInt(slideDataID) - slideOffset);
              let newDataID = slide.getAttribute("data-id");

              slide.style.transform = `translateX(${((newDataID - Math.floor(slides.length / 2)) * 100)}%)`;
            }
            slide.style.zIndex = 2;
            slide.className = "slide";
          })

          originalSlides.forEach(slide => {
            let slideDataID = slide.getAttribute('data-id');
            let slidePos = slideDataID - Math.floor(slides.length / 2);
            let slideCopy = slide.cloneNode(true);
            slideCopy.className = "slide-copy";
            lastSlide.after(slideCopy);
                  
            slideCopy.style.transform = `translateX(${((slidePos + 20) + slides.length) * 100}%)`;
            slideCopy.setAttribute("data-id", (parseInt(slideDataID) + slides.length) + 20);
          });

          for(let i = 20; i > 0; i--) {
            if(k < slides.length) {
              let newSlide = slides[k].cloneNode(true);
    
              lastSlide.after(newSlide);
              newSlide.setAttribute("data-id", (slides.length + i));
              newSlide.className = "new-slide";
              newSlide.style.transform = `translateX(${((Math.floor(slides.length / 2) + i) * 100)}%)`;
              k++;
            } else {
              k = 0;
              let newSlide = slides[k].cloneNode(true);
    
              lastSlide.after(newSlide);
              newSlide.setAttribute("data-id", (slides.length + i));
              newSlide.className = "new-slide";
              newSlide.style.transform = `translateX(${((Math.floor(slides.length / 2) + i) * 100)}%)`;
              k++;
            }
          }
        }}>porn</button>
    </div>
  );
}
