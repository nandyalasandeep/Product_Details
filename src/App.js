import logo from './logo.svg';
import classes from './App.module.css';
import ProductPreview from './ProductPreview/ProductPReview';
import ProductDetails from './ProductDetails/ProductDetails';
import Topbar from './Topbar/Topbar';
import React from 'react';
import ProductData from './ProductData';

class App extends React.Component {

  state = {
    productData: ProductData,
    currentPreviewImagePos: 0,
    currentSelectedFeature: 0
  }

  onColorOptionClick = (pos) => {
    this.setState({currentPreviewImagePos: pos});
  }

  onFeatureItemClick = (pos) => {
    this.setState({currentSelectedFeature: pos})
  }

  render () {
    return (
      <div className="App">
          <Topbar />
        
        <div className={classes.MainContainer}>
          <div className={classes.ProductReview}>
            <ProductPreview currentPreviewImage={this.state.productData.colorOptions[this.state.currentPreviewImagePos].imageUrl}
            currentSelectedFeature={this.state.currentSelectedFeature} />
          </div>
  
          <div className={classes.ProductData}>
            <ProductDetails data = {this.state.productData} onColorOptionClick={this.onColorOptionClick}
             currentPreviewImagePos={this.state.currentPreviewImagePos}
             onFeatureItemClick={this.onFeatureItemClick}
             currentSelectedFeature={this.state.currentSelectedFeature}/>
          </div>
        </div>
      </div>
    );
  }
  
  
}

export default App;
