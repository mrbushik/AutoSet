import * as React from "react";
import styled from "styled-components";
import {StyledButtonWrapper} from "../../../../styledComponents/Theme/button";
import Icons from "../../../..";

const RowSelectedWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
`;

const RowSelectedTextWrapper = styled.div`
display: flex;
justify-content: flex-start;
margin-left:30px;
`

const RowSelectedText = styled.div`
margin-left:30px;
font-size: 18px;
color: #EE7500;
`;

const RowButtonWrapper = styled.div`
display:flex;
justify-content: flex-end;
`;

const CartButton = styled(StyledButtonWrapper)`
    height: 24px;
    width: 120px;
    margin-right: 30px;
    font-size: 18px;
    color: #EE7500;
`;

const FavoriteButton = styled(StyledButtonWrapper)`
    margin-right: 10px;
    height: 24px;
    width: 24px;
`;


export const TableFooter = ({selectedRowsId, sum}) => {
    return(
        <RowSelectedWrapper>
            <RowSelectedTextWrapper>
                <RowSelectedText>Товаров выбрано: {selectedRowsId} шт.</RowSelectedText>
                <RowSelectedText>Сумма всего: {sum} BYN</RowSelectedText>
            </RowSelectedTextWrapper>
            <RowButtonWrapper>
                <CartButton>
                    В корзину
                    <Icons
                    name='cart'
                    size='18'
                    />
                </CartButton>
                <FavoriteButton>
                    <Icons
                    name='favorites'
                    size='24'
                    />
                </FavoriteButton>
            </RowButtonWrapper>
        </RowSelectedWrapper>
    );
};