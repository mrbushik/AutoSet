import React from "react";
import styled from 'styled-components';
import {GridHeader} from './GridHeader/gridHeader'
import {GridTable} from "./GridTable/gridTable";

const GridWrapper = styled.div`
flex: 2 100%;
`;

export const Grid = () => {

    return (
        <GridWrapper>
            <GridHeader/>
            <GridTable/>
        </GridWrapper>
    );
};