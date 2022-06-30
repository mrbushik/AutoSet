import React from 'react'
import styled from 'styled-components';
import {Header} from "../../components/Header/header";
import AdminQuestionFrom from '../../components/Question/AdminQuestionForm';

const LandingWrapper = styled.div`
display: flex;
flex-direction: column;
padding-bottom: 10px;
background-position: 100% 100%;
padding: 0px 10px 10px;
text-rendering: optimizeSpeed;
background-color: #2f2f2f;
font-size: 10px;
line-height: 11.72px;
font-family: "Roboto";
color: #fff;
`;
const FormQuestionWrapper = styled.div`
display: flex;
    margin: 0 auto;
`;
const FakeMenu = styled.div`
width: 226px;
height: 934px;
background: #1A1A1A;
border-radius: 10px;
`;

function AdminQuestion() {
  return (
    <>
<LandingWrapper>
    <Header/> 
    <FormQuestionWrapper>
    <FakeMenu/>
    <div>
    <AdminQuestionFrom/>
    </div>
</FormQuestionWrapper>
</LandingWrapper>
    </>
  )
}

export default AdminQuestion