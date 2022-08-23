import * as React from 'react';
import axios from "axios"
import * as ReactQuery from 'react-query';
const fetcher = url => fetch(url).then(response => response.json());
const queryClient = new ReactQuery.QueryClient;
const TimKiemTheoTheLoai = (props) => {
  const {data: theLoai, loading, error} = ReactQuery.useQuery(["data1"], fetcher.bind(undefined, props.theLoai));
  if (error) return <p>Error: {error}</p>
  if (loading || theLoai === undefined) return <p>Loading</p>
  return (
    <table className="header__theloai whitetext">
      <tbody>
        <tr>
        {theLoai.map(v => (
            <td><span>{v.name}</span></td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}
const Logo = (props) => (
  <div className="header__logo">{
    props.logo === "top" ?
    <img
      className="header__logo-tiki"
      src="https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png"
      alt="Tiki"
    />
    : props.logo === "bottom" ? <img
      className="header__logo-freeship"
      src="https://salt.tikicdn.com/ts/upload/e5/1d/22/61ff572362f08ead7f34ce410a4a6f96.png"
      alt="Freeship"
    /> : undefined
    }
  </div>
)
const TimKiem = (props) => (
  props.mucTheLoai ? <TimKiemTheoTheLoai theLoai={props.theLoai}/> :
  <form>
    <input
      className="header__timkiem"
      type="search"
      placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn..."
    />
    <input className="header__nuttimkiem whitetext" type="submit" value="🔍Tìm kiếm" />
  </form>
)

const DangNhap = () => (
  <div className="header__dangnhap whitetext">
    <img className="header__dangnhap-logo" src="https://salt.tikicdn.com/ts/upload/67/de/1e/90e54b0a7a59948dd910ba50954c702e.png" />
    <div>
      <span>Đăng nhập / Đăng ký</span>
      <br/>
      <span>Tài khoản▼</span>
    </div>
  </div>
)

const GioHang = () => (
  <div className="header__giohang whitetext">
    <img className="header__giohang-logo" src="https://salt.tikicdn.com/ts/upload/40/44/6c/b80ad73e5e84aeb71c08e5d8d438eaa1.png" />
    <span>Giỏ hàng</span>
  </div>
)

const BanHang = () => (
  <button className="header__banhang whitetext">
    <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icon-seller.svg" />
    Bán hàng cùng Tiki
  </button>
)

const Header = () => (
  <ReactQuery.QueryClientProvider client={queryClient}>
    <header className="header">
      <div className="header__top widthlimit">
        <Logo logo="top"/>
        <TimKiem theLoai="https://62ecdb67818ab252b603f9f3.mockapi.io/header__theloai" mucTheLoai={false}/>
        <DangNhap/>
        <GioHang/>
      </div>
      <div className="header__bottom widthlimit">
        <Logo logo="bottom"/>
        <TimKiem theLoai="https://62ecdb67818ab252b603f9f3.mockapi.io/header__theloai" mucTheLoai={true}/>
        <BanHang/>
      </div>
    </header>
  </ReactQuery.QueryClientProvider>
);
export default Header;
