import React from 'react'
import {
    DoubleArrowsLeftIcon,
    DoubleArrowsRightIcon,
    Arrow
  
  } from "../../assets/icons";
import styled from 'styled-components';


const PaginationContainer = styled.div`
display: flex;
justify-content: space-between;
`;
const PaginationContainerItem = styled.div`

`;
const ArrowContainer = styled.div`
display: flex;
`;

const ArrowContainerItem = styled.div`
display: flex;
`;
const DoubleArrowsContainer = styled.div`
margin-top: 9px;
`;
const ArrowContainerPosition = styled.div`
margin-top: -14px;
margin-left: 18px;
margin-right: 6px;
`;
const DoubleArrowsRightContainer = styled.div`
display: flex;
`;
const RightArrowsContainer = styled.div`

`;
const ArrowReverse = styled.div`
margin-top: 11px;
transform: rotate(-180deg);
margin-top: 14px;
`;
const RightArrowsItemsWraper = styled.div`
display: flex;
height: 12px;
margin-top: 9px;
margin-left: 6px;
margin-right: 23px
`;

function PaginationBar() {
  return (
    <>
    <PaginationContainer>
        <PaginationContainerItem>
        <h5>Сделано в insaitika group</h5>
        </PaginationContainerItem>
        <PaginationContainerItem>
            <ArrowContainer>
                <ArrowContainerItem>
                <RightArrowsContainer>
                    <DoubleArrowsContainer>
                    <DoubleArrowsLeftIcon/>
                    </DoubleArrowsContainer>
                    <ArrowContainerPosition>
                    <Arrow/>
                    </ArrowContainerPosition>
            
            </RightArrowsContainer>
            <p>100</p>
            <RightArrowsItemsWraper>
            <ArrowReverse>
            <Arrow/>
                </ArrowReverse>    
            <DoubleArrowsRightContainer>
            <DoubleArrowsRightIcon/>
            </DoubleArrowsRightContainer>
            
            </RightArrowsItemsWraper>
                </ArrowContainerItem>
            

            <div>
                <p>1 из 100</p>
            </div>
            </ArrowContainer>
           
        </PaginationContainerItem>

    </PaginationContainer>
    </>
  )
}

export default PaginationBar