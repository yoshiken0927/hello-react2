import React from "react";
import ReactDOM from "react-dom";

//コンポーネントを定義
function Index() {
  return (
    <p>hogef</p>
  );
};

//id='content'の要素にコンポーネント「Index」を挿入してレンダリング
ReactDOM.render(
  <Index />,
  document.getElementById('content')
);
