import React from 'react';

import styles from './Login.module.scss';

function Login() {
  return (
    <div className={styles.login}>
      login
      <form action='' className={styles.loginForm}>
        <input type='text' placeholder="login"/>
        <input type='text' placeholder="password"/>
      </form>
    </div>
  );
}

export default Login;
