import React from 'react'

const Footer = () => {
  return (
    <>
    <div className="Footer">
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-lg-5 col-12 ft-1">
                    <h3><span>KATHEKANI</span> FC</h3>
                    <p>Naturing Talents from the roots has been the motto since the starting of the footbal club. We are always delighted to welcome players, wellwishers and also donors to enhance our Club towards the greatness of every upcoming talents from the 'roots'.</p>
                    <div className="footer-icons">
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-linkedin-in"></i>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 col-12 ft-2">
                    <h5>Quick Links</h5>
                    <ul>
                        <li className="nav-item">
                            <a className="" href="/">News Feed</a>
                        </li>
                        <li className="nav-item">
                            <a className="" href="/">Contribute</a>
                        </li>
                        <li className="nav-item">
                            <a className="" href="/">Contact Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="" href="/"> Table Standings</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-6 col-lg-4 col-12 ft-3">
                    <h5>Reach Out</h5>
                    <p><i class="fa-solid fa-phone-volume"></i> +254 748 940595</p>
                    <p><i class="fa-solid fa-envelope"></i> kathekanifc@gmail.com</p>
                    <p><i class="fa-solid fa-paper-plane"></i> Tawa, Mbooni</p>
                </div>
            </div>
        </div>
    </div>
    <div className='Last-footer'>
        <p>Developed By David Musau</p>
    </div>
</>
  )}

export default Footer
