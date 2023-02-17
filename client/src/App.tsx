import type { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Router from "routes/Router";

const App: FC = () => {
  return <BrowserRouter>
    <Router />
    <ToastContainer />
  </BrowserRouter>
}

export default App;