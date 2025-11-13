// SocialIcons.tsx
import { FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";

export default function SocialIcons() {
  return (
    <div className="icon-container">
      <FaInstagram className="text-2xl text-white hover:text-pink-600 cursor-pointer" />
      <FaTwitter className="text-2xl text-white hover:text-blue-400 cursor-pointer" />
      <FaTiktok className="text-2xl text-white hover:text-black cursor-pointer" />
    </div>
  );
}
