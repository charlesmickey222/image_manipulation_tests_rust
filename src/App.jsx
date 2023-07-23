import { useEffect, useState } from "react";
import "./App.css";
import FileOpener from "./FileOpener";
import ImageDisplay from "./ImageDisplay";

function App() {

  return (
    <div className="container">
      <FileOpener/>
      <ImageDisplay/>
    </div>
  );
}

export default App;
