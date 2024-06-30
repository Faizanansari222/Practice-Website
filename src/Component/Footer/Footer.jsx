import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='shadow bg-gray-800  text-white'>
<footer className="bg-gray-800 text-white py-11">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="mb-6 text-center">
          {/* <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p> */}
          <nav>
            <ul className="flex justify-center space-x-4 gap-4 mt-4">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/brand" className="text-gray-400 hover:text-white">Brand</Link></li>
              <li><Link to="/tour" className="text-gray-400 hover:text-white">Tour</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </nav>
        </div>
        <div className="flex space-x-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
        </div>
  )
}

export default Footer
