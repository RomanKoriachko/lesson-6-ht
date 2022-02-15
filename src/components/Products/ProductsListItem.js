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
    state = {
        productCount: 1,
        color: 'Green',
        isToggleOn: true,
        disableDecrementButton: true,
        disableIncrementButton: false,
    }

    onIncrementClick = () => {
        this.setState((prevState) => ({
            productCount: prevState.productCount + 1,
        }))
        if (this.state.productCount >= 9) {
            this.setState({
                disableIncrementButton: true,
            })
        } else {
            this.setState({
                disableIncrementButton: false,
                disableDecrementButton: false,
            })
        }
    }

    onDecrementClick = () => {
        if (this.state.productCount <= 2) {
            this.setState({
                disableDecrementButton: true,
            })
        } else if (this.state.productCount >= 2) {
            this.setState({
                disableDecrementButton: false,
                disableIncrementButton: false,
            })
        }
        this.setState((prevState) => ({
            productCount: prevState.productCount - 1,
        }))
    }

    toggleColor = () => {
        this.setState((prevState) => ({
            isToggleOn: !prevState.isToggleOn,
            color: this.state.isToggleOn ? 'Red' : 'Green',
        }))
    }

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
                        <div>Color: {this.state.color}</div>
                        <Button variant="contained" onClick={this.toggleColor}>
                            Change Color
                        </Button>
                        <div className="product-features">Type: {type}</div>
                        <div className="product-features">
                            Capacity: {capacity} Gb
                        </div>
                        <div className="product-price">{price} $</div>
                        <div className="product-quantity">
                            <Button
                                variant="contained"
                                onClick={this.onDecrementClick}
                                disabled={this.state.disableDecrementButton}
                            >
                                -
                            </Button>
                            <TextField
                                size="small"
                                value={this.state.productCount}
                                className="text-center"
                            />
                            <Button
                                variant="contained"
                                onClick={this.onIncrementClick}
                                disabled={this.state.disableIncrementButton}
                            >
                                +
                            </Button>
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
