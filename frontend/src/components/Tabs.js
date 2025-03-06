import { useState } from "react";
import "../Main.css"
import "./Tabs.css"

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          About Us
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          About Project
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
            <img style={{ width: 1500, height: 500 }} src={process.env.PUBLIC_URL + '/img/aboutus/aboutus.jpg'} alt="AboutUs"st></img>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <p>
          Đây là dự án được thực hiện bởi team 503(ngụ ý là keo lì hơn cả keo 502). Phần mềm này sẽ hỗ trợ các tài xế trong việc cảnh báo các tình huống bất thường khi tài xế không tỉnh táo. Bên cạnh đó, lưu trữ lại và làm tư liệu cho cảnh sát giao thông nếu cần điều tra tai nạn. Các tính nắng và dự án sẽ được chúng tôi phát triển thêm trong thời gian tới.
          </p>
        </div>
        </div>
    </div>
  );
}

export default Tabs;