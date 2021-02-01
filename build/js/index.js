'use strict';

var React = require('react'); //React.jsのライブラリをimport
var ReactDOM = require('react-dom');

//コンポーネントを定義
var Index = React.createClass({
  displayName: 'Index',

  render: function render() {
    return React.createElement(
      'p',
      null,
      'hoge'
    );
  }
});

//id='content'の要素にコンポーネント「Index」を挿入してレンダリング
ReactDOM.render(React.createElement(Index, null), document.getElementById('content'));