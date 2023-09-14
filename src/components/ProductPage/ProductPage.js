import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { data1 } from '../data/data';
import CardItem from '../CardSection/CardItem';
import './Product.css'

const ProductPage = () => {

    const { productId } = useParams();

    const productlist1 = data1.find(pd => pd.id === productId)


    return (
        <div className='Product' >
            <h1> MR - EMPIRE </h1>
            <div className="item">
                <CardItem item={productlist1} />

            </div>
        </div>
    )
}

export default ProductPage
