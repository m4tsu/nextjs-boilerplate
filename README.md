# Next.js ボイラープレート

色々回って調べていると、結局どれを最低限 install すれば動くのか？どう設定するべきなのか？と悩むことがあったので現状のものを残しておく。
基本的に利用することになりそうなツールのための、必要最低限のパッケージとその設定ファイル等を一通り用意した。

- TypeScirpt
- Jest, react-testing-library
- ESlint, prettier
- styled-components
- Storybook

ディレクトリ構成（特に ~.test.tsx とか ~.stories.tsx とかをディレクトリ分けずに置くかどうか）とかは、どうするのがベストかまだ良くわかっていない。

## 各パッケージに関連する設定

### TypeScirpt

TypeScript を使わない理由はないため入れる。

#### 関連パッケージ

- typescript
- @types/react, @types/node 等の TypeScript 用型定義パッケージ

#### 設定ファイル

- `tsconfig.json`

`"compilerOptions": { paths: {}} `
で、例えば`src/components/Button.tsx` のファイルを `import {} from @/components/Button` というふうに絶対パスでインポートできるように設定している。
他の設定ファイルにもこの設定と合わせるための設定があるので注意。

### Jest, react-testing-library

テストのため。
`Jest` は js のテストフレームワーク、`react-testing-library` は react コンポーネントをテストするためのライブラリ。 `enzyme` というライブラリも使われることがあるらしいが好みとか、プロジェクトの要望に合わせて選択する。
今回は `react-testing-library` を利用する

#### 関連パッケージ

- jest
- @types/jest
- ts-jest
- @testing-library/jest-dom
- @testing-library/react
- @testing-library/user-event
- identity-obj-proxy

`identity-obj-proxy` は CSS Modules を使う場合に必要。

#### 設定ファイル

- `jest.config.js`
- `setupTests.ts`

`'@testing-library/jest-dom'` をテストファイルでインポートしないとコンポーネントのテストができないが、いちいち毎回インポート書かなくていいようにここに書いて config で呼んでいる。

- `tsconfig.test.json`

テスト用の jsconfig。

```
"compilerOptions": {
  "jsx": "react-jsxdev"
}
```

`react-jsxdev`　は React17 以降の場合。

- `src/lib/testUtils/testUtils.tsx`

ファイルの場所は好きなように。
例えば今回使っている `styled-components` の `<ThemeProvider/>` のように、テストしたいコンポーネントが依存するプロバイダー等がある場合に、テストファイルでいちいち書くのが面倒なので、
testing-library のデフォルトの `render` の代わりに、それらのプロバイダー等を入れ込む `customRender` を定義している。

### ESlint, Prettier

基本的にはコードの規約とかフォーマットはこれらに任せる。

#### 関連パッケージ

- prettier
- eslint
- eslint-config-prettier
- @typescript-eslint/eslint-plugin
- @typescript-eslint/parser
- eslint-plugin-react
- eslint-plugin-react-hooks
- eslint-plugin-jsx-a11y

`eslint-plugin-prettier` というパッケージが今まで使われていたが、最近公式で非推奨になったらしい。prettier の実行は VScode 等のエディタや IDE で行わせる。
eslint のルールとして `airbnb` や `google` のものがあるが好みで入れる。
`eslint-plugin-jsx-a11y`は最低限のアクセシビリティを保つように忠告してくれるのでとりあえずいれている。

#### 設定ファイル

- `.eslintignore`
- `.eslintrc.json`
- `.prettierrc.json`

### styled-components

コンポーネントのスタイリングについては最近は他の選択肢も結構あるので `styled-components`一択という感じではなさそうだがとりあえず今回はこれをいれている。

#### 関連パッケージ

- styled-components
- @types/styled-components
- babel-plugin-styled-components

#### 設定ファイル

- `.babelrc`

```
"plugins": [
    [
      "babel-plugin-styled-components",
      {
        "ssr": true,
        "displayName": true
      }
    ]
  ]
```

の部分。
あと今回は書いてないが、SSR する場合は `src/pages/_document.tsx` に SSR 用に色々書く必要がある。

- `src/lib/styled-components/theme.ts`

`theme` を定義して `<ThemeProvider/>`に渡している。

### Storybook

コンポーネントをカタログ化して管理できるツール。

#### 関連パッケージ

- @storybook/react
- @storybook/addon-a11y
- @storybook/essentials
- storybook-addon-designs

必須なのは `@storybook/react` のみだが、基本的に使いたくなる addon は `@storybook/essentials` に入っている。
`storybook-addon-designs` は Storybook 上に Figma 等のデザインを表示させることができる addon だが、使ってみたところ
デザインの表示はできても CSS 等が確認できるわけではないので微妙かもしれないと思った。

#### 設定ファイル

- `.storybook/main.js`
- `.storybook/preview.js`

testing-library の時と同様に、Storybook 上で `<ThemeProvider/>` などに依存している場合はここでラップするなどしておく。
