import React from 'react';
import Edit from '../images/edit.png';
import Delete from '../images/delete.png';
import Menu from '../components/Menu';
import { Link } from 'react-router-dom';

const Single = () => {
  return (
    <div className="single">
      <div className="content">

        <img src="https://cuoihoilongphung.com/Uploads/images/2023/3/z4152590052114_fc3606c404dbf5d2b7d69b59aef93422_0628.jpg" 
            alt="" 
        />

        <div className="user">
          <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="" 
          />
          <div className="info">
            <span>Vy</span>
            <p>Posted 5 days ago</p>
          </div>
        </div>

        <div className="edit">
          <Link to ={`/write?edit=2`}>   
            <img src={Edit} alt="" />
          </Link>
          <img src={Delete} alt="" />
        </div>

        <h1>
          Tráp Rồng Phượng
        </h1>

        <p>
        Theo phong tục xưa, rồng phượng là linh vật của trốn hoàng cung. 
        Khi sử dụng hình tượng rồng phượng trong tráp ăn hỏi rồng phượng, 
        nhà trai muốn khẳng định vị thế của mình, cũng như khả năng tài chính của gia đình nhà trai. 
        Cùng lời cầu chúc đôi bạn trẻ sẽ phú quý, giàu sang, tiệc bạc dư giả. Bên cạnh đó, sự quấn quít của cặp rồng phượng 
        (long phượng sum vầy) còn thể hiện mong ước cầu trúc cho đôi bạn trẻ sẽ quấn quít bên nhau không rời, con cái đầy nhà, 
        gia đình hạnh phúc đùm bọc nhau.
        Lễ ăn hỏi rồng phượng đẹp chính là điểm thu hút những ấn tượng tốt đẹp về lễ ăn hỏi của bạn.
        Muốn Tráp ăn hỏi rồng phượng được kết thật tự nhiên đẹp mắt thì cặp tráp ăn hỏi rồng phượng phải 
        được tạo từ những người nghệ nhân có bàn tay vàng khéo léo có nhiều năm kinh nghiệm trong việc kết tráp ăn hỏi rồng phượng. 
        Đặc biệt những hoa quả, nguyên liệu để kết tráp rồng phượng cần tuyển lựa kỹ để có thể kết 1 bộ tráp ăn hỏi rồng phượng đẹp long lanh.        
        </p>
      </div>

      <Menu/>
    </div>
  )
}

export default Single