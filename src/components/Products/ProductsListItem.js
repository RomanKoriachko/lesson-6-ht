import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import React, { Component } from 'react'
import './ProductsListItem.css'
import PropTypes from 'prop-types'

export class ProductsListItem extends Component {
    render() {
        const { image, name, description, type, capacity, price } = this.props
        return (
            <>
                <Card>
                    <CardContent>
                        <div className="product-img">
                            <img src={image} alt="iphone"></img>
                        </div>
                        <h4>{name}</h4>
                        <p>{description}</p>
                        <div className="product-features">Type: {type}</div>
                        <div className="product-features">
                            Capacity: {capacity} Gb
                        </div>
                        <div className="product-price">{price} $</div>
                        <div className="product-quantity">
                            <Button variant="contained">-</Button>
                            <TextField
                                size="small"
                                value="1"
                                className="text-center"
                            />
                            <Button variant="contained">+</Button>
                        </div>
                    </CardContent>
                    <CardActions className="wrap-btn-add-to-cart">
                        <Button variant="outlined">Add to cart</Button>
                    </CardActions>
                </Card>
            </>
        )
    }
}

ProductsListItem.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    type: PropTypes.string.isRequired,
    capacity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
}
ProductsListItem.defaultProps = {
    description: 'No description ...',
    image: '/images/noimage.jpg',
}
