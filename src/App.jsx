import Home from "./pages/Home";
import { FlightsProvider } from "./context/FlightsProvider";
import { RemoveFilterProvider } from "./context/RemoveFilterProvider";

function App() {
  return (
    <>
      <FlightsProvider>
        <RemoveFilterProvider>
            <Home />
        </RemoveFilterProvider>
      </FlightsProvider>
    </>
  );
}

export default App;
