import React from 'react'
import styled from 'styled-components';
import { useForm } from "react-hook-form";


import {
    CollapseIcon,
  
  } from "../../../../assets/icons";

const FormContainer = styled.div`
width: 226px;
height: fit-content;
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
const IconCollapseContainer = styled.div`
transform: rotate(180deg);
`;
const OrderConfirmTitle = styled.h4`
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 21px;
color: #000000;
`;
const FormLabel = styled.label`
display: flex;
flex-direction: column;
margin: 20px 5% 0;
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 10px;
line-height: 12px;
color: #000000; 

:first-child{
    margin-top: 10px;  
}
`;
const FormInput = styled.input`
background: #C4C4C4;
border-radius: 10px;
height: 29px;
border: none;
outline: none;
margin-top: 5px;
color: rgba(0, 0, 0, 0.4);
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 10px;
line-height: 9px;
padding: 0 10px;
`;
const CommentToOrderInput = styled.textarea`
background: #C4C4C4;
border-radius: 10px;
height: 110px;
border: none;
outline: none;
margin-top: 5px;
color: rgba(0, 0, 0, 0.4);
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 10px;
line-height: 9px;
padding: 10px;
resize: none;
`;
const CountInfoTitle = styled.h4`
color: #000000;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
color: #000000;
margin-top: 0px;
margin-bottom: 9px;
`;
const CountTitleContainer = styled.div`
margin-top: 20px;
margin-left: 5%;
`;
const SubmitInputBtn = styled.input`
background: #494949;
border-radius: 5px;
height: 46px;
width: 90%;
margin-left: 5%;
color: #FFFFFF;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 21px;
border: none;
`;
function OrderDecorationForm({productCount = 4, productFullPrice = 100, }) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  
  return (
    <>
    <FormContainer>
    <OrderConfirmContainerText>
    <OrderConfirmTitle>Оформление заказа</OrderConfirmTitle>
    <IconCollapseContainer>
    <CollapseIcon color='#000000' bg='#D4D4D4;' size={20} reverse={true}/>
    </IconCollapseContainer>
    </OrderConfirmContainerText>
    <form onSubmit={handleSubmit(onSubmit)}>
         <FormLabel>
         * Фамилия 
      <FormInput placeholder='Иванов'  {...register("name",{ required: true }, { pattern:/^\d{6}$/ })} /> 
      {errors.name && <span>Это поле обязательно должно быть заполненно</span>}
            </FormLabel>   
      <FormLabel>
        *  Имя
      <FormInput placeholder='Иван'{...register("suriname", { required: true })} />
      {errors.suriname && <span>Это поле обязательно должно быть заполненно</span>}
      </FormLabel>
      {/* errors will return when field validation fails  */}
      <FormLabel>
        Телефон
      <FormInput placeholder='Введите номер телефона' {...register("phone")} />
      </FormLabel>
      <FormLabel>
      Комментарий к заказу
      <CommentToOrderInput placeholder='Написать комментарий'{...register("userComment")} />
      </FormLabel>
      <CountTitleContainer>
      {/* в пропс надо передать количество товаров  */}
      <CountInfoTitle>Товаров:  <b>{productCount}</b></CountInfoTitle>
      {/* в пропс надо передать уже посчитанную сумму */}
      <CountInfoTitle>Итого: <b>{productFullPrice}</b> BYN</CountInfoTitle>
      </CountTitleContainer>
      <SubmitInputBtn type="submit"  placeholder='llll'/>
      
    </form>
    </FormContainer>
    </>
  )
}

export default OrderDecorationForm