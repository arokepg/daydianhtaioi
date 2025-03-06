import React from "react";
import './Main.css';

function Main() {
  return (
    <div className="Main">
      <h1 className="Title">Dậy Đi Anh Tài Ơi!</h1>
      <div className="Buttons">
        <a href='/Rewatch' id="Rewatch" className="Button">Xem lại</a>
        <a href='/AboutUs' id="AboutUs" className="Button">Về Chúng Tôi</a>
        <a href='/Quit 'id="Quit" className="Button">Thoát</a>
        {/* <LangSwitch></LangSwitch> */}
      </div>
    </div>
  );
}

export default Main;