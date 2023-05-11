import React, { useRef } from "react";
function UncontrolledLogin(onlogin) {
  const UsernameImputRef = useRef(null);
  const passwordImputRef = useRef(null);
  const rememberImputRef = useRef(null);

  const handleSubmit = () => {
    const username = UsernameImputRef.current.value;
    const password = passwordImputRef.current.value;
    const remember = rememberImputRef.current.checked;
    console.log(username, password, remember);
    onlogin({ UsernameImputRef, passwordImputRef, rememberImputRef });
  };

  const isDisabled = !UsernameImputRef || !passwordImputRef;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" ref={UsernameImputRef} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" ref={passwordImputRef} />
      </div>
      <div>
        <label htmlFor="remember">Remember</label>
        <input type="checkbox" id="remember" ref={rememberImputRef} />
      </div>
      <button type="submit" disabled={isDisabled}>
        Log in
      </button>
    </form>
  );
}
export default UncontrolledLogin;
