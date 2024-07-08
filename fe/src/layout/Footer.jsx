
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
    <div className='footer_container'>
    <div className="footer_item">
    <i className="fa-solid fa-location-dot"></i>
        <h3>Locations</h3>
        <p>Head office: Aziz Aliyev 11 (nearby Hard Rock Cafe)</p>
        <p>Sales office: 13 Khojali Avenue, Baku</p>
      </div>
      <div className="footer_item">
        <i className="fa fa-phone" aria-hidden="true"></i>
        <h3>Phone numbers</h3>
        <p>+994504777714</p>
        <p>+994554777714</p>
        <p>+994704777714</p>
      </div>
      <div className="footer_item">
        <i className="fa fa-envelope" aria-hidden="true"></i>
        <h3>Email</h3>
        <p>office@carrentbaku.az</p>
      </div>
    </div>
      <div className='alt_xett'></div>

      <div className='footer_icon_container'>
        <div className='carhaven_az'>
            <p>CarHaven.az</p>
        </div>
        <div className='sosial_icons'>
        <i className="fa-brands fa-whatsapp"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-facebook"></i>
        </div>
        <div className='arcod_tecnology'>
            <p> <i className="fa-regular fa-copyright"></i>2024 Site crafted by Arcod Technology</p>
        </div>


      </div>
    </footer>
  );
}

export default Footer;
