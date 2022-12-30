import fotodiri from "../assets/fotodiri.jpg"
function Header() {
    return (
        <div className="header">
            <div className="photo-container">
                <span>
                    <img src={fotodiri} alt="Foto Profil" className="foto-diri"></img>
                    <section className="little-box"></section>
                </span>
            </div>
            <div className="profile-text-container">
                <span className="name">
                    <h1>Anand Hari Krsna</h1>
                </span>
                <span className="occupation">
                    <p>Software Engineering Major Student</p>
                </span>
            </div>
        </div>
    )
}

export default Header;