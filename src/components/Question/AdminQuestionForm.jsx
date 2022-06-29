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


const TableNamesContainer = styled.div`
display: flex;
`;
const TableCell = styled.th``;
const ReverceTableCell = styled.div`
transform: rotate(180deg);
`;
function AdminQuestion() {
const fakeData = {
img: 'link',
login: 'IvanPro1990',
RegistrationDate: '01.03.2022',
userStatus: 'Онлайн',
rating: 'Silver',
discount: '10%',
purchasedGoods: '19 шт.',
lasrOrder: '28.02.2022',
online: 'true'
}
const [userData, setUserData] = React.useState();
  
React.useEffect(() => {
  const apiUrl = 'http://localhost:3001/userData';
  axios.get(apiUrl).then((resp) => {
    const allPersons = resp.data;
    setUserData(allPersons);
    // console.log(allPersons);
  });
}, [setUserData]);
  const [reverse, setReverse] = React.useState(false)

  return (
    <>
   <table>
    <tbody>
    <tr>
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
</tr>
  <UserLineInfo data={userData}></UserLineInfo>
  </tbody>
</table>
    </>
  )
}

export default AdminQuestion