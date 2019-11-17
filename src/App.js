import React, { Suspense } from 'react';
import Home from "./pages";

function App() {
  return (

      <Suspense fallback="loading">
        <Home />
      </Suspense>

  );
}

export default App;
