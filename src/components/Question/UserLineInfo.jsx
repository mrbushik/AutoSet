import React from 'react'
import styled from 'styled-components';

const UserPhoto = styled.img`
width: 30px;
height: 30px;
`;
const TableCell = styled.tr`
`;
const TableCellItem = styled.td`

`;

function UserLineInfo({data}) {
  return (
    <>
   {data &&
data.map((obj)=>
    <tr key={obj.id}>
    <TableCellItem><UserPhoto src={obj.imgUrl} alt='фото пользователя'/></TableCellItem>
    <TableCellItem><p>{obj.login}</p></TableCellItem>
    <TableCellItem>{obj.RegistrationDate}</TableCellItem>
    <TableCellItem>{obj.userStatus}</TableCellItem>
    <TableCellItem>{obj.rating}</TableCellItem>
    <TableCellItem>{obj.discount}</TableCellItem>
    <TableCellItem>{obj.purchasedGoods}</TableCellItem>
    <TableCellItem>{obj.lastOrder}</TableCellItem>
    <TableCellItem>icon</TableCellItem>
    <TableCellItem>icon</TableCellItem>
    <TableCellItem>icon</TableCellItem>
  </tr>
)
   }
    </>
  )
}

export default UserLineInfo