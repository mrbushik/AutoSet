import * as React from "react";
import {DataGrid} from "@mui/x-data-grid";
import Typography from "@material-ui/core/Typography";
import styled from 'styled-components';
import IconWrapper from "../../Icon/filterIconWrapper";
import Counter from "../../Counter/counter";
import CheckBoxItem from "../../Checkbox/checkbox";
import {ruRU} from "@mui/material/locale";
import createTheme from "@mui/material/styles/createTheme";
import {ThemeProvider} from "@mui/material";
import Product from "../../Product/product";
import {useState} from "react";
import {dataGridSx} from "../../../styledComponents/DataGridSx/gridSx";
import {TableFooter} from "../GridHeader/GridFooter/tableFooter";
import {
    CartIcon
} from "../../../assets/icons";

const GridItem = styled.div`
 vertical-align: center;
 text-align: center;
`;

const theme = createTheme(
    ruRU,
);


const columns = [
    {
        field: "name",
        headerName: "Наименование",
        width: 440,
        sortable: false,
        align: "center",
        renderCell: (params) => (
            <GridItem>
                <Typography>{params.row.name}</Typography>
            </GridItem>
        )
    },
    {
        field: "brand",
        headerName: "Бренд",
        width: 130,
        align: "center",
        sortable: false,
        renderCell: (params) => (
            <GridItem>
                <Typography>{params.row.brand}</Typography>
            </GridItem>
        )
    },
    {
        field: "article",
        headerName: "Артикул",
        width: 120,
        align: "center",
        sortable: false,
        renderCell: (params) => (
            <GridItem>
                <Typography>{params.row.article}</Typography>
            </GridItem>
        )
    },
    {
        field: "wholesale",
        headerName: "Цена Опт",
        width: 120,
        align: "center",
        sortable: false,

        renderCell: (params) => (
            <GridItem>
                <Typography>{params.row.wholesale}</Typography>
            </GridItem>
        )
    },
    {
        field: "purchasePrice",
        headerName: "Розничная цена",
        width: 190,
        align: "center",
        sortable: false,
        renderCell: (params) => (
            <GridItem>
                <Typography>{params.row.purchasePrice}</Typography>
            </GridItem>
        )
    },
    {
        field: "balance",
        headerName: "Остатки",
        width: 130,
        align: "center",
        sortable: false,
        renderCell: (params) => (
            <GridItem>
                <Typography>{params.row.balance}</Typography>
            </GridItem>
        )
    },
    {
        field: "provider",
        headerName: "Поставщик",
        width: 150,
        align: "center",
        sortable: false,
        renderCell: (params) => (
            <GridItem>
                <Typography>{params.row.provider}</Typography>
            </GridItem>
        )
    },
    {
        field: "deadline",
        headerName: "Срок поставки",
        width: 170,
        align: "center",
        sortable: false,
        renderCell: (params) => (
            <GridItem>
                <Typography>{params.row.deadline}</Typography>
            </GridItem>
        )
    },
    {
        field: "stock",
        headerName: "Склад",
        width: 120,
        align: "center",
        sortable: false,
        renderCell: (params) => (
            <GridItem>
                <Typography>{params.row.stock}</Typography>
            </GridItem>
        )
    },
    {
        field: "quantity",
        headerName: "Количество",
        width: 150,
        align: "center",
        sortable: false,
        renderCell: (params) => (
            <Typography component={'span'}><Counter/></Typography>
        )
    },
    {
        field: "basket",
        headerName: "Корзина",
        width: 130,
        align: "center",
        sortable: false,
        renderCell: (params) => (
            <Typography>
                <CartIcon bg='none' size={40}/>
            </Typography>
        )
    }
];

