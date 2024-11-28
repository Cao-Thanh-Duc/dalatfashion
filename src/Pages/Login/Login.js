import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../../App';
import Logo from '../../assets/images/DALAT.png';
import './login.css';

export default function Login() {
  const context = useContext(MyContext);
  useEffect(() => {
    context.setIsHeaderFooterShow(false);
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
    window.history.pushState({}, '', '/');
    window.location.reload();
  };

  return (
    <div className='form-login-main'>
      <div class='right-section'>
        <Link to='/' onClick={handleClick}>
          <img src={Logo} className='logo_login' />
        </Link>
        <h2 className='form-title'>Đăng nhập</h2>
        <p className='form-login-desc'>Hãy nhập thông tin của bạn vào các ô dưới đây</p>
        <form>
          <input type='email' placeholder='Email hoặc Số điện thoại' required />
          <input type='password' placeholder='Mật khẩu' required />
          <div className='form-login-footer'>
            <button type='submit' className='btn-login'>
              Đăng nhập
            </button>
            <a href='#' class='forgot-password'>
              Quên mật khẩu?
            </a>
          </div>
          <Link to='/register'>
            <p className='form-footer'>Bạn chưa có tài khoản</p>
          </Link>
        </form>
      </div>
    </div>
  );
}
