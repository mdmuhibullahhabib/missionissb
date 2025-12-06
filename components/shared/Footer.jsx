"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6">

        {/* Column 1 */}
        <div>
          <h2 className="text-2xl font-bold text-white">MissionISSB</h2>
          <p className="mt-3 text-sm leading-6">
            Best online platform for ISSB preparation.  
            Learn smart & achieve your goal.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/courses" className="hover:text-white">Courses</Link></li>
            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white">Terms & Conditions</Link></li>
            <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <p className="text-sm">Email: missionissb@gmail.com</p>
          <p className="text-sm">Phone: +8801XXXXXXXXX</p>
          <p className="text-sm">Address: Mirpur, Dhaka</p>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} MissionISSB — All Rights Reserved.
      </div>
    </footer>
  );
}