const rows = [
    {
        id: 1,
        name: 'Машина AHD110 110Ah 850A (R+) 350x175x230 mm',
        brand: 'AHD',
        article: 'AHD110',
        wholesale: '600',
        purchasePrice: '500',
        balance: '100',
        provider: 'Еврозапчасть',
        deadline: '3 дня',
        stock: 'Минск',
        quantity: '',
    },
    {
        id: 2,
        name: 'Машина AHD110 110Ah 850A (R+) 350x175x230 mm',
        brand: 'AHD',
        article: 'AHD110',
        wholesale: '600',
        purchasePrice: '500',
        balance: '100',
        provider: 'Еврозапчасть',
        deadline: '3 дня',
        stock: 'Минск',
        quantity: '',
    },
    {
        id: 3,
        name: 'Машина AHD110 110Ah 850A (R+) 350x175x230 mm',
        brand: 'AHD',
        article: 'AHD110',
        wholesale: '600',
        purchasePrice: '500',
        balance: '100',
        provider: 'Еврозапчасть',
        deadline: '3 дня',
        stock: 'Минск',
        quantity: '',
    },
    {
        id: 4,
        name: 'Машина AHD110 110Ah 850A (R+) 350x175x230 mm',
        brand: 'AHD',
        article: 'AHD110',
        wholesale: '600',
        purchasePrice: '500',
        balance: '100',
        provider: 'Еврозапчасть',
        deadline: '3 дня',
        stock: 'Минск',
        quantity: '',
    },
    {
        id: 5,
        name: 'Машина AHD110 110Ah 850A (R+) 350x175x230 mm',
        brand: 'AHD',
        article: 'AHD110',
        wholesale: '600',
        purchasePrice: '500',
        balance: '100',
        provider: 'Еврозапчасть',
        deadline: '3 дня',
        stock: 'Минск',
        quantity: '',
    },
    {
        id: 6,
        name: 'Машина AHD110 110Ah 850A (R+) 350x175x230 mm',
        brand: 'AHD',
        article: 'AHD110',
        wholesale: '600',
        purchasePrice: '500',
        balance: '100',
        provider: 'Еврозапчасть',
        deadline: '3 дня',
        stock: 'Минск',
        quantity: '',
    },
    {
        id: 7,
        name: 'Машина AHD110 110Ah 850A (R+) 350x175x230 mm',
        brand: 'AHD',
        article: 'AHD110',
        wholesale: '600',
        purchasePrice: '500',
        balance: '100',
        provider: 'Еврозапчасть',
        deadline: '3 дня',
        stock: 'Минск',
        quantity: '',
    },
    {
        id: 8,
        name: 'Машина AHD110 110Ah 850A (R+) 350x175x230 mm',
        brand: 'AHD',
        article: 'AHD110',
        wholesale: '600',
        purchasePrice: '500',
        balance: '100',
        provider: 'Еврозапчасть',
        deadline: '3 дня',
        stock: 'Минск',
        quantity: '',
    },
]

const GridWrapper = styled.div`
    flex-grow:1;
`;

const StyledWrapper = styled.div`
    display: flex; 
    height: 800px;
    flex-direction: column;
`;

const TableFooterMemo = React.memo(TableFooter);

export const GridTable = () => {

    const [isPreviewShown, setPreviewShown] = useState(false );
    const [productInfo, setProductInfo] = useState({});
    const [price, setPrice] = useState(0);

    const getProductInfo = (e) => {
        setProductInfo({...e.row});
    }

    const showProductInfo = (evt) => {
        setPreviewShown(Boolean(evt.length));
        if (!evt.length) return;
        const cost = evt.map((id, idx) => {
            const index = rows.findIndex((item) => item.id === id);
            return index >= 0 ? idx : null;
        }).reduce(function (accumulator, currentValue, index) {
            return accumulator + parseInt(rows[index].purchasePrice)
        }, 0);
        setPrice(cost);
    }

    return (
        <ThemeProvider theme={theme}>
            <StyledWrapper>
                <GridWrapper>
                    <DataGrid
                        headerHeight={60}
                        rowHeight={100}
                        sx={dataGridSx}
                        rows={rows}
                        columns={columns}
                        checkboxSelection
                        pageSize={10}
                        onCellClick={getProductInfo}
                        onSelectionModelChange={showProductInfo}
                        hideFooterSelectedRowCount={false}
                        rowsPerPageOptions={[5, 10, 20]}
                        localeText={{
                            footerRowSelected: (count) => <TableFooterMemo selectedRowsId={count} sum={price}/>
                        }}
                        components={{
                            BaseCheckbox: CheckBoxItem,
                            ColumnMenuIcon: IconWrapper,
                        }}
                    />
                </GridWrapper>
                {isPreviewShown && <Product product={productInfo}/>}
            </StyledWrapper>
        </ThemeProvider>

    )
};
