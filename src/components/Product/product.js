import React from "react";
import styled from 'styled-components';
import SideBar from './SideBar/productSideBar'
import ProductInfo from "./productInfo/productInfo";

const ProductWrapper = styled.div`
display:flex;
flex-direction: row;
height: 400px;
background: black;
border-radius: 14px;
margin-top: 10px;
`;

function  Product ({product}) {

    return (
        <ProductWrapper>
            <SideBar/>
            <ProductInfo product={product}/>
        </ProductWrapper>
    );
}

export default Product;