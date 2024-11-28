import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isopenSidebarVal, setisopenSidebarVal] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    if (location.pathname === "/") {
      setisopenSidebarVal(true);
    } else {
      setisopenSidebarVal(false);
    }
  }, [location]);

  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-2 navPart1">
            {location.pathname === "/" && (
              <div className="catWrapper">
                <Button
                  className="allCartTab align-items-center"
                  onClick={() => setisopenSidebarVal(!isopenSidebarVal)}
                >
                  <span className="icon1 mr-2">
                    <IoIosMenu />
                  </span>
                  <span className="text"> DANH MỤC </span>
                  <span className="icon2 ml-2">
                    <FaAngleDown />
                  </span>
                </Button>
                <div className={`sidebarnav ${isopenSidebarVal ? "open" : ""}`}>
                  <ul>
                    <li>
                      <Link to="/">
                        <Button>
                          Nam <FaAngleRight className="ml-auto" />
                        </Button>
                      </Link>
                      <div className="submenu">
                        <Link to="/">
                          <Button> Quần tây </Button>
                        </Link>
                        <Link to="/">
                          <Button> Quần jean </Button>
                        </Link>
                        <Link to="/">
                          <Button> Quần short </Button>
                        </Link>
                        <Link to="/">
                          <Button> Quần kaki </Button>
                        </Link>
                        <Link to="/">
                          <Button> Áo thun </Button>
                        </Link>
                        <Link to="/">
                          <Button> Áo sơmi </Button>
                        </Link>
                        <Link to="/">
                          <Button> Áo polo </Button>
                        </Link>
                        <Link to="/">
                          <Button> Áo khoác </Button>
                        </Link>
                      </div>
                    </li>
                    <li>
                      <Link to="/">
                        <Button>
                          Nữ <FaAngleRight className="ml-auto" />
                        </Button>
                      </Link>
                      <div className="submenu">
                        <Link to="/">
                          <Button> Quần tây </Button>
                        </Link>
                        <Link to="/">
                          <Button> Quần jean </Button>
                        </Link>
                        <Link to="/">
                          <Button> Quần Legging </Button>
                        </Link>
                        <Link to="/">
                          <Button> Chân váy </Button>
                        </Link>
                        <Link to="/">
                          <Button> Váy Babydoll </Button>
                        </Link>
                        <Link to="/">
                          <Button> Áo sơmi </Button>
                        </Link>
                        <Link to="/">
                          <Button> Áo Croptop </Button>
                        </Link>
                        <Link to="/">
                          <Button> Áo khoác </Button>
                        </Link>
                      </div>
                    </li>
                    <li>
                      <Link to="/">
                        <Button>
                          Phụ kiện <FaAngleRight className="ml-auto" />
                        </Button>
                      </Link>
                      <div className="submenu">
                        <Link to="/">
                          <Button> Giày dép</Button>
                        </Link>
                        <Link to="/">
                          <Button> Túi xách </Button>
                        </Link>
                        <Link to="/">
                          <Button> Mũ </Button>
                        </Link>
                        <Link to="/">
                          <Button> Thắt lưng </Button>
                        </Link>
                      </div>
                    </li>
                    <li>
                      <Link to="/">
                        <Button>Tin Tức </Button>
                      </Link>
                    </li>
                    <li>
                      <Link to="/introduct-dalatfashion/">
                        <Button>Giới thiệu </Button>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <Button>Liên hệ </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          <div className="col-sm-10 navPart2 d-flex align-center">
            <ul className="list list-inline w100">
              <li className="list-inline-item">
                <Link to="/cat">
                  <Button> NAM</Button>
                </Link>
                <div className="submenu shadow">
                  <Link to="/">
                    <Button> Quần tây </Button>
                  </Link>
                  <Link to="/">
                    <Button> Quần jean </Button>
                  </Link>
                  <Link to="/">
                    <Button> Quần short </Button>
                  </Link>
                  <Link to="/">
                    <Button> Quần kaki </Button>
                  </Link>
                  <Link to="/">
                    <Button> Áo thun </Button>
                  </Link>
                  <Link to="/">
                    <Button> Áo sơmi </Button>
                  </Link>
                  <Link to="/">
                    <Button> Áo polo </Button>
                  </Link>
                  <Link to="/">
                    <Button> Áo khoác </Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/cat">
                  <Button> UNISEX </Button>
                </Link>
                <div className="submenu shadow">
                  <Link to="/">
                    <Button> Quần tây </Button>
                  </Link>
                  <Link to="/">
                    <Button> Quần jean </Button>
                  </Link>
                  <Link to="/">
                    <Button> Quần short </Button>
                  </Link>
                  <Link to="/">
                    <Button> Quần kaki </Button>
                  </Link>
                  <Link to="/">
                    <Button> Áo thun </Button>
                  </Link>
                  <Link to="/">
                    <Button> Áo sơmi </Button>
                  </Link>
                  <Link to="/">
                    <Button> Áo polo </Button>
                  </Link>
                  <Link to="/">
                    <Button> Áo khoác </Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/cat">
                  <Button> NỮ </Button>
                </Link>
                <div className="submenu shadow">
                  <Link to="/">
                    <Button> Quần tây </Button>
                  </Link>
                  <Link to="/">
                    <Button> Quần jean </Button>
                  </Link>
                  <Link to="/">
                    <Button> Quần Legging </Button>
                  </Link>
                  <Link to="/">
                    <Button> Chân váy </Button>
                  </Link>
                  <Link to="/">
                    <Button> Váy Babydoll </Button>
                  </Link>
                  <Link to="/">
                    <Button> Áo sơmi </Button>
                  </Link>
                  <Link to="/">
                    <Button> Áo Croptop </Button>
                  </Link>
                  <Link to="/">
                    <Button> Áo khoác </Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/cat">
                  <Button> PHỤ KIỆN </Button>
                </Link>
                <div className="submenu shadow">
                  <Link to="/">
                    <Button> Giày dép</Button>
                  </Link>
                  <Link to="/">
                    <Button> Túi xách </Button>
                  </Link>
                  <Link to="/">
                    <Button> Mũ </Button>
                  </Link>
                  <Link to="/">
                    <Button> Thắt lưng </Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button> TIN TỨC </Button>
                </Link>
              </li>
              <li className="list-inline-item ">
                <Link to="/introduct-dalatfashion">
                  <Button
                    className={
                      isActive("/introduct-dalatfashion") ? "activeGT" : ""
                    }
                  >
                    {" "}
                    GIỚI THIỆU{" "}
                  </Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="contact-dalatfashion">
                  <Button> LIÊN HỆ </Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
