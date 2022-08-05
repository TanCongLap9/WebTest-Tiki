import * as React from "react";
let theLoai;
fetch(String.raw`https://62ecdb67818ab252b603f9f3.mockapi.io\header__theloai`).then(response => response.json()).then(json => {theLoai = json})


const Header = () => (
  <div className="header">
    <img />
    <input className="header__timkiem" type="search" placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn..."/>
    <input className="header__nuttimkiem" type="submit" value="Tìm kiếm"/>
    <div className="header__dangnhap"></div>
    <div className="header__giohang"></div>
    <button className="header__banhang"></button>
    <table className="header__theloai">
      <tbody><tr>
      {
        undefined
      }
      </tr></tbody>
    </table>
  </div>
);
export default Header;