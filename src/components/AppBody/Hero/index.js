import React from "react";


class HeroImage extends React.Component {

 

  render() {   
    return (
      <div class="hero">
        <div class="hero__content">
          <div class="hero__background-image" id="heroImage" data-analytics-location="hero banner:Getting started">
            <picture class="hero-image">
              <source media="(min-width: 1024px)" srcset="http://placehold.it/1280px350&amp;text=Hero+Image"/>
              <source media="(min-width: 860px)" srcset="http://placehold.it/1024px350&amp;text=Hero+Image" />
              <source media="(min-width: 800px)" srcset="http://placehold.it/860px350&amp;text=Hero+Image" />
              <source media="(min-width: 601px)" srcset="http://placehold.it/860px350&amp;text=Hero+Image" />
              <source media="(min-width: 0px)" srcset="http://placehold.it/320px240&amp;text=Hero+Image" />
              <img src="http://placehold.it/320px240&amp;text=Hero+Image" alt="hero banner image" />
            </picture>
          </div>
          <div class="hero-image__description" id="heroDescription">
            <h1 class="hero-title">Ready to register?</h1>
            <p class="hero-under-title">Lorem ipsum dolor sit amet, consecte sed adipiscing elit, sed do eiusmod.</p><button class="button" type="button">Get started</button>
            <p class="hero-under-title">Already have an account? <a href="#">Sign in.</a></p>
          </div>
        </div>
      </div>
    );
  }
}




export default HeroImage;
