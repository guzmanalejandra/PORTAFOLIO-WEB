export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md sticky top-0 z-50 font-[\'Press Start 2P\']">
      <div className="text-lg font-bold text-[#F84D2F]">AG</div>
      <nav className="flex gap-6 text-xs">
        <a href="#works" className="hover:text-[#F84D2F]">Projects</a>
        <a href="#about" className="hover:text-[#F84D2F]">About</a>
        <a href="#contact" className="hover:text-[#F84D2F]">Contact</a>
      </nav>
    </header>
  );
}