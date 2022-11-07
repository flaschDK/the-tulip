import Menubar from "./Menubar"
import Linkbar from "./Linkbar"

const Header = () => {
  return (
    <header className="header">
      <Menubar />
      <Linkbar />
    </header>
  );
};

export default Header;
