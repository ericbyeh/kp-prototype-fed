import React from 'react'
    const linkListHorizontal = ({
      data
    }) => {
      let headings = Object.keys(data[1]);
      return (
        <div class="link-list__container">
        <p class="link-list__title--large">
              {
                headings.map(heading => {heading})
              }
            </p>
            <ul class="link-list--horizontal">
            {
                data.map(item => 
                    <li>
                   {
                      headings.map(heading => <a href="#">{item[heading]}</a>) 
                   }
                  </li>
                )
            }
          </ul>
          </div>
      );
    }




export default linkListHorizontal;