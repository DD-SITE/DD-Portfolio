const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <a href="/terms" className="hover:underline">Terms & Conditions</a>
        <p>|</p>
        <a href="/privacy" className="hover:underline">Privacy Policy</a>
      </div>

      <div className="flex gap-3">
        <a href="https://github.com/DD-SITE" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </a>
        <a href="https://x.com/DeeDee5588?t=a9kXbm3NtFLgx7L3U-1X9A&s=09" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2" />
        </a>
        <a href="https://www.instagram.com/div.yamdixit/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
        </a>
        <a href="https://www.linkedin.com/in/divyam-dixit-16a2972a0/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src="/assets/linkedin.png" alt="linkedin" className="w-10 h-10" />
        </a>
      </div>

      <p className="text-white-500">© 2025 Divyam Dixit. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
