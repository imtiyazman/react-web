import React from 'react';
import Logo from '../images/logo.png';
function Footer() {
  return (
    <footer className='site-footer'>
    <div className="container-fluid">
      <div className='row'>
      <div className='col-md-3'>
      <img src={Logo} className="App-logo" alt="logo" />
      </div>
        <div className='col-md-9'>
        <div class="contact-info contact-info-block">
    <ul class="contact-details">
      <li><i class="far fa-dot-circle"></i> <strong>ADDRESS:</strong> <span>123 Street Name, City, England</span></li>
      <li><i class="fab fa-whatsapp"></i> <strong>PHONE:</strong> <span>(123) 456-7890</span></li>
      <li>
        <i class="far fa-envelope"></i> <strong>EMAIL:</strong> <span><a href="mailto:mail@example.com">mail@example.com</a></span>
      </li>
      <li><i class="far fa-clock"></i> <strong>WORKING DAYS/HOURS:</strong> <span>Mon - Sun / 9:00 AM - 8:00 PM</span></li>
    </ul>
  </div>
  <div class="widget widget_text">
  <h3 class="widget-title">My Account</h3>
  <div class="textwidget">
    <div class="row d-inline-flex">
      <div class="col-xl-6">
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">My Account</a></li>
        </ul>
      </div>
      <div class="col-xl-6">
        <ul>
          <li><a href="#">Orders History</a></li>
          <li><a href="#">Advanced Search</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
    </footer>
  );
}

export default Footer;
