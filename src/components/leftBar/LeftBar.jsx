import "./leftBar.scss"
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';


const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src="https://avatars.mds.yandex.net/i?id=2dfb664bd9c93ef611013b968ee4c6c824712508-5551844-images-thumbs&n=13" alt="" />
            <span>googler969</span>
          </div>
          <div className="item">
            <GroupAddOutlinedIcon/>
            <span>Friends</span>
          </div>
          <div className="item">
            <GroupsOutlinedIcon/>
            <span>Groups</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Shortcards</span>
          <div className="item">
            <GroupsOutlinedIcon/>
            <span>Games</span>
          </div>
          <div className="item">
            <GroupsOutlinedIcon/>
            <span>Events</span>
          </div>
          <div className="item">
            <GroupsOutlinedIcon/>
            <span>Massages</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftBar