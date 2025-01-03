import { useContext, useEffect } from "react";
import { MyContext } from "../../App";
import Logo from "../../assets/images/DALAT.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Google from "../../assets/images/gg.png";
const Login = () => {
  const context = useContext(MyContext);
  useEffect(() => {
    context.setIsHeaderFooterShow(false);
  }, []);
  const handleClick = (event) => { event.preventDefault(); window.history.pushState({}, '', '/'); window.location.reload(); };
  return (
    <section className="section loginPage">
      <div className="shape-bottom">
      </div>
      <div className="container">
        <div className="box card p-3 shadow border-0">
          <div className="text-center">
            <Link to="/" onClick={handleClick}>
              <img src={Logo} className="logo_login" />
            </Link>
          </div>

          <form className="mt-3">
            <h2 className="text-center mb-3">ĐĂNG NHẬP</h2>

            <div className="form-group">
              <TextField
                id="standard-basic"
                label="Email hoặc số điện thoại"
                type="email"
                required
                variant="standard"
                className="w-100"
              />
            </div>
            <div className="form-group">
              <TextField
                id="standard-basic"
                label="Mật khẩu"
                type="password"
                required
                variant="standard"
                className="w-100"
              />
            </div>
            <a className="border-effect cursor txt" href="#">
              Quên mật khẩu?
            </a>

            <div className=" d-flex align-items-center">
              <Button
                className="btn-blue btn-lg btn-big w-100 mt-3 mb-3"
                variant="outlined"
              >
                {" "}
                ĐĂNG NHẬP
              </Button>
            </div>

            <p className="txt">
              {" "}
              Bạn chưa có tài khoản?{" "}
              <Link to="/register" className="border-effect">
                {" "}
                Đăng ký
              </Link>
            </p>
            
            <Button className="loginWithGoogle mt-2 border">
              <img src={Google} /> Đăng nhập với Google
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Login;
