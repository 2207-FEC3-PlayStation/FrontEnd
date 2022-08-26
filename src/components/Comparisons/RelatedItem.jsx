import React from 'react';

class RelatedItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedItemInfo: {
        "id": 66644,
        "campus": "hr-rfc",
        "name": "Morning Joggers",
        "slogan": "Make yourself a morning person",
        "description": "Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.",
        "category": "Pants",
        "default_price": "40.00",
        "created_at": "2022-03-31T21:13:15.875Z",
        "updated_at": "2022-03-31T21:13:15.875Z",
        "features": [
            {
                "feature": "Fabric",
                "value": "100% Cotton"
            },
            {
                "feature": "Cut",
                "value": "Skinny"
            }
        ]
      },
      style: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
    }
  };


  // get request to get related Item info and set that to this.state.relatedItemInfo

  // get request to styles to get all the images
  // for now just use the first style for this.state.style


  // on click of star button render the comparison modal

  render (){

    return (
      <div>
        <button>Star</button>
        <img src={this.state.style}
          alt="header image"
        />
        <p>{this.state.relatedItemInfo.category}</p>
        <p>{this.state.relatedItemInfo.name}</p>
        <p>${this.state.relatedItemInfo.default_price}</p>
      </div>
    )
  }
}

export default RelatedItem;
