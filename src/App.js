import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            <a
              href="https://github.com/snbarnhouse/react-dictionary-app"
              target="_blank"
              rel="noreferrer"
            >
              Open-source
            </a>{" "}
            code by{" "}
            <a
              href="https://dreamy-visvesvaraya-894128.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Stephanie Barnhouse
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
