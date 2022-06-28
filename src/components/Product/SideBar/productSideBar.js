import React from "react";
import styled from 'styled-components';
import battery from '../../../assets/mockImg/battery.png'

const ProductSidebarWrapper = styled.div`
display: flex;
flex-direction: column;
width: 18%;
height: auto;
`;

const HeaderSidebar = styled.div`
display:flex;
justify-content: center;
`;

const ProductImage = styled.img`
margin-top: 14px;
width: 70%;

`;

const ListItem = styled.li` 
outline: none;
font-size: 24px;
margin-top: 22px;
list-style-type: none;
height: 36px;
vertical-align: middle;
cursor: pointer;
`;

const ProductMenu = styled.div``;

function  ProductSidebar () {

    return (
        <ProductSidebarWrapper>
            <HeaderSidebar>
                <ProductImage src={battery}/>
            </HeaderSidebar>
            <ProductMenu>
                <ul>
                    <ListItem>Описание</ListItem>
                    <ListItem>Применимость</ListItem>
                    <ListItem>Аналоги</ListItem>
                </ul>
            </ProductMenu>
        </ProductSidebarWrapper>
    );
}

export default ProductSidebar;