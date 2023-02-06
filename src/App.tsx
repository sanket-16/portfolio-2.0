import logo from './assets/logo.svg';
function App() {
  return (
    <div className="min-h-screen text-white bg-hero-img bg-no-repeat bg-left-bottom bg-60%">
      <div className=" flex justify-between items-center p-4">
        <img className="p-4" src={logo} alt="Logo" />
        <ul className="flex p-8 gap-8 font-Inter font-bold list-none ">
          <li className="hover:text-mint-green hover:scale-125  ">Projects</li>
          <li>Skills</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
