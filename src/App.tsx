import React from "react";
import { Dashboard } from "./screens/Dashboard";
import { SideBar } from "./screens/SideBar";

const App: React.FC = () => {
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <SideBar />
        <main className="flex-grow overflow-y-auto">
          <Dashboard />
        </main>
      </div>
    </>
  );
};

export default App;
