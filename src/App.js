import React from "react";
import "./styles.css";
import { Toaster } from "./components/Toaster";
import { RecoilRoot } from "recoil";
import { Button } from "./components/Button";

export default function App() {
  return (
    <RecoilRoot>
      <div className="app">
        <Toaster />
        <Button />
      </div>
    </RecoilRoot>
  );
}
