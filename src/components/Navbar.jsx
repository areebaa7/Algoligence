import logo from "../assets/logo.jpeg";

export default function Navbar() {
  return (
    <header className="sticky top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mt-5 bg-white/60 backdrop-blur-xl border border-white/40 rounded-xl px-8 py-4 flex items-center justify-between shadow-lg">

          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Algoligence"
              className="h-10"
            />
          </div>

          <nav className="hidden md:flex gap-8 text-slate-700 font-medium">
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Our Services</a>
            <a href="#">Blogs</a>
            <a href="#">Usecase</a>
            <a href="#">Our Team</a>
            <a href="#">Contact Us</a>
          </nav>
        </div>
      </div>
    </header>
  );
}