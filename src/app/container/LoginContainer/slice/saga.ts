import { takeEvery, all, put, call } from 'redux-saga/effects';
import { authloginActions as actions } from '.';
import { authService } from 'services/authService';
import {
  NotificationSuccess,
  NotificationError,
} from 'app/components/Notification/Notification';
function* handleLogin(action) {
  const { data, navigate } = action.payload;

  try {
    const response = yield call(authService.login, data);
    console.log(response.data);

    if (response.data.rc.code === 0) {
      NotificationSuccess('Thành công', response.data.rc.desc);
      yield put(actions.loginSuccess(response.data));
      localStorage.setItem('access_token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data));
      navigate('/dashboard');
    } else if (response.data.rc.code !== 0) {
      NotificationError('Có lỗi', response.data.rc.desc);
      yield put(actions.loginFail(response.data));
    }
  } catch (err: any) {
    yield put(actions.loginFail(err.response));
    console.log(err);
  }
}

function* watchLogin() {
  yield takeEvery(actions.loginRequest, handleLogin);
}
export function* authloginSaga() {
  yield all([watchLogin()]);
}
