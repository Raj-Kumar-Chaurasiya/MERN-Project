// src/components/Footer.js
import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-4 pb-3 mt-5">
      <div className="container-fluid">
        <div className="row text-center text-md-start">
          {/* Left Section */}
          <div className="col-md-4 mb-3">
            <h5 className="text-uppercase mb-3">Marvel Studio</h5>
            <p>
              Bringing stories of heroes, villains, and legends to life.
              Watch, imagine, and be inspired.
            </p>
          </div>

          {/* Contact Section */}
          <div className="col-md-4 mb-3">
            <h5 className="text-uppercase mb-3">Contact Us</h5>
            <p className="mb-1">
              <FaEnvelope className="me-2" />
              info@marvelstudio.com
            </p>
            <p className="mb-1">
              <FaPhoneAlt className="me-2" />
              +91 9341020167, 7398823446
            </p>
          </div>

          {/* Social Media Section */}
          <div className="col-md-4 mb-3 text-center text-md-start">
            <h5 className="text-uppercase mb-3">Follow Us</h5>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <a href="https://facebook.com" className="text-light fs-4" target="_blank" rel="noreferrer"><FaFacebook /></a>
              <a href="https://instagram.com" className="text-light fs-4" target="_blank" rel="noreferrer"><FaInstagram /></a>
              <a href="https://youtube.com" className="text-light fs-4" target="_blank" rel="noreferrer"><FaYoutube /></a>
              <a href="https://twitter.com" className="text-light fs-4" target="_blank" rel="noreferrer"><FaTwitter /></a>
            </div>
          </div>
        </div>

        <hr className="border-secondary" />

        {/* Bottom Line */}
        <div className="row text-center">
          <div className="col-sm-6">
            <p className="mb-0">Copyright © {new Date().getFullYear()} Team ERROR 404 (KSS Chitrakut)</p>
          </div>
          <div className="col-sm-6">
            <p className="mb-0">
              Developed By: <Link to="/team"><strong>ERROR 404</strong></Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
