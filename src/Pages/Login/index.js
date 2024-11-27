import { useContext, useEffect } from "react";
import { MyContext } from "../../App";
import Logo from "../../assets/images/DALAT.png";
import TextField from '@mui/material/TextField';

const Login = ()=>{
   const context = useContext(MyContext);
    useEffect(()=>{
context.setIsHeaderFooterShow(false);
    },[]);
return(
   
//     <section className="section loginPage">
//         <div className="shape-bottom"> 
//   <svg fill="#fff" id="Layer_1" x="0px" y="0px" viewBox="0 0 1921 819.8" style="enable-background:new 0 0 1921 819.8;" xml:space="preserve"> 
//     <path class="st0" d="M1921,413.1v406.7H0v0.5h0.4l1228.1,598.3c0,74.4,80.8,130.6,152.5,168.6c107.6,57,212.1,40.7,245.7,34.4 c22.4-4.2,54.9-13.1,97.5-26.6L1921,400.5V413.1z"/> 
//   </svg> 
// </div>


// <div className="container">
//     <h1> ĐĂNG NHẬP</h1>
// </div>
//     </section>

<section className="section loginPage">
<div className="shape-bottom"> 
  <svg fill="#fff" id="Layer_1" x="0px" y="0px" viewBox="0 0 1921 819.8" style={{enableBackground: 'new 0 0 1921 819.8'}}>
    <path class="st0" d="M1921,413.1v406.7H0v0.5h0.41228.1,598.3c70,74.4,80.8,130.6,152.5,168.6c107.6,57,212.1,40.7,245.7,34.4 c22.4-4.2,54.9-13.1,97.5-26.6L1921,400.5V413.12"></path>
  </svg>
</div>
<div className="container">
  <div className="box card p-3 shadow border-0">
    <div className="text-center">
      {/* <img src={Logo} alt="Logo"/> */}
    </div>
    
    
    <form>
    <h2 className="text-center">ĐĂNG NHẬP</h2>
    <br/>
        <div className="form-group"><TextField id="standard-basic" label="Tên đăng nhập"type="email" required variant="standard" className="w-100" /></div>
        <br/>
        <div className="form-group"><TextField id="standard-basic" label="Mật khẩu" type="password" required variant="standard" className="w-100" /></div>
        <br/><a className="border-effect cursor" >Quên mật  khẩu?</a>
    </form>
  </div>
</div>
</section>

  
  
)
}
export default Login;