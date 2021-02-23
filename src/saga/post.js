import axios from "axios";
import { takeEvery, call, put } from "redux-saga/effects";
import { getPost } from "Redux/post";
import { addLink } from "Redux/links";
import { setIsFetch } from "Redux/isFetch";

function* GetPost(data) {
  yield put(setIsFetch(true));
  try {
    const res = yield call(fetchPost, data.payload);
    const randomArticle =
      res.data.children[Math.floor(Math.random() * res.data.children.length)];
    yield put(
      addLink({ title: randomArticle.data.title, url: randomArticle.data.url })
    );
  } catch (err) {
    err && console.log(err, "err GetPost");
  }
  yield put(setIsFetch(false));
}

/** post request. */
export const fetchPost = (data) => {
  return axios(`https://www.reddit.com/r/${data}.json`).then((res) => {
    return res.data;
  });
};

export default function* watchGetPost() {
  yield takeEvery(getPost, GetPost);
}
