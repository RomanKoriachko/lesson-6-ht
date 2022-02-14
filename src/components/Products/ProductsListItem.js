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
        return (
            <>
                <Card>
                    <CardContent>
                        <div className="product-img">
                            <img src={this.props.image} alt="iphone"></img>
                        </div>
                        <h4>{this.props.name}</h4>
                        <p>{this.props.description}</p>
                        <div className="product-features">
                            Type: {this.props.type}
                        </div>
                        <div className="product-features">
                            Capacity: {this.props.capacity} Gb
                        </div>
                        <div className="product-price">
                            {this.props.price} $
                        </div>
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

// export const ProductsListItem = ({
//     image,
//     name,
//     description,
//     type,
//     capacity,
//     price,
// }) => {
//     return (
//     )
// }

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
