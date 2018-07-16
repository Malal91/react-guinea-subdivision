module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Sousprefectures = exports.Regions = exports.Quartiers = exports.Communes = exports.Prefectures = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var prefectures = ["Beyla", "Boffa", "Boké", "Coyah", "Dabola", "Dalaba", "Dinguiraye", "Dubréka", "Faranah", "Forécariah", "Fria", "Gaoual", "Guéckédou", "Kankan", "Kérouane", "Kindia", "Kissidougou", "Koubia", "Koundara", "Kouroussa", "Labé", "Lélouma", "Lola", "Macenta", "Mali", "Mamou", "Mandiana", "Nzérékoré", "Pita", "Siguiri", "Télimélé", "Tougué", "Yomou"];
var sousprefectures = ["Boffa-Centre", "Colia", "Doupro", "Koba-Tatema", "Lisso", "Mankountan", "Tamita", "Tougnifili", "Bintimodiya", "Boke-Centre", "Dabiss", "Kamsar", "Kanfarande", "Kolaboui", "Malapouyah", "Sangaredi", "Sansale", "Tanene", "Baguinet", "Banguingny", "Fria-Centre", "Tormelin", "Foulamory", "Gaoual-Centre", "Kakony", "Koumbia", "Kounsitel", "Malanta", "Touba", "Wendou M'bour", "Guingan", "Kamaby", "Koundara-Centre", "Sambailo", "Sareboido", "Termesse", "Youkounkoun", "Dixinn", "Kaloum", "Matam", "Matoto", "Ratoma", "Arfamoussaya", "Banko", "Bissikrima", "Dabola-centre", "Dogomet", "Kankama", "Kindoye", "Konindou", "N'Dema", "Banora", "Dialakoro", "Diatifere", "Dinguiraye-centre", "Gagnakali", "Kalinko", "Lansanya", "Selouma", "Banian", "Beindou", "Faranah-centre", "Gnaleah", "Heremakonon", "Kobikoro", "Maréla", "Passayah", "sandeniah", "Songoyah", "Tindo", "Tiro", "Albadariah", "Banama", "Bardou", "Beindou", "Fermesadou", "Firawa (Yomadou)", "Gbangbadou", "kissidougou Centre", "Koundiatou", "Manfran", "Sangardo", "Yende-Millimou", "Yombiro", "Balandougou", "Bate-nafadji", "Boula", "Gberedou-Baranama", "Kankan-centre", "Karifamoriyah", "Koumban", "Mamouroudou", "Missamana", "Moribayah", "Sabadou-Baranama", "Tinti-Oulen", "Tokounou", "Banankoro", "Damaro", "Kereouane centre", "Komodou", "Kounsankoro", "Linko", "Sibiribaro", "Soromaya", "Babila", "Balato", "Banfele", "Baro", "Cissela", "Douako", "Doura", "Kiniero", "Komola-Koura", "Koumana", "Kouroussa centre", "Sanguiana", "Balandougouba", "Dialakoro", "Faralako", "Kantoumanina", "Kinieran", "Kondianakoro", "Koundian", "Mandiana-centre", "Morodou", "Niantania", "Saladou", "Sansando", "Bankon", "Doko", "Franwalia", "Kiniebakoura", "Kintinian", "Malea", "Naboun", "Niagassola", "Niandankoro", "Norassoba", "Nounkounkan", "Siguiri-centre", "Siguirini", "Coyah centre", "Kouriya", "Maneah", "Wonkifong", "Badi", "Dubreka-centre", "Falessade", "Khorira", "Ouassou", "Tanene", "Tondon", "Alassoya", "Benty", "Farmoriah", "Forecareah Centre", "Kaback", "Kakossa", "Kallia", "Maferenya", "Moussaya", "Sikhourou", "Bangouyah", "Damankanyah", "Friguiagbe", "Kindia centre", "Kolente", "Lynsan", "Madina Oula", "Mambiya", "Molota", "Samayah", "Sougueta", "Bourouwal", "Daramagnaky", "Gougoudje", "Koba", "Kollet", "Konsotamy", "Missira", "Santou", "Sarekaly", "Sinta", "Sogolon", "Tarihoye", "Telimele centre", "Thionthian", "Fafaya", "Gadha Woundou", "Koubia centre", "Matakaou", "Missira", "Pilimini", "Dalein", "Daralabe", "Diari", "Dionfo", "Garambe", "Hafia", "Kaalan", "Kouramangui", "Labé centre", "Noussy", "Popodara", "Sannoun", "Taranbaly", "Tountouroun", "Balaya", "Djountou", "Herico", "Korbe", "Lafou", "Lelouma centre", "Linsansaran", "Manda", "Parawol", "Sagale", "Tyanguel-Bori", "Balaki", "Donghol Sigon", "Dougountouny", "Fougou", "Gayah", "Hidayatou", "Lebekere", "Madina Wora", "Mali centre", "Salambande", "Telire", "Touba", "Yembereng", "Fatako", "Fello Koundoua", "Kansangui", "Kolangui", "Kollet", "Konah", "Kouratongo", "Koyin", "Tangaly", "Tougue centre", "Bodié", "Dalaba centre", "Ditinn", "Kaalan", "Kankalabe", "Kebali", "Koba", "Mafara", "Mitty", "Mombeyah", "Bouliwel", "Dounet", "Gongoret", "Kegneko", "Konkoure", "Mamou centre", "Nyagara", "Oure Kaba", "Poredaka", "Saramoussaya", "Soyah", "Teguereya", "Timbo", "Tolo", "Bantignel", "Bourouwal Tappe", "Dongol Touma", "Gongore", "Ley-Miro", "Maci", "Ninguelande", "Pita centre", "Sangareah", "Sintaly", "Timbi-Madina", "Timbi-Touny", "Beyla centre", "Boola", "Diarraguerela", "Diassadou", "Fouala", "Gbackédou", "Gbéssoba", "karala", "Koumandou", "Mousadou", "Nionsomoridou", "Samana", "Sinko", "Sokourala", "Bolodou", "Fangamadou", "Guéckédou centre", "Guéndembou", "Kassadou", "Koundou", "Nongoa", "Ouendé Kénéma", "Tékoulo", "Terméssadou Djibo", "Bossou", "Foumbadou", "Gama Berema", "Guéassou", "Kokota", "Laine", "Lola centre", "N'Zoo", "Tounkarata", "Balizia", "Binikala", "Bofossou", "Daro", "Fassankoni", "kouankan", "Koyama", "Macenta centre", "N'Zébéla", "Orémaï", "Panziazou", "Semgbédou", "Sérédou", "Vasérédou", "Watanka", "Bounouma", "Gouécké", "Kobéla", "Koropara", "Koulé", "N'Zérékoré centre", "Palé", "Samoé", "Soulouma", "Womey", "Yalenzou", "Banié", "Bheta", "Bignamou", "Bowé", "Diécké", "Péla", "Yomou centre"];
var communes = ["Dixinn", "Kaloum", "Matam", "Matoto", "Ratoma"];
var quartiers = ["Almamya", "Béanzin", "Belle-vue école", "Belle-vue-marché", "Boulbinet", "Bonfi", "Bonfi-marché", "Boussoura", "Camayenne", "Cameroun", "Camp Alpha Yaya Diallo", "Carrière", "Citée de l'air", "Cobaya", "Coléah-centre", "Coléah-cité", "Coronthie", "Dabompa", "Dabondy 1", "Dabondy 2", "Dabondy 3", "Dabondyécole", "Dabondy-rails", "Dar-es-salam", "Dixinn-cité1", "Dixinn-cité 2", "Dixinn-gare", "Dixinn-gare-rails", "Dixinn-mosquée", "Dixinn-port", "Domino", "Fotoba", "Gbéssia-centre", "Gbéssia-cité 1", "Gbessia-cité 2", "Gbessia-cité 3", "Gbéssia-école", "Gbéssia-port 1", "Gbéssia-port 2", "Hafia 1", "Hafia 2", "Hafia-minière", "Hafia-mosquée", "Hamdalaye 1", "Hamdalaye 2", "Hamdalaye-mosquée", "Hermakönon", "Imprimerie", "Kaporo-centre", "Kaporo-rails", "Kassa", "Kénien", "Kipé", "Kissosso", "Koloma 1", "Koloma 2", "Kouléwondy", "Lambadji", "Landréah", "Lanséboudji", "Madina-centre", "Madina-cité", "Madina-école", "Madina-marché", "Madina-mosquée", "Mafanco", "Mafonco-centre", "Manquepas", "Matam", "Matam-lido", "Matoto-centre", "Matoto-marché", "Minière-cité", "Nongo", "Ratoma-centre", "Ratoma-dispensaire", "Sandervalia", "Sangoya-mosquée", "Sans-fil", "Simbaya 1", "Simbaya 2", "Simbaya-gare", "Sonfonia-gare", "Tanéné-marché", "Tanéné-mosquée", "Taouyah", "Témitaye", "Tombo", "Tombolia", "Touguiwondy", "Wanindara", "Yattayah", "Yimbaya-école", "Yimbaya-permanence", "Yimbaya-tannerie"];
var regions = ["Conakry", "Boké", "Kindia", "Mamou", "Faranah", "Kankan", "Labé", "N'Zérékoré"];

