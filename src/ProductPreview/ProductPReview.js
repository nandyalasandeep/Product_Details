import React from "react";

import Classes from './ProductPreview.module.css';


const ProductPreview = (props) => {
    const curHour = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours();
    const curMinutes = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes();
    
    return (
        <div className={Classes.ProductReview}>
            <img src={props.currentPreviewImage} alt='Product Preview'/>

            {
              props.currentSelectedFeature === 1 ?

            <div className={Classes.HeartBeatSection}>
              <i className="fas fa-heartbeat"></i>
              <p>78</p>
            </div>

            :

            <div className={Classes.TimeSection}>
              <p>{`${curHour}:${curMinutes}`}</p>
            </div>

            }
            
        </div>
    );
}

export default ProductPreview;