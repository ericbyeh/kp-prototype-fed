import React from "react";
class PrintUtility extends React.Component {
    render() {
        return (
          <div className="screen-only print-utility hidden-from-search" data-analytics-location="utility links">
            <button  onClick={() => window.print()} className="print-utility__link" data-analytics-type="print" data-analytics-click="Print">
            <i className="icon-print"></i> Print</button>
          </div>
        );
    }
}
export default PrintUtility;