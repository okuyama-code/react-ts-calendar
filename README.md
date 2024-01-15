## 見るソースコード
https://github.com/AmruthPillai/React-Calendar/blob/main/src/calendar/Calendar.tsx

https://github.com/AmruthPillai/React-Calendar/blob/main/src/calendar/Cell.tsx

https://github.com/AmruthPillai/React-Calendar/blob/main/src/App.tsx

## window　ファイルのあるところ
```
cd ~/dev/happiness/react-calendar && code .
```

## 写経元ソースコード
https://github.com/AmruthPillai/React-Calendar/tree/main/src

## 写経元youtube
https://www.youtube.com/watch?v=wyVFo2X5IM8&t=1938s

## 自分のgithubのURL
https://github.com/okuyama-code/react-ts-calendar

### なぜ clsx が必要なのか?
Reactのコンポーネントでスタイリングをする際、propsやstateに基づいて動的にクラス名を変更したいという要件がよくあります。
このような場面で、clsxは複数のクラス名や条件付きのクラス名を簡潔に、そして読みやすい形で生成するのを助けます。

## array.fromの例
```jsx
const array = Array.from({length:100},(_,i) => i + 1);//1から100までの配列


// 要素を操作するためのマップ関数として
// アロー関数を使用
Array.from([1, 2, 3], (x) => x + x);
// [2, 4, 6]

// 連番の生成
// 配列はそれぞれの場所が `undefined` で初期化されるため、
// 以下の `v` の値は `undefined` になる
Array.from({ length: 5 }, (v, i) => i);
// [0, 1, 2, 3, 4]
```
https://qiita.com/xx2xyyy/items/e03033f0a915af207796

### getDay の使用
返値 0 日, 1 月, 2　火,  3　水,　4 木,　5 金,  6 土
　
整数値で、 0 から 6 までの値を取り、地方時に基づいて指定された日付の曜日に対応し、 0 は日曜日、 1 は月曜日、 2 は火曜日のようになります。

以下の 2 行目の文は、 Date オブジェクトである xmas95 の値に基づき、weekday に 1 という値を代入します。1995 年 12 月 25 日は月曜日です。

```js
const xmas95 = new Date("December 25, 1995 23:15:30");
const weekday = xmas95.getDay();

console.log(weekday); // 1
```
