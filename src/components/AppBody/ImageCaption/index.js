import React from "react";

class ImageCaption extends React.Component {

  
  render() {    
    return (
        <div class="image-description">
          <div class="image-description__column">
            <div class="image-description__content">
              <picture class="image-description__image">
                <source media="(min-width: 860px)" srcset="http://fpoimg.com/380x192?text=Placeholder" /> 
                <source media="(min-width: 601px)" srcset="http://fpoimg.com/223x134?text=Placeholder" />
                <source media="(min-width: 800px)" srcset="http://fpoimg.com/223x134?text=Placeholder" />
                <source media="(min-width: 0px)" srcset="http://fpoimg.com/288x173?text=Placeholder" /> 
                <img alt="easy member enrollment" src="http://fpoimg.com/288x173?text=Placeholder" />
              </picture>
              <h4><a href="#"><strong>Easy member enrollment and status</strong></a></h4>
              <p>Lorem ipsum dolor sit amet, conse adipiscing elit, sed do eiusmod conse adipiscing. Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div class="image-description__column">
            <div class="image-description__content">
              <picture class="image-description__image">
                <source media="(min-width: 860px)" srcset="http://fpoimg.com/380x192?text=Placeholder" /> 
                <source media="(min-width: 601px)" srcset="http://fpoimg.com/223x134?text=Placeholder" />
                <source media="(min-width: 800px)" srcset="http://fpoimg.com/223x134?text=Placeholder" /> 
                <source media="(min-width: 0px)" srcset="http://fpoimg.com/288x173?text=Placeholder"/> 
                <img alt="download member list" src="http://fpoimg.com/288x173?text=Placeholder" />
              </picture>
              <h4><a href="#"><strong>Quickly download member lists</strong></a></h4>
              <p>Lorem ipsum dolor sit amet, conse adipiscing elit, sed do eiusmod conse adipiscing. Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div class="image-description__column">
            <div class="image-description__content">
              <picture class="image-description__image">
                <source media="(min-width: 860px)" srcset="http://fpoimg.com/380x192?text=Placeholder" /> 
                <source media="(min-width: 601px)" srcset="http://fpoimg.com/223x134?text=Placeholder" />
                <source media="(min-width: 800px)" srcset="http://fpoimg.com/223x134?text=Placeholder" /> 
                <source media="(min-width: 0px)" srcset="http://fpoimg.com/288x173?text=Placeholder"/> 
                <img alt="download member list" src="http://fpoimg.com/288x173?text=Placeholder" />
              </picture>
              <h4><a href="#"><strong>Easily pull a copy of your group bill</strong></a></h4>
              <p>Lorem ipsum dolor sit amet, conse adipiscing elit, sed do eiusmod conse adipiscing. Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
    );
  }
}




export default ImageCaption;