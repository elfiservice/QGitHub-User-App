import { fork } from 'redux-saga/effects';
import getCurrentUserLocation from './appSaga'

export default function* root() {
    yield fork(getCurrentUserLocation);
}