import "./styles/Footer.css";
import React from "react";

const Footer = () => {
  return (
    <div className="footer-conatiner">
      <div className="footer-top">
        <ul className="footer_links_top_left">
          <li className="footer_top_link"> Dstv.com | </li>
          <li className="footer_top_link"> FAQs | </li>
          <li className="footer_top_link"> Live chat </li>
        </ul>
        <div className="footer_right">
          <div className="socials_footer">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAYAAAFrbCBXAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA8FJREFUeNpiZAAC26gZ/xmIAEzEKgQrxid5aGk6GBNUDFN04foz4kwGgbyWzfgVI1tNlDOI9qBd9EysbMpNpopigABiJDqqiTWRhVDMwUKCoImwKMZqoqGmFEaYshATrURZjdNEkG6Q1RNrfMmLTuorBAggRlIyIcWxSAxIDDZh+PL1J8Odh28ZziPlU5INRY4/XJmKJENhqQabQWTnIaqGKS4vo+cekgyFaYCl3AHx/tAxFCCAQDlqPpBOoKKZgkxUNhAE3g+uMAUlL1DeR89l1Mn7QcaUVaKedurUL/oq0x2w1llUK0/zgU2X8zgMJTuicBk4cEUfMcXe/HVnGeavPUNdlyIbOHDeR07UuEr60UJ61FAaGwoQQLSo+Bho5ftB70iaRdOANU6pAUANhERoXU5skUhXh26bncjAw8U2uEMUV305qBxKKBTx1W50zUyq8iJUc+TIy/XYmvsq8sIkqQeBz98gQwY0cyhy15cS9flIw4mDOurp3s4ftGkUWy5GHw0ZMbl+1KGjDh11KBUdKjgE3PkBIIBAnTsBIOP9IHbkgsPLMhJpMqFBC8cOlTSaMJrrR/v19AKglj+oZcXDzQ7mX7gGaYPefviG4cu3XwPrUFCPdNXEaOw9U6RBCXzNP5o7FDRRgT6vMOjSKCiaqeFImjt0XlvI4M/1+LrLgyrX58VaEVRzAU+vk24ONcAxyAACSVVrcA40DKoCn1RHjlahow4dEY0SUP2Nb9AWG8A17IhvkIxih4IcSa1hR7pPBg/rNIqvLTqoHHr+2rOh4VBC9f7gCVECDqXZAAS+WbvREedRh446dNShow4ddeioQ0cdOupQejj0wxBwpyBAgHbOGIeAIAqgE1GSKEg2KlqdUFK7g1u4BK1EpZPoOAClKLQkEqLSISFRuACfaITNmv1irfeSPcC+/TN/ZufPv5/crS9PwoAf5INnZVt/xIUK1yPlCB7+dBJFKEJBg2gYX0p+1JeLWVMqZEw+l7YurLf5OxYaoXI6XK9VjJOKE6F+0KqsQKi5FVZo1y38rdBes/r14R2aLC9XzIIo82cj1Mt9vWfIGWurOzGD8Qqhd/IulUluiMRGe8SQ16I/nDOHamJTroZQsjxC4ReyvNuFUS3evdj/2BSHCPXJbLFhyGsyXSJULzotZSL0ZXRuERqE+TMwWX57OF2zqhecZMxzX8HHrP3p+TMwQnf7k+cliiyxrIRaLIEY8uyUEAoIRShCAaEIRShCAaEIRShYCO2gQY1ORNohmlt/ScT6ECkOxeUZt1sPAZj6dF0AAAAASUVORK5CYII="
              alt=""
              className="social_footer"
            />
            <img
              src="data:image/png;base64,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"
              alt=""
              className="social_footer"
            />
          </div>
          <div className="app_download_footer">
            <img
              src="https://now.dstv.com/static/media/logo_apple-app-store.1b659262.svg"
              alt=""
              className="app_footer"
            />
            <img
              src="https://now.dstv.com/static/media/logo_play-store.86935f54.png"
              alt=""
              className="app_footer"
            />
            <img
              src="https://now.dstv.com/static/media/logo_huawei-app-gallery.d3fc6433.png"
              alt=""
              className="app_footer"
            />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer_bottom_links">
          <span className="footer_bottom_link">
            Subscriber Terms & Conditions |
          </span>
          <span className="footer_bottom_link">
            Standerd Terms & Conditions for Multichoice Afric Group Promotions |
          </span>
          <span className="footer_bottom_link">
            Services Terms & Conditions |
          </span>
          <span className="footer_bottom_link"> Terms of Use |</span>
          <span className="footer_bottom_link"> Privacy & Cookie Policy |</span>
          <span className="footer_bottom_link"> Copyright |</span>
          <span className="footer_bottom_link">Contact Us |</span>
          <span className="footer_bottom_link">
            Dstv Thanks Terms & Conditions |
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
