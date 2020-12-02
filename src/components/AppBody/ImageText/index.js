import React from "react";
class ImageText extends React.Component {
  constructor() {
    super();
    this.props = {
       ImageTextTitle: 'title',
       ImageTextDescription: 'description',
       ImageTextButton: 'buttontext',

    }
 }
    render() {
        return (
            <div class="image-text">
                 
                 <div class="image-text__container-block">
        <p> {this.props.ImageTextTitle}</p>
                    <p> Lorem ipsum dolor sit amet, consecte
sed adipiscing elit, sed do eiusmod. </p>
                        
                </div>

            <img src="" ></img>
            </div>
        )
    }
}
export default ImageText;
