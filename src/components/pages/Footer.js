import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-orange-500 text-center py-4">
      <p>&copy; {new Date().getFullYear()} Dřevjeno</p>
    </footer>
  );
};

export default Footer;
