import React from "react";
import ProductHeader from "./ProductHeader/productHeader";
import ProductTable from "./ProductTable/productTable";
import styled from 'styled-components';

const ProductInfoWrapper = styled.div`
display: flex;
flex-direction: column;
width: 82%;
height: auto;
background: #2f2f2f;
`;

function  ProductInfo ({product}) {
    return (
        <ProductInfoWrapper>
            <ProductHeader name={product.name}/>
            <ProductTable product={product}/>
        </ProductInfoWrapper>
    );
}

export default ProductInfo;