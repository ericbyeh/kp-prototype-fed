import React from 'react'

    const TableComponent = ({
      data
    }) => {
      let headings = Object.keys(data[1]);
      return (
        <table class="table--dolphin-border">
          <thead>
            <tr>
              {
                headings.map(heading =>  <th scope="col">{heading}</th>)
              }
            </tr>
          </thead>
          <tbody>
            {
                data.map(item => 
                  <tr>
                   {
                      headings.map(heading => <td>{item[heading]}</td>) 
                   }
                  </tr>
                )
            }
          </tbody>
        </table>
      );
    }




export default TableComponent;