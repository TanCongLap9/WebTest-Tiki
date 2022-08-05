import * as React from "react";
const theLoai = fetch(String.raw`https://62ecdb67818ab252b603f9f3.mockapi.io\header__theloai`).then(response => response.json()).then(data => console.log(data));



/*const Header = () => (
  <div className="header">
    <img />
    <input type="search"/>
    <input type="submit"/>
    <div className="header__dangnhap"></div>
    <div className="header__giohang"></div>
    <button className="header__banhang"></button>
    <table className="header__theloai">
      <tbody><tr>
      {theLoai.map(obj => (
        <td></td>
      ))}
      </tr></tbody>
    </table>
  </div>
);
export default Header;*/