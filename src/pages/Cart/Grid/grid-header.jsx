import React from "react";
import styled from 'styled-components';
import {StyledButtonWrapper} from "../../../styledComponents/Theme/button";
import {
    CollapseIcon
} from "../../../assets/icons";

const GridHeaderWrapper = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    background-color: black;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    `;

const GridHeaderTitle = styled.h3`
    color: #fff;
    font-weight: 900;
    font-size: 24px;
    line-height: 21.09px;
    display: flex;
    align-items: center;
    padding: 10px;
    `;

const CollapseButton = styled(StyledButtonWrapper)`
    position: absolute;
    right: 0;
    margin-right: 14px;
    margin-top" 14px;
    background-color: black;
    `;

export const CartHeader = () => {

    return (
        <GridHeaderWrapper>
            <GridHeaderTitle>
                Исторя заказов
            </GridHeaderTitle>
            <CollapseButton>
                <CollapseIcon color='#EE7500' bg='none' size={34}/>
            </CollapseButton>
        </GridHeaderWrapper>
    );
};