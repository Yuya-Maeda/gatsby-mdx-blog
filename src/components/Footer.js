import React from 'react'
import SocialLinks from '../constants/socialLinks'
const Footer = () => {
  return (
    <footer className="footer">
      <SocialLinks styleClass="footer-icons" />
      <p> Gatsby &amp; MDX &copy; {new Date().getFullYear()} Yuya </p>
    </footer>
  )
}

export default Footer
