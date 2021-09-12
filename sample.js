// 1. 関数は、別の関数に引数として渡すことも可能
const insideFn = logger => {
  // logger = message => console.log(message)
  logger('test');
  // message = 'test'
};
insideFn(message => console.log(message));

// 2. 関数の戻り値として、関数を返すことも可能
// const createScream = function (logger) {
//   // logger = message => console.log(message)
//   return function (message) {
//     logger(message.toUpperCase() + '!!!');
//   };
// };

const createScream = logger => message => {
  // logger = message => console.log(message)
  logger(message.toUpperCase() + '!!!');
};

const scream = createScream(message => console.log(message));
scream('functions can be returned from other functions');
scream('createScream returns a function');
scream('scream invokes that returned function');

// 高階関数とは？
// 1. ある関数が、別の関数を引数として受け取るか
// 2. もしくは関数を戻り値として返すか
// ↑どちらかを満たせば、高階関数を名乗れる。

// 命令型プログラミングと宣言的プログラミング
// 命令型は、howに着目して、コードを書く
// 宣言型プログラミングは、whatのみを書くので、必然的にコードを見れば何をしたいかが明確になる
// 宣言型プログラミングの価値は、読みやすいことにあり、その結果スケール出来る

// immutableなデータとは
// mutateしないこと
// つまり変更を加えることが出来ない
// 関数型プログラミングでは、全てのデータはimmutable
// 関数型では、変更を加えるとき、必ずコピーを作成してから変更する

let color_lawn = {
  title: 'lawn',
  color: '#00FF00',
  rating: 0,
};

// function rateColor(color, rating) {
//   color.rating = rating;
//   return color;
// }

console.log(rateColor(color_lawn, 5).rating);
console.log(color_lawn);

// この場合、colorは元のオブジェクトを参照するため、mutateしている。

function rateColor(color, rating) {
  // colorのコピーを複製
  return Object.assign({}, color, { rating: rating });
}

// アロー演算子とスプレッド構文でよりシンプルに出来る
const rateColorArrow = (color, rating) => ({
  ...color,
  rating
});

// console.log(rateColorArrow(color_lawn, 5).rating);
// console.log(color_lawn);

// 純粋関数
// 引数の値のみ参照して、それを元に計算する
// 少なくとも一つの引数をとり、値もしくは関数を戻り値として返す

const tksk = {
  name: 'tksk',
  canRead: false,
  canWrite: false,
};

// 純粋関数の例
const selfEducate = person => ({
  ...person,
  canRead: true,
  canWrite: true,
});

// console.log(selfEducate(tksk));
// // tkskは影響を受けない
// console.log(tksk);

// 関数は少なくとも１つの引数を受け取らないといけない
// 関数は値もしくは他の関数を戻り値として返さないといけない
// 関数は、引数や関数外で定義された変数を直接変更してはいけない
// 純粋関数は引数しか参照しないので、テストが容易になる

// データの変換
const cities = ['Yokohama', 'Toyama', 'Tokyo',  'Osaka'];
//
// const tCities = cities.filter(city => city[0] === 'T');
// console.log(tCities);

// predicate(述語)を引数にとる。predicateは、配列の要素を引数にとり、真偽値を返すコールバック関数
// 述語とは、 伝統文法では、ある節の要素のうち、主語でない部分のこと。主語以外の名詞句は述語に含まれる。

// 配列から要素を削除する際には、Array.popや、Array.spliceではなく、filterを使う

// 第一引数に指定された文字列を削除した配列を新しく返す純粋関数
const cutCities = (cut, list) => list.filter(city => city !== cut);
// 'Tokyo'を除外
// console.log(cutCities('Tokyo', cities).join(','));
// console.log(cities.join('\n'));

// 1. 配列から配列を得るパターン
const CITIES = cities.map(city => city.toUpperCase());
console.log(CITIES.join('\n'));
console.log(cities.join('\n'));
