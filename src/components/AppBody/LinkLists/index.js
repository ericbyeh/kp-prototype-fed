import React from 'react'
    const linkList = ({
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
            <ul class="link-list">
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




export default linkList;