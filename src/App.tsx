import "./App.css";
import { lazy, Suspense } from "react";
const Navbar = lazy(() =>
  import("./components").then((module) => ({ default: module.Navbar })),
);
const Footer = lazy(() =>
  import("./components").then((module) => ({ default: module.Footer })),
);
const Loader = lazy(() =>
  import("./components").then((module) => ({ default: module.Loader })),
);
const Main = lazy(() =>
  import("./components").then((module) => ({ default: module.Main })),
);

function App() {
  return (
    <section className="app">
      <Suspense fallback={<Loader />}>
        <Navbar />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Main />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Footer />
      </Suspense>
    </section>
  );
}

export default App;
