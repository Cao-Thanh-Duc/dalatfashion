import { useContext, useEffect } from "react";
import { MyContext } from "../../App";
import Logo from "../../assets/images/DALAT.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";


const Register = () => {
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
            <h2 className="text-center mb-3">ĐĂNG KÝ</h2>
            <div className="row">
              <div className="form-group">
                <TextField
                  id="standard-basic"
                  label="Họ và tên"
                  type="fullname"
                  required
                  variant="standard"
                  className="w-100"
                />
              </div>
            </div>

            <div className="form-group">
              <TextField
                id="standard-basic"
                label="Email hoặc số điện thoại"
                type="username"
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
            <div className="form-group">
              <TextField
                id="standard-basic"
                label="Nhập lại mật khẩu"
                type="confirmpassword"
                required
                variant="standard"
                className="w-100"
              />
            </div>

            <div className=" d-flex align-items-center">
              <Button
                className="btn-blue btn-lg btn-big w-100 mt-3 mb-3"
                variant="outlined"
              >
                {" "}
                ĐĂNG KÝ
              </Button>
            </div>

            <p className="txt">
              {" "}
              Bạn đã có tài khoản?{" "}
              <Link to="/login" className="border-effect">
                {" "}
                Đăng nhập
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Register;
