export const dataGridSx = {
    border: "none",
    "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within":
        {
            outline: "none !important",
        },
    "& .MuiDataGrid-columnHeaderTitleContainer": {
        justifyContent: 'center',
    },
    '& div[data-rowIndex][role="row"]': {
        color: "white",
        fontSize: 18,
        minHeight: "60px !important",
        height: 'auto',
    },
    ".MuiDataGrid-columnHeaders": {
        backgroundColor: "black",
        color: "white",
        fontSize: 16,
        outline: 'none',
        align: 'center',
        borderRadius: 0,
        whiteSpace: "break-spaces",

    },
    ".MuiDataGrid-columnHeaderTitle": {
        whiteSpace: "break-spaces",
        lineHeight: 1,
        textAlign: "center"
    },
    ".MuiDataGrid-menuIcon": {
        visibility: "visible",
        width: "auto",
    },
    ".MuiDataGrid-footerContainer": {
        backgroundColor: "black",
        borderBottomLeftRadius: "12px",
        borderBottomRightRadius: "12px",
    },
    ".MuiDataGrid-selectedRowCount": {
        width: "50%"
    },
    ".MuiTablePagination-toolbar": {
        fontWeight: 600,
        fontSize: '20px',
        color: "#EE7500"
    },
    ".MuiTablePagination-selectLabel": {
        fontWeight: 500,
        fontSize: '18px',
    },
    ".MuiTablePagination-actions": {},
    ".MuiTablePagination-displayedRows": {
        fontSize: '18px',
    },
    ".MuiDataGrid-columnSeparator": {
        color: "black"
    }
};