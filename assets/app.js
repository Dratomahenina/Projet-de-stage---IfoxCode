import './bootstrap.js';
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */

// console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');

// import jquery
const $ = require('jquery');

// bootstrap
require('bootstrap');

import "./styles/app.sass";
import "./styles/_body.sass";
import "./styles/_h.sass";
import "./styles/_header-image.sass";
import "./styles/_p.sass";
import "./styles/_password-icon.sass";
import "./styles/_main.sass";

// import js file
import "./showAndHiddePassword.js";