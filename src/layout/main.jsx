import { Outlet } from "react-router-dom";
import Bg from "../assets/MinimalistBg.jpg";
const App = () => {
  return (
    <div
      className="h-screen "
      style={{ backgroundImage: `url(${Bg})`, backgroundSize: "100% 100%" }}
    >
      <div className="w-full h-full backdrop-blur">
        <div className="max-w-[1800px] m-auto w-full h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default App;
