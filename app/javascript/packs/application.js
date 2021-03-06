// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import 'bootstrap';
import '../stylesheets/application';
import '@fortawesome/fontawesome-free/js/all';
import '../js/test'

Rails.start()
Turbolinks.start()
ActiveStorage.start()

// 作成したファイルをwebpackerに読み込ませます。
import "../stylesheets/application"
import "../js/hoge.js"

// app/javascript/images/フォルダー内の001.jpeg画像を
// webpackerに読み込ませます。
//const images = require.context('../images', true)