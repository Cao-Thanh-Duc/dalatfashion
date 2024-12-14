import Button from '@mui/material/Button';
import React from 'react';
import { FaRegCircleUser, FaTruckFast } from 'react-icons/fa6';
import { GrCart } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import Logo from '../../assets/images/DALAT.png';
import { getAccessTokenFromLS } from '../../utils/storage';
import Navigation from './Navigation';
import SearchBox from './SearchBox';

const Header = () => {
  const token = getAccessTokenFromLS();

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    arrows: false,
  };
  return (
    <div className='headerWrapper'>
      <div className='top-strip bg-blue'>
        <div className='container'>
          <p className='mb-0 mt-0 text-center'>
            <Slider {...settings}>
              <span>
                Nhận ngay deal hời với <b>DALAT FASHION</b> ngay duy nhất trong ngày 12 tháng 12
              </span>
              <span>Giao nhanh miễn phí cho hóa đơn từ 500K</span>
              <span>Black Friday Siêu sale giảm giá, nhận quà cực khủng</span>
            </Slider>
          </p>
        </div>
      </div>

      <header className='header'>
        <div className='container'>
          <div className='row'>
            <div className='logoWrapper d-flex align-items-center col-sm-2'>
              <Link to={'/'}>
                <img src={Logo} alt='Logo' />
              </Link>
            </div>
            <div className=' col-sm-10 d-flex align-items-center part2'>
              <SearchBox />

              <div className='part3 d-flex align-items-center ml-auto'>
                {!token ? (
                  <Link to='/login'>
                    <Button className='btn-blue btn-round mr-3'>Đăng nhập</Button>
                  </Link>
                ) : (
                  <Button className='circle mr-3'>
                    <FaRegCircleUser />
                  </Button>
                )}

                <div className='ml-auto cartTab d-flex align-items-center'>
                  <div className='position-relative ml-2'>
                    <Link to='/cart'>
                      <Button className='circle '>
                        <GrCart />
                      </Button>
                    </Link>
                    <span className=' count d-flex align-items-center justify-content-center'>
                      3
                    </span>
                  </div>
                </div>
                <Button className='delivery '>
                  <FaTruckFast />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Navigation />
    </div>
  );
};
export default Header;
