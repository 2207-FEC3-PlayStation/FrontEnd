import React, { useState, useEffect } from 'react';
import ImageGallery from './ImageGallery.jsx';
import ProductInfo from './ProductInfo.jsx';
import StyleSelect from './StyleSelect.jsx';
import CheckOut from './CheckOut.jsx';
import Title from './Title.jsx';
import axios from 'axios';
import styled from 'styled-components';
import server from '../../serverRequests.js';

const Announce = styled.div`
text-align: center;
padding: 20px;
`

const FlexContainer = styled.div`
background-color: #d4b37711;
display: flex;
flex-direction: row;
margin-bottom: 0;
justify-content: flex-start;
`;

const ProdInfo = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
margin-right: 0px;
margin-top: 30px;
position: absolute;
left: 650px;
word-wrap: break-word;
`;

const ProdDet = styled.div`
background-color: #d4b37711;
display: flex;
flex-direction: row;
margin: 0px;
padding-top: 20px;
justify-content: flex-start;
`;

const ProdDescr = styled.div`
padding: 10px;
padding-left: 30px;
margin-top: 30px;
margin-bottom: 30px;
width: 60%;
`;

const ProdChar = styled.div`
padding: 10px;
margin-top: 30px;
margin-bottom: 30px;
padding-left: 30px;
border-left: 3px solid grey;
`;

function Overview (props) {
  const [dummy, setDummy] = useState({
    "product_id": "66642",
    "results": [
      {
        "style_id": 411534,
        "name": "Forest Green & Black",
        "original_price": "140.00",
        "sale_price": null,
        "default?": true,
        "photos": [
          {
            "thumbnail_url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
            "url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
          },
          {
            "thumbnail_url": "https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
            "url": "https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80"
          },
          {
            "thumbnail_url": "https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
            "url": "https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80"
          },
          {
            "thumbnail_url": "https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
            "url": "https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
          },
          {
            "thumbnail_url": "https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
            "url": "https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
          },
          {
            "thumbnail_url": "https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
            "url": "https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
          }
        ],
        "skus": {
          "2390357": {
            "quantity": 8,
            "size": "XS"
          },
          "2390358": {
            "quantity": 16,
            "size": "S"
          },
          "2390359": {
            "quantity": 17,
            "size": "M"
          },
          "2390360": {
            "quantity": 10,
            "size": "L"
          },
          "2390361": {
            "quantity": 15,
            "size": "XL"
          },
          "2390362": {
            "quantity": 4,
            "size": "XL"
          }
        }
      },
      {
        "style_id": 411535,
        "name": "Desert Brown & Tan",
        "original_price": "140.00",
        "sale_price": null,
        "default?": false,
        "photos": [
          {
            "thumbnail_url": "https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
            "url": "https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
          },
          {
            "thumbnail_url": "https://images.unsplash.com/photo-1560567546-4c6dbc16877b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
            "url": "https://images.unsplash.com/photo-1560567546-4c6dbc16877b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
          },
          {
            "thumbnail_url": "https://images.unsplash.com/photo-1458253329476-1ebb8593a652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
            "url": "https://images.unsplash.com/photo-1458253329476-1ebb8593a652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
          },
          {
            "thumbnail_url": "https://images.unsplash.com/photo-1422557379185-474fa15bf770?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
            "url": "https://images.unsplash.com/photo-1422557379185-474fa15bf770?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
          },
          {
            "thumbnail_url": "https://images.unsplash.com/photo-1490723286627-4b66e6b2882a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
            "url": "https://images.unsplash.com/photo-1490723286627-4b66e6b2882a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
          },
          {
            "thumbnail_url": "https://images.unsplash.com/photo-1447958272669-9c562446304f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
            "url": "https://images.unsplash.com/photo-1447958272669-9c562446304f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2800&q=80"
          }
        ],
        "skus": {
          "2390363": {
            "quantity": 8,
            "size": "XS"
          },
          "2390364": {
            "quantity": 16,
            "size": "S"
          },
          "2390365": {
            "quantity": 17,
            "size": "M"
          },
          "2390366": {
            "quantity": 10,
            "size": "L"
          },
          "2390367": {
            "quantity": 15,
            "size": "XL"
          },
          "2390368": {
            "quantity": 6,
            "size": "XXL"
          }
        }
      }]
  });
  const [image, setImage] = useState();
  const [defaultPhotos, setdefaultPhotos] = useState(null);
  const [finished, setFinished] = useState(false);

  // gets the related styles and sets the main photo as the default style's first photo
  // if there is no default photo, it sets the main photo as the first style's first photo

  useEffect(() => {
    var mainPhoto = '';
    if (props.prod) {
      server.get('/products/styles', {product_id: props.prod.id})
        .then((data)=> {
          var results = data.data.results;
          for (var i = 0; i < results.length; i++) {
            if (results[i]['default?'] === true) {
              mainPhoto = results[i].photos[0].url;
              setImage(mainPhoto);
              setdefaultPhotos(results[i].photos);
            }
          }
          if (mainPhoto === '') {
            mainPhoto = data.data.results[0].photos[0].url;
            setImage(mainPhoto);
            setdefaultPhotos(data.data.results[0].photos);
            setFinished(true);
          }
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }, [props.prod, finished])

  function handleImage(e) {
    setImage(e.target.src);
  }

  return (
  <div>
    <Title />
    <Announce><em>SITE-WIDE ANNOUNCEMENT MESSAGE! -- SALE / DISCOUNT <strong>OFFER</strong> - <u>NEW PRODUCT HIGHLIGHT</u></em></Announce>
    <FlexContainer>
      <ImageGallery prod={props.prod} photos={defaultPhotos} image={image} handleImage={handleImage}/>
      <ProdInfo>
        {props.prod && <ProductInfo info={props.prod} avgRating={props.avgRating}/>}
        <StyleSelect images={dummy} />
        <CheckOut />
      </ProdInfo>
    </FlexContainer>
    {props.prod && <ProdDet>
      <ProdDescr>
        <h4>Description</h4>
        <p>{props.prod.description}</p>
      </ProdDescr>
      <ProdChar>
        <h4>Features</h4>
        {props.prod.features.map((feature) => {
          return <React.Fragment key={feature.value}><span>✓ {feature.value} {feature.feature}</span><br></br></React.Fragment>
        })}
        {/* <span>{props.prod.features[0].feature}: {props.prod.features[0].value}</span> */}
      </ProdChar>
    </ProdDet>}
  </div>
  )
}

export default Overview;


