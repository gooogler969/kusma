import "./navbar.scss"
import BedtimeOutlinedIcon from '@mui/icons-material/BedtimeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';

// import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {Link} from "react-router-dom"; 

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{textDecoration: "none"}}>
          <span>KUSMA</span>
        </Link>
        <BedtimeOutlinedIcon/>
        <GridViewOutlinedIcon/>
        <div className="search">
          <SearchOutlinedIcon/>
          <input type="text" placeholder="search" />
        </div>
      </div>

      <div className="right">
        <PersonOutlineOutlinedIcon/>
        <MailOutlinedIcon/>
        <NotificationsNoneOutlinedIcon/>
        <div className="user">
          <img src="https://avatars.mds.yandex.net/i?id=2dfb664bd9c93ef611013b968ee4c6c824712508-5551844-images-thumbs&n=13" alt="" />
          <span>googler969</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar