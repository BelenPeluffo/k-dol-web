import "./App.css";
import { useMediaQuery } from "react-responsive";
import Mobile from "./components/mobile/Mobile";
import TabletMobile from "./components/tablet-mobile/TabletMobile";
import Desktop from "./components/desktop/Desktop";
import Laptop from "./components/laptop/Laptop";
import BigScreen from "./components/big-screen/BigScreen";
import AppRouter from "./router/AppRouter";
import { BrowserRouter } from "react-router-dom";

function App() {
  const isMobileDevice = useMediaQuery({
    query: "(min-device-width: 480px)",
  });

  const isTabletDevice = useMediaQuery({
    query: "(min-device-width: 768px)",
  });

  const isLaptop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });

  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1200px)",
  });

  const isBigScreen = useMediaQuery({
    query: "(min-device-width: 1201px )",
  });

  return (
    <>
      {/* <h1>React Responsive - a guide</h1>
      {isMobileDevice && <Mobile />}
      {isTabletDevice && (
        <>
          <TabletMobile />
          {isDesktop && <Desktop />}
          {isLaptop && <Laptop />}
          {isBigScreen && <BigScreen />}
        </>
      )} */}
      <AppRouter />
    </>
  );
}

export default App;
