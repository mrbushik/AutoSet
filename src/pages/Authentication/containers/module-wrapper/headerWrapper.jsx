import {FormHeader} from "../../styled/form";
import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {
   ArrowLeftIcon
} from "../../../../assets/icons";


const HeaderContainer = styled.div`
display:flex;
flex-direction: row;
justify-content: center;
margin: 0 20px;
`;

const BackButton = styled(Link)`
   cursor: pointer;
   margin-left: -20px;
   margin-right: 40px;
   position: absolute;
   background-color: #2f2f2f;
   -webkit-transition: .2s;
   transition: .2s;
   outline: none;
   border: none;
   border-radius: 14px;
   z-index: 1;
   text-decoration: none;
   color: inherit;
`;

export const HeaderWrapper = ({toPage, mode}) => {

    return (
        <div>
            <BackButton to={toPage}>
                <ArrowLeftIcon color='#EE7500' bg='none' size={34}/>
            </BackButton>
            <HeaderContainer>
                <FormHeader>
                    {mode}
                </FormHeader>
            </HeaderContainer>
        </div>
    )
}