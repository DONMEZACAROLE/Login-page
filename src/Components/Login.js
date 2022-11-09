import React from 'react';
export default function Login() {
  return (
    <div className="text-center">
      <div className="log">
        <main class="form-signin">
          <form>
            <h3 class="h3 mb-3 fw-normal">Ok Login With Email</h3>
            <div class="form-floating">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Password</label>
            </div>

            <div class="checkbox mb-3">
              <label>
                <input type="checkbox" value="User" />
                keep me login in
              </label>
              <label>
                <input type="checkbox" value="Admin" />{' '}
                <a href="">forgot your password</a>
              </label>
            </div>
            <button class="w-100 btn btn-lg btn-primary" type="submit">
              Sign in
            </button>
            <p class="mt-5 mb-3 text-muted">
              Don't have an account? <a href="">sign up</a>
            </p>
          </form>
        </main>
      </div>
      <div className="text">
        <h2>Slecknote Academy</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad aut eveniet, aliquam dolore esse,
                    molestias</p>
                    <button >START ACADEMY</button>
      </div>
    </div>
  );
}
