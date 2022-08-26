import React from 'react';
import RelatedList from './RelatedItem.jsx';
import OutfitList from './OutfitList.jsx';

// this could might be a stateless component just for passing down props (main product being displayd) and organization purposes?

class Comparisons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        "id": 66642,
        "campus": "hr-rfc",
        "name": "Camo Onesie",
        "slogan": "Blend in to your crowd",
        "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
        "category": "Jackets",
        "default_price": "140.00",
        "created_at": "2022-03-31T21:13:15.875Z",
        "updated_at": "2022-03-31T21:13:15.875Z",
        "features": [
            {
                "feature": "Fabric",
                "value": "Canvas"
            },
            {
                "feature": "Buttons",
                "value": "Brass"
            }
        ]
      }
    };
  }

  render (){
    return (
      <div>
        <RelatedList product={this.state.product}/>
        <OutfitList product={this.state.product}/>
      </div>
    )
  }
}

export default Comparisons;