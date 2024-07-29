import "./App.css";
import Main from "./components/Main";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="flex flex-col justify-center items-center w-full ">
      <NavBar />
      <div className=" px-5  w-full mt-[4.4rem] border-2 border-red-500 sm:h-[90vh]">
        <Main />
      </div>
    </div>
  );
}

export default App;
