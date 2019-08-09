import { takeLatest, call, put, all } from 'redux-saga/effects';

import history from '~/services/history';
import api from '~/services/api';

import { signInSuccess } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;
    console.tron.log('1');
    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });
    console.tron.log(response);
    const { token, user } = response.data;
    console.tron.log('3');

    console.tron.log('4');
    yield put(signInSuccess(token, user));
    console.tron.log('5');
    history.push('/dashboard');
  } catch (error) {
    console.tron.error(error);
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
