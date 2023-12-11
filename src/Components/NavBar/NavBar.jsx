
import logoImg from '../../assets/23-08-removebg-preview.png'
const NavBar = () => {
    return (
        <nav className="bg-blue-500 p-4 font-poppins">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="text-white text-lg font-bold">
            <img src={logoImg} alt="Logo" className="w-16" />
          </a>
        </div>
        
        <div className="flex items-center space-x-4">
          <a href="#" className="text-white">Home</a>
          <a href="#" className="text-white">About</a>
          <a href="#" className="text-white">Portfolio</a>
          <a href="#" className="text-white">Contact</a>
        </div>
      </div>
    </nav>
    );
};

export default NavBar;