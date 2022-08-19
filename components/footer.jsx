import * as React from 'react';
const Footer = () => (
  <footer className="footer">
    <table className="footer__navtable">
      <thead>
        <tr>
          {[
            'Hỗ trợ khách hàng',
            'Về Tiki',
            'Hợp tác và liên kết',
            'Phương thức thanh toán',
            'Kết nối với chúng tôi',
          ].map((val) => (
            <td>{val}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr></tr>
      </tbody>
    </table>
    <hr />
    <p>
      Trụ sở chính: Tòa nhà Viettel, Số 285, đường Cách Mạng Tháng 8, phường 12,
      quận 10, Thành phố Hồ Chí Minh
      <br />
      Tiki nhận đặt hàng trực tuyến và giao hàng tận nơi, chưa hỗ trợ mua và
      nhận hàng trực tiếp tại văn phòng hoặc trung tâm xử lý đơn hàng
      <br />
      Giấy chứng nhận Đăng ký Kinh doanh số 0309532909 do Sở Kế hoạch và Đầu tư
      Thành phố Hồ Chí Minh cấp lần đầu ngày{' '}
      <time dateTime="2010-01-06">06/01/2010</time> và sửa đổi lần thứ 23 ngày{' '}
      <time dateTime="2022-02-14">14/02/2022</time>
      <br />© 2022 - Bản quyền của Công ty TNHH Ti Ki
    </p>
    <hr />
    <h3>Tiki - Thật nhanh, thật chất lượng, thật rẻ</h3>
    <h4>Tiki có tất cả</h4>
    <p>
      Với hàng triệu sản phẩm từ các thương hiệu, cửa hàng uy tín, hàng nghìn
      loại mặt hàng từ <a href=".">Điện thoại smartphone</a> tới <a href=".">Rau củ quả tươi</a>, kèm theo dịch
      vụ giao hàng siêu tốc TikiNOW, Tiki mang đến cho bạn một trải nghiệm mua
      sắm online bắt đầu bằng chữ tín. Thêm vào đó, ở Tiki bạn có thể dễ dàng sử
      dụng vô vàn các tiện ích khác như <a href=".">mua thẻ cào, thanh toán hoá đơn điện
      nước, các dịch vụ bảo hiểm.</a>
    </p>
    <h4>Khuyến mãi, ưu đãi tràn ngập</h4>
    <p>
      Bạn muốn săn giá sốc, Tiki có <a href=".">giá sốc mỗi ngày</a> cho bạn! Bạn là tín đồ của
      các thương hiệu, các <a href=".">cửa hàng Official chính hãng</a> đang chờ đón bạn. Không
      cần săn mã freeship, vì Tiki đã có hàng triệu sản phẩm trong <a href=".">chương trình
      Freeship+</a>, không giới hạn lượt đặt, tiết kiệm thời gian vàng bạc của bạn.
      Mua thêm gói <a href=".">TikiNOW tiết kiệm</a> để nhận 100% free ship 2h & trong ngày,
      hoặc mua gói TikiNOW cao cấp để nhận được 100% freeship, áp dụng cho 100%
      sản phẩm, 100% tỉnh thành Việt Nam. Bạn muốn tiết kiệm hơn nữa? Đã có
      TikiCARD, <a href=".">thẻ tín dụng Tiki hoàn tiền 15%</a> trên mọi giao dịch (tối đa hoàn
      600k/tháng)
    </p>
    <hr />
    <h3>Danh mục sản phẩm</h3>
  </footer>
);
export default Footer;
