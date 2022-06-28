import React from "react";
import styled from 'styled-components';
import {StyledButtonWrapper} from "../../../../styledComponents/Theme/button";
import {
    CollapseIcon
} from "../../../../assets/icons";

const ProductHeaderWrapper = styled.div`
height: auto;
    display:flex;
    flex-direction: row;
    background: black;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
`;


const ProductName = styled.h1`
    color: white;
    font-weight: 800;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
`;

const CollapseButton = styled(StyledButtonWrapper)`
    right: 0;
    position: absolute;
    margin-right: 10px;
    background-color: black;
    height: 20px;
    width: 24px;
`;

function ProductHeader({name}) {

    return (
        <ProductHeaderWrapper>
            <ProductName>{name}</ProductName>
            <CollapseButton>
                <CollapseIcon color='#EE7500' bg='none'/>
            </CollapseButton>
        </ProductHeaderWrapper>
    );
}

export default ProductHeader;