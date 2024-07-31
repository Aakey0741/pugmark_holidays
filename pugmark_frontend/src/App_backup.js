import { useState } from 'react';
import './App.css';

function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const demo = (button) => {
    document.querySelector("#hello").innerHTML = button;
  }
  const clickHere = () => {
    document.querySelector("#hello").innerHTML = `Email - <b>${email}</b><br /> Password - <b>${password}</b>`;
  }

  return (
    <>
      <div className="app-container">
        <header>
          <div className='d-flex'>
            <h1 className='m-0 p-0'>My App's name</h1>
          </div>
        </header>
        <main>
          <div className="spacer pt-3">
            <div className='container'>
              <img src="https://mizzle.webestica.com/assets/images/logo.svg" />
              <input className='form-control mb-3' type='text' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
              <input className='form-control mb-3' type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
              <p id='hello'></p>
              <div className='d-flex gap-2'>
                <button className='btn btn-sm btn-primary' onClick={() => clickHere()}>Click Here</button>
                <a class="btn btn-sm btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                  Link with href
                </a>
                <button class="btn btn-sm btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                  Button with data-bs-target
                </button>
              </div>
            </div>
          </div>
        </main>
        <footer>
          <nav>
            <ul>
              <li onClick={() => demo("Home")}>
                <i className="fa fa-home"></i>
                <h5>Home</h5>
              </li>
              <li onClick={() => demo("Word")}>
                <i className="fa fa-cog"></i>
                <h5>Word</h5>
              </li>
              <li onClick={() => demo("Test")}>
                <i className="fa fa-list"></i>
                <h5>Test</h5>
              </li>
              <li onClick={() => demo("Profile")}>
                <i className="fa fa-user"></i>
                <h5>Profile</h5>
              </li>
            </ul>
          </nav>
        </footer>
      </div>

      <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body small">
          <div>
            Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
          </div>
        </div>
        <div className='d-flex p-3 border-top'>
          <a href='#' style={{ textDecoration: "none" }}>Logout</a>
        </div>
      </div>
    </>
  );
}

export default App;
