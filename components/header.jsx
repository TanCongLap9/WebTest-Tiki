import * as React from 'react';
import axios from "axios"
import * as ReactQuery from 'react-query';
const fetcher = url => fetch(url).then(response => response.json());
const queryClient = new ReactQuery.QueryClient;
const TimKiemTheoTheLoai = () => {
  const {data: theLoai, loading, error} = ReactQuery.useQuery(["data1"], fetcher.bind(undefined, "https://62ecdb67818ab252b603f9f3.mockapi.io/header__theloai"));
  if (error) return <p>Error: {error}</p>
  if (loading || theLoai === undefined) return <p>Loading</p>
  return (
    <table className="header__theloai">
      <tbody>
        <tr>
        {theLoai.map(v => (
            <td>{v.name}</td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}
const TimKiem = () => (
  <>
    <div>
      <input
        className="header__timkiem"
        type="search"
        placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn..."
      />
      <input className="header__nuttimkiem" type="submit" value="Tìm kiếm" />
    </div>
    <TimKiemTheoTheLoai />
  </>
)

const Header = () => (
  <ReactQuery.QueryClientProvider client={queryClient}>
    <header className="header">
      <div className="header__content">
        <div className="header__logo">
          <img
            className="header__logo-tiki"
            src="https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png"
            alt="Tiki"
          />
          <br />
          <img
            className="header__logo-freeship"
            src="https://salt.tikicdn.com/ts/upload/e5/1d/22/61ff572362f08ead7f34ce410a4a6f96.png"
            alt="Freeship"
          />
        </div>
        <TimKiem/>
        <div className="header__dangnhap">
          <img src="https://salt.tikicdn.com/ts/upload/67/de/1e/90e54b0a7a59948dd910ba50954c702e.png" />
          <div>
            <p>Đăng nhập / Đăng ký</p>
            <p>Tài khoản▼</p>
          </div>
        </div>
        <div className="header__giohang">
          <img src="https://salt.tikicdn.com/ts/upload/40/44/6c/b80ad73e5e84aeb71c08e5d8d438eaa1.png" />
          <p>Giỏ hàng</p>
        </div>
        <button className="header__banhang">
          <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icon-seller.svg" />
          Bán hàng cùng Tiki
        </button>
      </div>
    </header>
  </ReactQuery.QueryClientProvider>
);
export default Header;