var Prefectures = function (_Component) {
    _inherits(Prefectures, _Component);

    function Prefectures() {
        _classCallCheck(this, Prefectures);

        return _possibleConstructorReturn(this, (Prefectures.__proto__ || Object.getPrototypeOf(Prefectures)).apply(this, arguments));
    }

    _createClass(Prefectures, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "col-md-3" },
                _react2.default.createElement(
                    "select",
                    { className: "form-control selectpicker" },
                    prefectures.map(function (prop) {
                        return _react2.default.createElement(
                            "option",
                            { key: prop, value: prop },
                            prop
                        );
                    })
                )
            );
        }
    }]);

    return Prefectures;
}(_react.Component);

var Communes = function (_Component2) {
    _inherits(Communes, _Component2);

    function Communes() {
        _classCallCheck(this, Communes);

        return _possibleConstructorReturn(this, (Communes.__proto__ || Object.getPrototypeOf(Communes)).apply(this, arguments));
    }

    _createClass(Communes, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "col-md-3" },
                _react2.default.createElement(
                    "select",
                    { className: "form-control selectpicker" },
                    communes.map(function (prop) {
                        return _react2.default.createElement(
                            "option",
                            { key: prop, value: prop },
                            prop
                        );
                    })
                )
            );
        }
    }]);

    return Communes;
}(_react.Component);

