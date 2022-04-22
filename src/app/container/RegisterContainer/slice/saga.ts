import { all, call, put, takeEvery } from 'redux-saga/effects';
import { authregisterActions as actions } from '.';
import { authService } from 'services/authService';
import {
  NotificationSuccess,
  NotificationError,
} from 'app/components/Notification/Notification';
function* handleRegister(action) {
  try {
    const response = yield call(authService.register, action.payload);
    console.log(response);
    if (response.rc.code === 0) {
      NotificationSuccess('Thành công', response.rc.desc);
      yield put(actions.registerSuccess(response));
    } else if (response.rc.code !== 0) {
      NotificationError('Có lỗi', response.rc.desc);
    }
  } catch (err: any) {
    yield put(actions.registerFail(err.response));
    console.log(err);
  }
}

function* watchRegister() {
  yield takeEvery(actions.registerRequest, handleRegister);
}

export function* authregisterSaga() {
  yield all([watchRegister()]);
}
