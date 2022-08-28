import * as React from 'react';
import axios from "axios"
import * as ReactQuery from 'react-query';
const fetcher = url => fetch(url).then(response => response.json());
const queryClient = new ReactQuery.QueryClient;
const TimKiemTheoTheLoai = (props) => {
  const {data: theLoai} = ReactQuery.useQuery([], fetcher.bind(undefined, props.theLoai));
  if (theLoai === undefined) return <table className="header__theloai whitetext"><span>Loading</span></table>
  return (
    <table className="header__theloai whitetext">
      <tbody>
        <tr>
        {theLoai.data?.map(v => <td><span>{v.name}</span></td>)}
        </tr>
      </tbody>
    </table>
  );
}
const Logo = (props) => (
    props.logo === "top" ?
    <div className="header__logotop">
      <img
        className="header__logotop-tiki"
        src="https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png"
        alt="Tiki"
      />
    </div>
    : props.logo === "bottom" ? <div className="header__logobottom"><img
      className="header__logobottom-freeship"
      src="https://salt.tikicdn.com/ts/upload/e5/1d/22/61ff572362f08ead7f34ce410a4a6f96.png"
      alt="Freeship"
    /></div> : undefined
)
const TimKiem = (props) => (
  props.mucTheLoai ? <TimKiemTheoTheLoai theLoai={props.theLoai}/> :
  <form className="header__formtimkiem">
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
  <div className="header__banhang whitetext">
    <button className="header__banhang-nut whitetext">
      <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icon-seller.svg" />
      Bán hàng cùng Tiki
    </button>
  </div>
)
const [LeftSide, RightSide] = ["header__leftside", "header__rightside"].map(v => props => <div className={v}>{props.children}</div>)

const Header = () => (
  <ReactQuery.QueryClientProvider client={queryClient}>
    <header className="header">
      <div className="header__top widthlimit">
        <Logo logo="top"/>
        <TimKiem mucTheLoai={false}/>
        <DangNhap/>
        <GioHang/>
      </div>
      <div className="header__bottom widthlimit">
        <Logo logo="bottom"/>
        <TimKiem mucTheLoai={true} theLoai="https://62ecdb67818ab252b603f9f3.mockapi.io/data/theLoai"/>
        <BanHang/>
      </div>
    </header>
  </ReactQuery.QueryClientProvider>
);
export default Header;
