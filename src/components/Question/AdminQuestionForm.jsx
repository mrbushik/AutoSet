import React from 'react'
import styled from 'styled-components';
import axios from 'axios'
import UserLineInfo from './UserLineInfo';
import {
  SearchIcon,
  ProfileIcon,
  LockIcon,
  TrashIcon,
  CollapseIcon,

} from "../../assets/icons";

const Table = styled.table`

`;
const TableHeader = styled.thead`
height: 30px
`;
const TableNamesContainer = styled.div`
display: flex;
`;
// display: flex;
const TableCell = styled.th`
`;
const ReverceTableCell = styled.div`
transform: rotate(180deg);
`;
const TableContainer = styled.tr`
`;
function AdminQuestion() {
const [userData, setUserData] = React.useState();
React.useEffect(() => {
  const apiUrl = 'http://localhost:3001/userData';
  axios.get(apiUrl).then((resp) => {
    const allPersons = resp.data;
    setUserData(allPersons);
  });
}, [setUserData]);
  const [reverse, setReverse] = React.useState(false)

  return (
    <>
   <table>
   <TableHeader>
   <TableContainer>
  <TableCell><ProfileIcon color='#EE7500' bg='#2f2f2f' size={30} height={30}/></TableCell>
  <TableCell><TableNamesContainer><p>Логин пользователя</p> 
  <SearchIcon  color='#EE7500' bg='#2f2f2f' size={34}/></TableNamesContainer></TableCell>
   <TableCell>Дата регистрации</TableCell>
   <TableCell>Статус</TableCell>
   <TableCell>Рейтинг</TableCell>
   <TableCell>Скидка</TableCell>
   <TableCell>Куплено товаров</TableCell>
   <TableCell>Последний заказ</TableCell>
   <TableCell><LockIcon color='#EE7500' bg='#2f2f2f' size={30} height={20} width={30}/></TableCell>
   <TableCell><TrashIcon color='#EE7500' bg='#2f2f2f' height={30} width={30}/></TableCell>
   <TableCell>{reverse 
   ? <ReverceTableCell><CollapseIcon color='#EE7500' bg='#2f2f2f' size={20} reverse={true}/></ReverceTableCell>
   : <CollapseIcon color='#EE7500' bg='#2f2f2f' size={20} reverse={true}/>}</TableCell>
</TableContainer>
   </TableHeader>
<tbody>
  <UserLineInfo data={userData}></UserLineInfo>
  </tbody>
</table>
    </>
  )
}

export default AdminQuestion