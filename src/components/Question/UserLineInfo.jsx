import React from 'react'
import styled from 'styled-components';
import {
  SearchIcon,
  ProfileIcon,
  LockIcon,
  TrashIcon,
  CollapseIcon,

} from "../../assets/icons";
const UserPhoto = styled.img`
width: 30px;
height: 30px;
`;
const TableCell = styled.tr`
height: 30px;
`;
const TableCellItem = styled.td`
text-align: center;
padding-left: 20px;
`;
const TableCellItemError = styled.td`
font-size: 16px;
line-height:16px
`;
const ReverceTableCell = styled.div`
transform: rotate(180deg);
margin-left: 10px;
`;
function UserLineInfo({data}) {
  const [reverse, setReverse] = React.useState(false)

  return (
    <>
   {data 
  ? data.map((obj)=>
    <TableCell  onClick={(e) => console.log(TableCell.contains(e.target))} key={obj.id}>
    <TableCellItem><UserPhoto src={obj.imgUrl} alt='фото пользователя'/></TableCellItem>
    <TableCellItem><p>{obj.login}</p></TableCellItem>
    <TableCellItem>{obj.RegistrationDate}</TableCellItem>
    <TableCellItem>{obj.userStatus}</TableCellItem>
    <TableCellItem>{obj.rating}</TableCellItem>
    <TableCellItem>{obj.discount}</TableCellItem>
    <TableCellItem>{obj.purchasedGoods}</TableCellItem>
    <TableCellItem>{obj.lastOrder}</TableCellItem>
    <TableCellItem><LockIcon color='#EE7500' bg='#2f2f2f' size={30} height={20} width={30}/></TableCellItem>
    <TableCellItem><TrashIcon color='#EE7500' bg='#2f2f2f' height={30} width={30}/></TableCellItem>
    <TableCellItem>{reverse 
   ?<CollapseIcon color='#EE7500' bg='#2f2f2f' size={20} reverse={true}/> 
   :  <ReverceTableCell><CollapseIcon color='#EE7500' bg='#2f2f2f' size={20} reverse={false}/></ReverceTableCell>
   }
   </TableCellItem>
  </TableCell>
)
: <TableCell>
  <TableCellItemError>Данные не были полученны</TableCellItemError>
</TableCell>
   }
    </>
  )
}

export default UserLineInfo