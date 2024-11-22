import { GrUpdate } from "react-icons/gr";
import { TbTruckDelivery } from "react-icons/tb";
import { RiDiscountPercentLine } from "react-icons/ri";
import { CiBadgeDollar } from "react-icons/ci";
import { Link } from "react-router-dom";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineTikTok } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="topInfo row">
          <div className="col d-flex align-items-center">
            <span>
              <GrUpdate />
            </span>
            <span className="ml-2"> Luôn cập theo xu hướng</span>
          </div>

          <div className="col d-flex align-items-center">
            <span>
              <TbTruckDelivery />
            </span>
            <span className="ml-2"> Freeship cho hóa đơn trên 500K</span>
          </div>

          <div className="col d-flex align-items-center">
            <span>
              <RiDiscountPercentLine />
            </span>
            <span className="ml-2"> Săn Deal hời hàng ngày</span>
          </div>

          <div className="col d-flex align-items-center">
            <span>
              <CiBadgeDollar />
            </span>
            <span className="ml-2"> Hàng xịn giá rẻ nhất thị trường</span>
          </div>
        </div>
        <div className="row mt-5 linksWrap">
          <div className="col">
            <ul>
              <h5> DỊCH VỤ KHÁCH HÀNG</h5>
              <li>
                <Link to="#">Chính sách khách hàng thân thiết</Link>
              </li>
              <li>
                <Link to="#">Chính sách đổi trả</Link>
              </li>
              <li>
                <Link to="#">Chính sách bảo mật</Link>
              </li>
              <li>
                <Link to="#">Hướng dẫn chọn size</Link>
              </li>
              <li>
                <Link to="#">Đăng ký đối tác</Link>
              </li>
            </ul>
          </div>

          <div className="col">
            <ul>
              <h5> THÔNG TIN VỀ CHÚNG TÔI</h5>
              <li>
                <Link to="#">Giới thiệu</Link>
              </li>
              <li>
                <Link to="#">Liên hệ</Link>
              </li>
              <li>
                <Link to="#">Tuyển dụng</Link>
              </li>
              <li>
                <Link to="#">Tin tức</Link>
              </li>
              <li>
                <Link to="#">Hệ thống cửa hàng</Link>
              </li>
            </ul>
          </div>

          <div className="col">
            <ul>
              <h5>LIÊN HỆ</h5>
              <li>
                <Link to="https://s.net.vn/bgDd">
                  Địa chỉ: 120 Hoàng Minh Thảo, phường Hòa Khánh Nam,
                  <br /> Quận Liên Chiểu, Thành phố Đà Nẵng
                </Link>
              </li>
              <li>
                <Link to="#">Số điện thoại: 1900.1900</Link>
              </li>
              <li>
                <Link to="https://s.net.vn/10Der">
                  Email: support@dalatfashion.com.vn
                </Link>
              </li>
              <li className="Social">
                <span className="mxh"> Mạng xã hội: </span>
                <span>
                  <Link to="https://www.facebook.com/">
                    {" "}
                    <RiFacebookCircleLine />
                  </Link>
                </span>
                <span>
                  <Link to="https://www.instagram.com/">
                    {" "}
                    <FaInstagram />
                  </Link>
                </span>
                <span>
                  <Link to="https://www.tiktok.com/">
                    {" "}
                    <AiOutlineTikTok />
                  </Link>
                </span>
                <span>
                  <Link to="https://www.youtube.com/">
                    {" "}
                    <FaYoutube />
                  </Link>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" copyright mt-3 pt-3 pb-3 d-flex">
        <ul>
          <li> Công ty Cổ phần Dalat Fashion. Mã só thuế: 0314 123 456</li>
          <li></li>
          <li>
            {" "}
            Bản quyền 2024 © thuộc vê DALAT Fashion. Nghiêm cấm sao chép dưới
            mọi hình thức.
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
