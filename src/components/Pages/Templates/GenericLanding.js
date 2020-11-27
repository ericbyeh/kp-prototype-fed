/*eslint-disable */
import React from 'react';

//Patterns
import RegionPicker from "../../AppBody/RegionPicker";
import FeatureBlockSmall from '../../AppBody/FeatureContent/indexsmall';
import FeatureText from '../../AppBody/FeatureContent/';

class GenericLanding extends React.Component {
 
  render() {
    

    return (
      <div className="main-body">
        <div className="main-body__container">
          <div className="rows">
            <div className="columns-12">
              <h1 class= "styling-1"> Working with KP</h1>
              <p>Ut nec ultrices nunc. Nunc quis velit eget sem gravida egestas sit amet sit amet lorem. Nulla lorem metus, congue et luctus ac lobortis ut risus.</p>
              <RegionPicker/>
            </div>
            <div className="columns-12">
              <div className="rows">
                <div className="columns-4">
                  <FeatureBlockSmall region="'New to KP'" title="New to KP" description="Donec faucibus maximus enim. Vivamus ipsum eros, lobortis et faucibus nec,"/>
                </div>
                <div className="columns-4">
                  <FeatureBlockSmall region="'Getting appointed'"  title="Getting appointed" description="Donec faucibus maximus enim. Vivamus ipsum eros, lobortis et faucibus nec,"/>
                </div>
                <div className="columns-4">
                  <FeatureBlockSmall region="'Compensation'"  title="Compensation" description="Donec faucibus maximus enim. Vivamus ipsum eros, lobortis et faucibus nec,"/>
                </div>
              </div>
              <div className="rows">
                <div className="columns-4">
                  <FeatureBlockSmall region="'Compliance'" title="Compliance" description="Donec faucibus maximus enim. Vivamus ipsum eros, lobortis et faucibus nec,"/>
                </div>
                <div className="columns-4">
                  <FeatureBlockSmall region="'Already selling KP'"  title="Already selling KP" description="Donec faucibus maximus enim. Vivamus ipsum eros, lobortis et faucibus nec,"/>
                </div>
                <div className="columns-4">
                  <FeatureBlockSmall region="'Small business service tips'"  title="Small business service tips" description="Donec faucibus maximus enim. Vivamus ipsum eros, lobortis et faucibus nec,"/>
                </div>
              </div>
            </div>   
            <div className="columns-12">
              <div className="rows">
                <div className="columns-6">
                  <FeatureText region="'Have questions?'" title="Have questions?" description="Donec faucibus maximus enim. Vivamus ipsum eros, lobortis et faucibus nec,"/>
                </div>
                <div className="columns-6">
                  <FeatureText region="'Contact client services'"  title="Contact client services" description="Donec faucibus maximus enim. Vivamus ipsum eros, lobortis et faucibus nec,"/>
                </div>
              </div>
            </div>    
          </div>
        </div>
      </div>
    );
  }
}

export default GenericLanding;