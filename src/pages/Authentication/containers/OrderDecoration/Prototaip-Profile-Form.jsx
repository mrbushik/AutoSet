import React from 'react'
import styled from 'styled-components';

import axios from 'axios'
import PrototypeUserForm from '../../../../components/Question/Forms/PrototypeUserForm';
import {
    CollapseIcon,
  } from "../../../../assets/icons";
const FormContainer = styled.div`
width: 226px;
height: 542px;
padding-bottom: 25px;
background: #E9E9E9;
border-radius: 10px;
`;
const OrderConfirmContainerText = styled.div`
background: #D4D4D4;
border-radius: 10px;
height: 50px;
display: flex;
justify-content: space-around;
align-items: center;
`; 
const OrderConfirmTitle = styled.h4`
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 21px;
color: #000000;
`;

const IconCollapseContainer = styled.div`
transform: rotate(180deg);
`;
function PrototaipProfileForm() {
   
const [userInfo, setUserInfo] = React.useState();
React.useEffect(() => {
    const url = 'http://localhost:3001/userData';
axios.get(url).then((resp)=>{
    const infoAboutUser = resp.data;
    setUserInfo(infoAboutUser);
})
},[setUserInfo])
return (
    <>
    <FormContainer>
    <OrderConfirmContainerText>
        {/* сделать чтоб с сервера выводилось значение */}
<OrderConfirmTitle><p>{userInfo ? `${userInfo[0].surname}  ${userInfo[0].name}`: ''}</p></OrderConfirmTitle>
<IconCollapseContainer>
    <CollapseIcon color='#000000' bg='#D4D4D4;' size={20} reverse={true}/>
    </IconCollapseContainer>
    </OrderConfirmContainerText>
   <PrototypeUserForm UserInfoObj={userInfo}/>
    </FormContainer>
    </>
  )
}

export default PrototaipProfileForm