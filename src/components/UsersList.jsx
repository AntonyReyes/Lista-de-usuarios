import axios from 'axios'
import React from 'react'

const UsersList = ({ user, getAllUser, setUpdateInfoUser, handleOpenForm }) => {

  const deleteUser = () => {

    var resultado = window.confirm(`Estas seguro de eliminar a ${user.name} ${user.genre}`);
    if (resultado === true) {
      
      const URL = `http://144.126.218.162:8000/movies/${user.id}/`
      axios.delete(URL)
        .then(res => {
          getAllUser()
        })
        .catch(err => console.log(err))
        window.alert(`El usuario ${user.name} ${user.genre} se ah eliminado`);

    } else {
      window.alert('El usuario no fue eliminado ');
    }

   
  }

  const handleUpdateClick = () => {
    handleOpenForm()
    setUpdateInfoUser(user)
  }

  return (
    <article className='card'>
      <h2 className='card__title'>{user.name} {user.genre}</h2>
      <hr className='card__hr' />
      <ul className='card__list'>
        <li className='card__item'><span className='card__span'>EMAIL</span></li>
        <li className='card__item'>{user.duration}</li>
        <li className='card__item'><span className='card__span'>BIRTHDAY</span></li>
        <li className='card__item'>
          <img className='card__img_svg' src="https://w7.pngwing.com/pngs/355/39/png-transparent-gift-computer-icons-desktop-gift-miscellaneous-angle-text.png" alt="" />  {user['release_date']}</li>
      </ul>
      <hr className='card__hr' />
      <div className='card__footer'>
        <button onClick={deleteUser} className='card__btn'>
          <img className='card__img_svg' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Delete-button.svg/404px-Delete-button.svg.png" alt="" />
        </button>
        <button onClick={handleUpdateClick} className='card__btn'>
          <img className='card__img_svg' src="https://img2.freepng.es/20181106/jeh/kisspng-computer-icons-pencil-portable-network-graphics-ed-pencil-svg-png-icon-free-download-511369-onli-5be2291e567cb7.4392000015415483183543.jpg" alt="" />
        </button>
      </div>

    </article>
  )
}

export default UsersList