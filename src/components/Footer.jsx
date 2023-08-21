import { Link } from "react-router-dom";
import SocialMedia from "./SocialMedia";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <span>Best</span> bags
          </Link>
        </div>
        <SocialMedia />
      </div>
    </footer>
  );
}
