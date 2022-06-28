import React from "react";
import styled from 'styled-components';
import { DataGrid } from '@mui/x-data-grid';
import Typography from "@material-ui/core/Typography";
import {CartHeader} from "./grid-header";

const CartTableWrapper = styled.div`
height: 320px;
`;

const GridItem = styled.div`
 vertical-align: center;
 text-align: center;
`;

const sx ={
    borderColor: '#2f2f2f',
    ".MuiDataGrid-sortIcon": {
        display: 'none',
    },
    '.MuiDataGrid-iconButtonContainer': {
        display: 'none'
    },
    '.MuiDataGrid-root': {
        borderColor: 'black',
        borderBottomColor: '#2f2f2f'
    },
    ".MuiDataGrid-columnHeaderTitle": {
        whiteSpace: "break-spaces",
        lineHeight: 1,
        textAlign: "center",
        fontSize: '18px',
    },
    '.MuiDataGrid-columnHeaders':{
        color: 'white'
    },
    ".MuiDataGrid-menuIcon": {
        visibility: "visible",
        width: "auto",
    },
    ".MuiDataGrid-footerContainer": {
        height: "0px",
        backgroundColor: "white",
        borderBottomLeftRadius: "12px",
        borderBottomRightRadius: "12px",
        borderTopColor: '#2f2f2f'
    },
    ".MuiTablePagination-selectLabel": {
        fontWeight: 500,
        fontSize: '18px',
    },
    ".MuiTablePagination-actions": {},
    ".MuiTablePagination-displayedRows": {
        display: 'none'
    },
    '.MuiDataGrid-cell': {
        color: 'white',
        borderColor: '#2f2f2f'
    },
    ".MuiDataGrid-columnSeparator": {
        color: "#2f2f2f"
    }
};

export const  CartTable = () => {

    const columns = [
        {
            field: 'id',
            headerName: '№',
            width: 440,
            renderCell: (params) => (
                <GridItem>
                    <Typography>{params.row.id}</Typography>
                </GridItem>
            )
        },
        {
            field: 'describe',
            headerName: 'Описание',
            width: 440,
            renderCell: (params) => (
                <GridItem>
                    <Typography>{params.row.describe}</Typography>
                </GridItem>
            )
        },
        {
            field: 'parameter',
            headerName: 'Параметры',
            width: 200,
            renderCell: (params) => (
                <GridItem>
                    <Typography>{params.row.parameter}</Typography>
                </GridItem>
            )
        },
        {
            field: 'meaning',
            headerName: 'Значение',
            width: 200,
            renderCell: (params) => (
                <GridItem>
                    <Typography>{params.row.meaning}</Typography>
                </GridItem>
            )
        }
    ];
    const rows = [
        {
            id:1,
            describe: 'product.name',
            parameter: 'product.brand',
            meaning: 'product.provider'
        }
    ];

    return (
        <CartTableWrapper>
            <CartHeader/>
            <DataGrid
                headerHeight={60}
                rowHeight={100}
                rows={rows}
                sx={sx}
                columns={columns}
                checkboxSelection={false}
                disableSelectionOnClick={true}
                disableColumnMenu={true}
                hideFooter={true}
                pageSize={1}
                hideFooterSelectedRowCount={true}
            />
        </CartTableWrapper>
);
}
