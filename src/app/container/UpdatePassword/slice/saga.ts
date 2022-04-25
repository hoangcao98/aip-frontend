import { all, call, put, takeEvery } from 'redux-saga/effects';
import { updatepasswordActions as actions } from '.';
import { authService } from 'services/authService';
import {
  NotificationSuccess,
  NotificationError,
} from 'app/components/Notification/Notification';
function* handleRegister(action) {
  try {
    const response = yield call(authService.register, action.payload);
    console.log(response);
    if (response.data.rc.code === 0) {
      NotificationSuccess('Thành công', response.data.rc.desc);
      yield put(actions.updatePasswordSuccess(response.data));
    } else if (response.data.rc.code !== 0) {
      NotificationError('Có lỗi', response.data.rc.desc);
    }
  } catch (err: any) {
    yield put(actions.updatePasswordFail(err.response));
    console.log(err);
  }
}

function* watchRegister() {
  yield takeEvery(actions.updatePasswordRequest, handleRegister);
}

export function* updatepasswordSaga() {
  yield all([watchRegister()]);
}
