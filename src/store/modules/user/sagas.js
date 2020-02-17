import { Alert } from "react-native";
import { all, takeLatest, put, call } from "redux-saga/effects";

import { encode } from "base-64";

import { singInSuccess, singInFailure } from "./actions";

export function* singIn({ payload }) {
  const { username, password } = payload;

  try {
    let headers = new Headers();
    headers.append(
      "Authorization",
      "Basic " + encode(username + ":" + password)
    );
    let response = yield fetch(
      "https://www.redemaisaude.com.br/api/oauth/authenticate",
      {
        method: "POST",
        headers
      }
    );

    const responseJson = yield response.json();

    yield put(singInSuccess(responseJson.usuario_logado));
  } catch (err) {
    Alert.alert("Erro", err.messege);
    yield put(singInFailure());
  }
}

export default all([takeLatest("@user/SING_IN_REQUEST", singIn)]);
