import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* College Info */}
        <div>
          <h2 className="text-xl font-bold text-white">Greenfield College</h2>
          <p className="mt-2 text-sm">
            A premier institution offering quality education and fostering holistic development since 1985.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/admissions">Admissions</Link></li>
            <li><Link href="/courses">Courses</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Contact</h3>
          <p className="text-sm">
            123 College Lane<br />
            University City, ST 45678<br />
            Email: info@greenfield.edu<br />
            Phone: (123) 456-7890
          </p>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" className="hover:text-white"><FaTwitter /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
            <a href="#" className="hover:text-white"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-600 pt-4 text-center text-sm">
        © {new Date().getFullYear()} Greenfield College. All rights reserved.
      </div>
    </footer>
  );
}
