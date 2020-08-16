import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

export default function ShopItem( { product } ) {
  return (
  <Card id={product.id}>
    <CardImg top width="90%" src={product.image_url} alt={`Image of ${product.name}`} />
    <CardBody>
      <CardTitle>
        {product.name}
      </CardTitle>
      <CardSubtitle>
        {product.price}
      </CardSubtitle>
      <CardText>
        {product.description}
      </CardText>
      <Button type="button" color="info">Add to Cart</Button>
    </CardBody>
  </Card>
  )
}

/*
    "47314fa1-ae56-4eae-80be-af6691145951": {
      "name": "tv",
      "price": 219.99,
      "description": "A beautiful, big-screen TV. Because hey, Netflix isn't going to watch itself.",
      "image_url": "https://images.samsung.com/is/image/samsung/latin_en-hd-j4300ah-un32j4300ahxpa-001-front-indigo-blue"
    },
*/