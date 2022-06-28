import React from "react";
import styled from 'styled-components';
import {Header} from "../../components/Header/header";
import { CartTable } from "./Grid/grid-table";

const CartWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-position: 100% 100%;
    padding: 0px 10px;
    text-rendering: optimizeSpeed;
    background-color: #2f2f2f;
    font-size: 10px;
    line-height: 11.72px;
    font-family: "Roboto";
    color: #fff
    `;



export default function Cart() {

    return (
        <CartWrapper>
            <Header/>
            <CartTable/>
        </CartWrapper>
    );
}
