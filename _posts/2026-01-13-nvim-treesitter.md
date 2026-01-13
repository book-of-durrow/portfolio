---
layout: programming
title: nvim-treesitterでTSInstallがコケる場合
date: 2026-01-13
categories: programming
name: nvim-treesitterでTSInstallがコケる場合
---

# TL; DR

```PowerShell
winget install zig.zig
```

上記でzigを入れ、それでパーサをコンパイルさせよう。

# 起こっていた現象

`TSInstall haskell`を実行すると、gcc, clang, cl, zigがないよ、と言われて実行できない。

# 問題の解決のためにやったこと

まずLLVMをインストールした。  
これによってclangが入ったが、今渡は`stdlib.h`が見つからないと言われてコンパイルがコケた。

次にVisual Studioを入れたが、PATHの中にcl.exeが入っていないので、Developer Command Prompt for VS 2022を起動し、そこで起動したnvimからTSInstallをしたが、それでもコケた。  
`cl`を普通に実行してみたところ、x86環境だったので、改めてx64 Native Tools Command Prompt for VS 2022を起動し、そこでも同様のことを行った。

色々やっているうちにコンパイル自体は通ったのだが、haskell.soというのが生成され、これがある状態だとtree-sitterがエラーを吐いた。  
最終的にzigをインストールし、zigを使うようにしてパーサのコンパイルを行ったところ、無事tree-sitterで使用できるパーサが生成できた。
