import React, { useState, useEffect } from 'react';
import ImageGallery from './ImageGallery.jsx';
import ProductInfo from './ProductInfo.jsx';
import StyleSelect from './StyleSelect.jsx';
import CheckOut from './CheckOut.jsx';
import Title from './Title.jsx';
import axios from 'axios';
import styled from 'styled-components';

const FlexContainer = styled.div`
background-color: #d4b37711;
display: flex;
margin-top: 70px;
`;

const Glossary = styled.div`
margin: 3%;
`;

const ProdInfo = styled.div`
display: flex;
flex-direction: column;

margin-right: 30px;
`;


function Overview (props) {

  const [info, setInfo] = useState([
    {
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
  ]);
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

    return (
      <div>
        <Title />
        <FlexContainer>
          <Glossary>
            <ImageGallery images={dummy} />
          </Glossary>
          <ProdInfo>
            <ProductInfo info={info} />
            <StyleSelect images={dummy} />
            <CheckOut />
          </ProdInfo>
        </FlexContainer>
      </div>
    )
}

export default Overview;


