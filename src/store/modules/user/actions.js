export function singInRequest(username, password) {
  return {
    type: "@user/SING_IN_REQUEST",
    payload: { username, password }
  };
}

export function singInSuccess(profile) {
  return {
    type: "@user/SING_IN_SUCCESS",
    payload: { profile }
  };
}

export function singInFailure() {
  return {
    type: "@user/SING_IN_FAILURE"
  };
}

export function singOut() {
  return {
    type: "@user/SING_OUT"
  };
}
