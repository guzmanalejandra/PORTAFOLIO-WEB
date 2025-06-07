export default function Footer() {
  return (
    <footer className="bg-[#F84D2F] text-white text-center py-6 mt-16 font-[\'Press Start 2P\'] text-xs">
      <p>Let's connect!</p>
      <div className="flex justify-center gap-4 mt-4">
        <a href="https://github.com/guzmanalejandra" className="hover:text-yellow-200">GitHub</a>
      </div>
      <p className="mt-4">© {new Date().getFullYear()} Alejandra Guzman</p>
    </footer>
  );
}