export const Header = () => {
  return (
    <div className="fixed top-3 left-0 right-0 z-10 flex justify-center items-center">
      <nav className="flex justify-center gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur max-w-fit">
        <a href="#home" className="nav-item">
          Home
        </a>
        <a href="#projects" className="nav-item">
          Projects
        </a>
        <a href="#about" className="nav-item">
          About
        </a>
        <a href="#contact" className="nav-item">
          Contact
        </a>
      </nav>
    </div>
  );
};
