import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ 
      display: "flex", 
      gap: "1.5rem", 
      padding: "1rem", 
      backgroundColor: "#111", 
      color: "#fff",
      justifyContent: "center"
    }}>
      <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>Home</Link>
      <Link to="/about" style={{ color: "#fff", textDecoration: "none" }}>About</Link>
      <Link to="/shop" style={{ color: "#fff", textDecoration: "none" }}>Shop</Link>
      <Link to="/events" style={{ color: "#fff", textDecoration: "none" }}>Events</Link>
    </nav>
  );
}
