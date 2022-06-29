import React from 'react'

function UserLineInfo({data}) {
    console.log(data);
  return (
    <>
   {data &&
data.map((obj, id)=>
    <tr key={obj.id}>
    <td><img src={obj.img} alt='фото пользователя'></img></td>
    <td><p>{obj.login}</p></td>
    <td>{obj.RegistrationDate}</td>
    <td>{obj.userStatus}</td>
    <td>{obj.rating}</td>
    <td>{obj.discount}</td>
    <td>{obj.purchasedGoods}</td>
    <td>{obj.lastOrder}</td>
    <td>icon</td>
    <td>icon</td>
    <td>icon</td>
  </tr>
)
   }
    </>
  )
}

export default UserLineInfo