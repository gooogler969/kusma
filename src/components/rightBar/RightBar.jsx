import "./rightBar.scss"

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions for you</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://avatars.mds.yandex.net/i?id=2dfb664bd9c93ef611013b968ee4c6c824712508-5551844-images-thumbs&n=13" alt="" />
              <span>Jane Wick</span> 
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Last Activities</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://avatars.mds.yandex.net/i?id=2dfb664bd9c93ef611013b968ee4c6c824712508-5551844-images-thumbs&n=13" alt="" />
              <p>
                <span>Googler969</span> Changed profile pictire
              </p>
            </div>
            <span>5m ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://avatars.mds.yandex.net/i?id=2dfb664bd9c93ef611013b968ee4c6c824712508-5551844-images-thumbs&n=13" alt="" />
              <p>
                <span>Googler969</span> Changed profile pictire
              </p>
            </div>
            <span>5m ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://avatars.mds.yandex.net/i?id=2dfb664bd9c93ef611013b968ee4c6c824712508-5551844-images-thumbs&n=13" alt="" />
              <p>
                <span>Googler969</span> Changed profile pictire
              </p>
            </div>
            <span>5m ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://avatars.mds.yandex.net/i?id=2dfb664bd9c93ef611013b968ee4c6c824712508-5551844-images-thumbs&n=13" alt="" />
              <p>
                <span>Googler969</span> Changed profile pictire
              </p>
            </div>
            <span>5m ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online friends</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://avatars.mds.yandex.net/i?id=2dfb664bd9c93ef611013b968ee4c6c824712508-5551844-images-thumbs&n=13" alt="" />
              <div className="online"/>
              <span>Willy Toms</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightBar