import React from 'react';
import './Login.css';
const Signin = () => {
  return (

 
 <div className="body-Login mb-1">
      <section className="container" dir="rtl" lang="ar">
  <div className="row">
    <div className="col-sm-12">
      <div className="content"style={{ height:"695px" }}>
        <div className="text">الدخول إلى حسابك</div>
        <form action="#" id="form1" >
          <div className="field">
            <input required="" type="text " className="input" id="firstName" placeholder="أدخل إسمك" />
            <span className="span">
              <svg
                className=""
                xmlSpace="preserve"
                style={{ enableBackground: "new 0 0 512 512" }}
                viewBox="0 0 512 512"
                y={0}
                x={0}
                height={20}
                width={50}
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g />
              </svg>
            </span>
            <label className="label" >  أدخل إسمك</label>
          </div>
          <div id="error-message1" role="alert">
            <ul id="errors1" style={{ width: 44 }} />
          </div>
          <br />
          <div className="field">
            <input required="" type="text" className="input" id="email" placeholder=" بريدك الالكتروني "/>
            <span className="span">
              <svg
                className=""
                xmlSpace="preserve"
                style={{ enableBackground: "new 0 0 512 512" }}
                viewBox="0 0 512 512"
                y={0}
                x={0}
                height={20}
                width={50}
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g />
              </svg>
            </span>
            <label className="label">  بريدك الالكتروني</label>
          </div>
          <div
            id="error-message2"
            className="alert alert-danger d-none"
            role="alert"
          >
            <ul id="errors2" />
          </div>
          <br />
          <div className="field">
            <input
              required=""
              type="password"
              className="input"
              id="password"
              placeholder="أدخل كلمه سرك "
            />
            <span className="span">
              <svg
                className=""
                xmlSpace="preserve"
                style={{ enableBackground: "new 0 0 512 512" }}
                viewBox="0 0 512 512"
                y={0}
                x={0}
                height={20}
                width={50}
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g />
              </svg>
            </span>
            <label className="label">كلمه السر</label>
          </div>
          <div
            id="error-message5"
            className="alert alert-danger d-none"
            role="alert"
          >
            <ul id="errors5" />
          </div>
          <br />
          <div className="field">
            <input
              required=""
              type="password"
              className="input"
              id="confirmpass"
              placeholder="أكد كلمه سرك"
            />
            <span className="span">
              <svg
                className=""
                xmlSpace="preserve"
                style={{ enableBackground: "new 0 0 512 512" }}
                viewBox="0 0 512 512"
                y={0}
                x={0}
                height={20}
                width={50}
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g />
              </svg>
            </span>
            <label className="label">تأكيد كلمه السر </label>
          </div>
          {/* style message error****************** */}
          <div
            id="error-message6"
            className="alert alert-danger d-none"
            role="alert"
          >
            <ul id="errors6" />
          </div>
          <div className="forgot-pass">
            <a href="#">هل نسيت كلمه السر ؟</a>
          </div>
          <div
            id="error-message"
            className="alert alert-danger d-none"
            role="alert"
          >
            <ul id="errors1" />
          </div>
          <button className="button" id="loginButton">
            تسجيل
          </button>
          <div className="sign-up">
            هل أنت طبيب ؟<a href="signup.html"> تسجيل طبيب جديد</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
 </div>
  
  );
}

export default Signin;    