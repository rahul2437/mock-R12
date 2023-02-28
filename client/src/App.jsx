import AllRoutes from "./components/AllRoutes";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <main className="px-4">
        <AllRoutes />
      </main>
    </div>
  );
}

export default App;