var Quartiers = function (_Component3) {
    _inherits(Quartiers, _Component3);

    function Quartiers() {
        _classCallCheck(this, Quartiers);

        return _possibleConstructorReturn(this, (Quartiers.__proto__ || Object.getPrototypeOf(Quartiers)).apply(this, arguments));
    }

    _createClass(Quartiers, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "col-md-3" },
                _react2.default.createElement(
                    "select",
                    { className: "form-control selectpicker" },
                    quartiers.map(function (prop) {
                        return _react2.default.createElement(
                            "option",
                            { key: prop, value: prop },
                            prop
                        );
                    })
                )
            );
        }
    }]);

    return Quartiers;
}(_react.Component);

var Regions = function (_Component4) {
    _inherits(Regions, _Component4);

    function Regions() {
        _classCallCheck(this, Regions);

        return _possibleConstructorReturn(this, (Regions.__proto__ || Object.getPrototypeOf(Regions)).apply(this, arguments));
    }

    _createClass(Regions, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "col-md-3" },
                _react2.default.createElement(
                    "select",
                    { className: "form-control selectpicker" },
                    regions.map(function (prop) {
                        return _react2.default.createElement(
                            "option",
                            { key: prop, value: prop },
                            prop
                        );
                    })
                )
            );
        }
    }]);

    return Regions;
}(_react.Component);

var Sousprefectures = function (_Component5) {
    _inherits(Sousprefectures, _Component5);

    function Sousprefectures() {
        _classCallCheck(this, Sousprefectures);

        return _possibleConstructorReturn(this, (Sousprefectures.__proto__ || Object.getPrototypeOf(Sousprefectures)).apply(this, arguments));
    }

    _createClass(Sousprefectures, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "col-md-3" },
                _react2.default.createElement(
                    "select",
                    { className: "form-control selectpicker" },
                    sousprefectures.map(function (prop) {
                        return _react2.default.createElement(
                            "option",
                            { key: prop, value: prop },
                            prop
                        );
                    })
                )
            );
        }
    }]);

    return Sousprefectures;
}(_react.Component);

exports.Prefectures = Prefectures;
exports.Communes = Communes;
exports.Quartiers = Quartiers;
exports.Regions = Regions;
exports.Sousprefectures = Sousprefectures;

/***/ })
/******/ ]);