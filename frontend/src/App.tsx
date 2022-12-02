import {CssAppWrapper} from "./App.styled";
import {Typography} from "./components";
import {Header} from "./components/Header";

function App() {
  return (
      <>
          <Header/>
          <CssAppWrapper>
              <Typography variant={"h1"} label={"Awesome App"}/>
              <Typography variant={"h2"} label={"Awesome App"}/>
              <Typography variant={"body1"} label={"Awesome App"}/>
              <Typography variant={"body2"} label={"Awesome App"}/>
              <Typography variant={"caption"} label={"Awesome App"}/>
          </CssAppWrapper>
      </>
  );
}

export default App;
