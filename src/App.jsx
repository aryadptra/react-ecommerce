import React from "react";
//import Toaster
import { Toaster } from "react-hot-toast";
import RoutesIndex from "./routes/routes";

function App() {
  return (
    <div>
      <Toaster />
      <RoutesIndex />
    </div>
  );
}

export default App;
