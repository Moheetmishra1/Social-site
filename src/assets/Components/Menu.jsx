import "../CSS/Menu.css"

 export default function Menu({logOut}){
   

    return (
        <div className="MenuBox">
            <div className="menu">
            <div className="menuList">
                <div className="homeMenu menuItem"><img src="../../../public/Images/home.png" alt="" /><p>Home</p></div>
                <div className="notification menuItem"><img src="../../../public/Images/notification.png" alt="" /><p>Notifications</p></div>
                <div className="shop menuItem"><img src="../../../public/Images/heart.png" alt="" /><p>Shop</p></div>
                <div className="conversion menuItem"><img src="../../../public/Images/message.png" alt="" /><p>Message</p></div>
                <div className="wallet menuItem"><img src="../../../public/Images/message@2x.png" alt="" /><p>Wallet</p></div>
                <div className="subscription menuItem"><img src="../../../public/Images/favorite.png" alt="" /><p>Subsription</p></div>
                <div className="myProfile menuItem"><img src="../../../public/Images/profile.png" alt="" /><p>My Profile</p></div>
                <div className="settingProfile menuItem"><img src="../../../public/Images/setting.png" alt="" /><p>Settings</p></div>
            </div>
            <div className="logOUT" onClick={()=>{logOut()}}><img src="../../../public/Images/logout.png" alt="" /><p>Log out</p></div>
            </div>
            <div className="menuBottom">
                <p>2022©logo name</p>
                <p>Developed by ivan Infotech</p>
            </div>
        </div>
    )
 }