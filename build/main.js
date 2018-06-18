webpackJsonp([0],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/feed/feed.module": [
		151
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 150;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedPageModule", function() { return FeedPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feed__ = __webpack_require__(152);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FeedPageModule = /** @class */ (function () {
    function FeedPageModule() {
    }
    FeedPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__feed__["a" /* FeedPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__feed__["a" /* FeedPage */]),
            ],
        })
    ], FeedPageModule);
    return FeedPageModule;
}());

//# sourceMappingURL=feed.module.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_general_general__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FeedPage = /** @class */ (function () {
    function FeedPage(navCtrl, navParams, generalPrivider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.generalPrivider = generalPrivider;
    }
    FeedPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FeedPage');
    };
    FeedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-feed',template:/*ion-inline-start:"C:\Users\Klaus\myApp\src\pages\feed\feed.html"*/'<!--\n  Generated template for the FeedPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Informaçoes</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<div>\nA aplicação foi desenvolvida pelos alunos Antonio Lourran, Andrew Noronha, Caique Sampaio, Guilherme Ramos, Robson Oliveira e Klaus Fontenelle, do curso de graduação em Sistemas e Mídias Digitais, pela Universidade Federal do Ceará. Com orientação e supervisão das professoras Vanessa Ester Silva Farias, Cátia Luzia Oliveira da Silva, Maria de Fátima Costa de Souza, Maria Joelma Pereira Peixoto. Agradecimento especial à Professora Mara Bonates, cliente e responsável por boa parte das orientações sobre o projeto.\n</div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Klaus\myApp\src\pages\feed\feed.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_general_general__["a" /* GeneralProvider */]])
    ], FeedPage);
    return FeedPage;
}());

//# sourceMappingURL=feed.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__feed_feed__ = __webpack_require__(152);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__feed_feed__["a" /* FeedPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Klaus\myApp\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Favoritos" tabIcon="star"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Pesquisa" tabIcon="flask"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Lista" tabIcon="cart"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Informações" tabIcon="information-circle"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\Klaus\myApp\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_general_general__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { FavoritosComponent } from '../../components/favoritos/favoritos';
var AboutPage = /** @class */ (function () {
    //agr
    function AboutPage(navCtrl, alertCtrl, generalProvider) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.generalProvider = generalProvider;
        this.searchQuery = '';
        this.fav = [
            {
                'title': '',
                'fav': false,
                'animal': false,
                'vegetal': false,
                'talvez': false,
                'ordem': ''
            }
        ];
        this.tabinterno = true;
        this.favoritos = [];
        this.initializeItems();
    }
    AboutPage.prototype.ionViewDidEnter = function () {
        var aux = JSON.parse(sessionStorage.getItem('AboutPage'));
        this.favoritos = this.generalProvider.favGeral;
        console.log(this.favoritos);
    };
    AboutPage.prototype.ionViewWillEnter = function () {
        //console.log("valor");
    };
    AboutPage.prototype.initializeItems = function () {
        if (this.tabinterno) {
            this.items = [
                'item10',
                'item12',
                'item13',
                'item14',
                'item15',
            ];
        }
        if (!this.tabinterno) {
            this.items = [
                'item10000',
                'item12000',
                'item13000',
                'item14000',
                'item15000',
            ];
        }
        if (this.tabinterno) {
            this.fav = [
                {
                    'title': 'Acido Carminico INS 120',
                    'fav': this.generalProvider.armazemDeFav,
                    'animal': true,
                    'vegetal': false,
                    'talvez': false,
                    'ordem': '1'
                },
                {
                    'title': 'Acido Sorbico INS 200',
                    'fav': this.generalProvider.armazemDeFav2,
                    'animal': false,
                    'vegetal': true,
                    'talvez': false,
                    'ordem': '2'
                },
                {
                    'title': 'Sorbato de Potassio INS 202',
                    'fav': this.generalProvider.armazemDeFav3,
                    'animal': false,
                    'vegetal': true,
                    'talvez': false,
                    'ordem': '3'
                }, {
                    'title': 'Sorbato de Cálcio INS 203',
                    'fav': this.generalProvider.armazemDeFav4,
                    'animal': false,
                    'vegetal': true,
                    'talvez': false,
                    'ordem': '4'
                },
                {
                    'title': 'Acido Benzoico INS 210',
                    'fav': this.generalProvider.armazemDeFav5,
                    'animal': false,
                    'vegetal': true,
                    'talvez': false,
                    'ordem': '5'
                },
                {
                    'title': 'Dioxido de Enxofre INS 220',
                    'fav': this.generalProvider.armazemDeFav6,
                    'animal': false,
                    'vegetal': true,
                    'talvez': false,
                    'ordem': '6'
                },
                {
                    'title': 'Lecitina INS 322',
                    'fav': this.generalProvider.armazemDeFav7,
                    'animal': true,
                    'vegetal': false,
                    'talvez': false,
                    'ordem': '7'
                },
                {
                    'title': 'Glicerina INS 422',
                    'fav': this.generalProvider.armazemDeFav8,
                    'animal': false,
                    'vegetal': false,
                    'talvez': true,
                    'ordem': '8'
                },
                {
                    'title': 'Gelatina INS 441',
                    'fav': this.generalProvider.armazemDeFav9,
                    'animal': true,
                    'vegetal': false,
                    'talvez': false,
                    'ordem': '9'
                },
                {
                    'title': 'Acido Estearico INS 570',
                    'fav': this.generalProvider.armazemDeFav10,
                    'animal': true,
                    'vegetal': false,
                    'talvez': false,
                    'ordem': '10'
                },
                {
                    'title': 'Goma Laca INS 904',
                    'fav': this.generalProvider.armazemDeFav11,
                    'animal': true,
                    'vegetal': false,
                    'talvez': false,
                    'ordem': '11'
                },
                {
                    'title': 'Cisteina INS 920',
                    'fav': this.generalProvider.armazemDeFav12,
                    'animal': true,
                    'vegetal': false,
                    'talvez': false,
                    'ordem': '12'
                }
            ];
        }
        else if (!this.tabinterno) {
            this.fav = [
                {
                    'title': 'Oleo de Ricino',
                    'fav': this.generalProvider.armazemDeFav13,
                    'animal': false,
                    'vegetal': true,
                    'talvez': false,
                    'ordem': '13'
                },
                {
                    'title': 'Acido Caprilico',
                    'fav': this.generalProvider.armazemDeFav14,
                    'animal': true,
                    'vegetal': false,
                    'talvez': false,
                    'ordem': '14'
                },
                {
                    'title': 'Acido Hialuronico',
                    'fav': this.generalProvider.armazemDeFav15,
                    'animal': true,
                    'vegetal': false,
                    'talvez': false,
                    'ordem': '15'
                },
                {
                    'title': 'Alcool Cetilico',
                    'fav': this.generalProvider.armazemDeFav16,
                    'animal': true,
                    'vegetal': false,
                    'talvez': false,
                    'ordem': '16'
                },
                {
                    'title': 'Acido Linoleico',
                    'fav': this.generalProvider.armazemDeFav17,
                    'animal': true,
                    'vegetal': false,
                    'talvez': false,
                    'ordem': '17'
                },
                {
                    'title': 'Acido Nucleico',
                    'fav': this.generalProvider.armazemDeFav18,
                    'animal': true,
                    'vegetal': false,
                    'talvez': false,
                    'ordem': '18'
                },
                {
                    'title': 'Alantoina',
                    'fav': this.generalProvider.armazemDeFav19,
                    'animal': false,
                    'vegetal': false,
                    'talvez': true,
                    'ordem': '19'
                },
                {
                    'title': 'Colageno',
                    'fav': this.generalProvider.armazemDeFav20,
                    'animal': true,
                    'vegetal': false,
                    'talvez': false,
                    'ordem': '20'
                },
                {
                    'title': 'Elastina',
                    'fav': this.generalProvider.armazemDeFav21,
                    'animal': true,
                    'vegetal': false,
                    'talvez': false,
                    'ordem': '21'
                },
                {
                    'title': 'Esqualeno',
                    'fav': this.generalProvider.armazemDeFav22,
                    'animal': true,
                    'vegetal': false,
                    'talvez': false,
                    'ordem': '22'
                },
                {
                    'title': 'Esterol',
                    'fav': this.generalProvider.armazemDeFav23,
                    'animal': true,
                    'vegetal': false,
                    'talvez': false,
                    'ordem': '23'
                },
                {
                    'title': 'Queratina',
                    'fav': this.generalProvider.armazemDeFav24,
                    'animal': true,
                    'vegetal': false,
                    'talvez': false,
                    'ordem': '24'
                }
            ];
        }
        ;
    };
    AboutPage.prototype.addfavoritos = function (str) {
        var _this = this;
        for (var i = 0; i < this.fav.length; ++i) {
            if (this.fav[i].title == str.title) {
                if (this.fav[i].fav == false && this.generalProvider.favGeral.findIndex(function (n) { return n === _this.fav[i].title; }) === -1) {
                    this.favoritos.push(this.fav[i]);
                    this.fav[i].fav = true;
                    if (this.fav[i].ordem == '1') {
                        this.generalProvider.armazemDeFav = true;
                    }
                    if (this.fav[i].ordem == '2') {
                        this.generalProvider.armazemDeFav2 = true;
                    }
                    if (this.fav[i].ordem == '3') {
                        this.generalProvider.armazemDeFav3 = true;
                    }
                    if (this.fav[i].ordem == '4') {
                        this.generalProvider.armazemDeFav4 = true;
                    }
                    if (this.fav[i].ordem == '5') {
                        this.generalProvider.armazemDeFav5 = true;
                    }
                    if (this.fav[i].ordem == '6') {
                        this.generalProvider.armazemDeFav6 = true;
                    }
                    if (this.fav[i].ordem == '7') {
                        this.generalProvider.armazemDeFav7 = true;
                    }
                    if (this.fav[i].ordem == '8') {
                        this.generalProvider.armazemDeFav8 = true;
                    }
                    if (this.fav[i].ordem == '9') {
                        this.generalProvider.armazemDeFav9 = true;
                    }
                    if (this.fav[i].ordem == '10') {
                        this.generalProvider.armazemDeFav10 = true;
                    }
                    if (this.fav[i].ordem == '11') {
                        this.generalProvider.armazemDeFav11 = true;
                    }
                    if (this.fav[i].ordem == '12') {
                        this.generalProvider.armazemDeFav12 = true;
                    }
                    if (this.fav[i].ordem == '13') {
                        this.generalProvider.armazemDeFav13 = true;
                    }
                    if (this.fav[i].ordem == '14') {
                        this.generalProvider.armazemDeFav14 = true;
                    }
                    if (this.fav[i].ordem == '15') {
                        this.generalProvider.armazemDeFav15 = true;
                    }
                    if (this.fav[i].ordem == '16') {
                        this.generalProvider.armazemDeFav16 = true;
                    }
                    if (this.fav[i].ordem == '17') {
                        this.generalProvider.armazemDeFav17 = true;
                    }
                    if (this.fav[i].ordem == '18') {
                        this.generalProvider.armazemDeFav18 = true;
                    }
                    if (this.fav[i].ordem == '19') {
                        this.generalProvider.armazemDeFav19 = true;
                    }
                    if (this.fav[i].ordem == '20') {
                        this.generalProvider.armazemDeFav20 = true;
                    }
                    if (this.fav[i].ordem == '21') {
                        this.generalProvider.armazemDeFav21 = true;
                    }
                    if (this.fav[i].ordem == '22') {
                        this.generalProvider.armazemDeFav22 = true;
                    }
                    if (this.fav[i].ordem == '23') {
                        this.generalProvider.armazemDeFav23 = true;
                    }
                    if (this.fav[i].ordem == '24') {
                        this.generalProvider.armazemDeFav24 = true;
                    }
                }
                else {
                    if (this.fav[i].ordem == '1') {
                        this.generalProvider.armazemDeFav = false;
                    }
                    if (this.fav[i].ordem == '2') {
                        this.generalProvider.armazemDeFav2 = false;
                    }
                    if (this.fav[i].ordem == '3') {
                        this.generalProvider.armazemDeFav3 = false;
                    }
                    if (this.fav[i].ordem == '4') {
                        this.generalProvider.armazemDeFav4 = false;
                    }
                    if (this.fav[i].ordem == '5') {
                        this.generalProvider.armazemDeFav5 = false;
                    }
                    if (this.fav[i].ordem == '6') {
                        this.generalProvider.armazemDeFav6 = false;
                    }
                    if (this.fav[i].ordem == '7') {
                        this.generalProvider.armazemDeFav7 = false;
                    }
                    if (this.fav[i].ordem == '8') {
                        this.generalProvider.armazemDeFav8 = false;
                    }
                    if (this.fav[i].ordem == '9') {
                        this.generalProvider.armazemDeFav9 = false;
                    }
                    if (this.fav[i].ordem == '10') {
                        this.generalProvider.armazemDeFav10 = false;
                    }
                    if (this.fav[i].ordem == '11') {
                        this.generalProvider.armazemDeFav11 = false;
                    }
                    if (this.fav[i].ordem == '12') {
                        this.generalProvider.armazemDeFav12 = false;
                    }
                    if (this.fav[i].ordem == '13') {
                        this.generalProvider.armazemDeFav13 = false;
                    }
                    if (this.fav[i].ordem == '14') {
                        this.generalProvider.armazemDeFav14 = false;
                    }
                    if (this.fav[i].ordem == '15') {
                        this.generalProvider.armazemDeFav15 = false;
                    }
                    if (this.fav[i].ordem == '16') {
                        this.generalProvider.armazemDeFav16 = false;
                    }
                    if (this.fav[i].ordem == '17') {
                        this.generalProvider.armazemDeFav17 = false;
                    }
                    if (this.fav[i].ordem == '18') {
                        this.generalProvider.armazemDeFav18 = false;
                    }
                    if (this.fav[i].ordem == '19') {
                        this.generalProvider.armazemDeFav19 = false;
                    }
                    if (this.fav[i].ordem == '20') {
                        this.generalProvider.armazemDeFav20 = false;
                    }
                    if (this.fav[i].ordem == '21') {
                        this.generalProvider.armazemDeFav21 = false;
                    }
                    if (this.fav[i].ordem == '22') {
                        this.generalProvider.armazemDeFav22 = false;
                    }
                    if (this.fav[i].ordem == '23') {
                        this.generalProvider.armazemDeFav23 = false;
                    }
                    if (this.fav[i].ordem == '24') {
                        this.generalProvider.armazemDeFav24 = false;
                    }
                    this.fav[i].fav = false;
                    this.favoritos.splice(this.generalProvider.favGeral.findIndex(function (n) { return n === _this.fav[i].title; }), 1);
                    console.log('ESSE');
                }
            }
        }
        this.generalProvider.favGeral = this.favoritos;
    };
    AboutPage.prototype.tabinternotroca = function (b) {
        if (!this.tabinterno) {
            this.tabinterno = !b;
            this.initializeItems();
            console.log("deuuo");
        }
    };
    AboutPage.prototype.tabinternotroca2 = function (b) {
        if (this.tabinterno) {
            this.tabinterno = !b;
            this.initializeItems();
            console.log("deuuo22");
        }
    };
    AboutPage.prototype.getItems = function (ev) {
        // Reset items back all of the items
        this.initializeItems();
        //set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string dont filter items
        if (val && val.trim() != "") {
            this.fav = this.fav.filter(function (item) {
                return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    AboutPage.prototype.message = function (it) {
        if (it.title == 'Acido Carminico INS 120') {
            this.text = {
                title: 'Ácido Carmínico, INS 120',
                subTitle: 'Pigmento vermelho obtido através da compressão da fêmea do inseto cochonilha. Os insetos precisam ser mortos para produzir o corante de cor vermelha. Usado em cosméticos, pós, ruges e xampus. Pode ser substituído por suco de beterraba (não possui qualquer toxidade).',
            };
        }
        if (it.title == 'Acido Sorbico INS 200') {
            this.text = {
                title: 'Ácido Sórbico, INS 200',
                subTitle: 'Presente em vinhos, frutas desidratadas, vegetais em conservas, azeitonas, queijos, produtos de pastelaria e panificação, molhos prontos, carnes prontas para consumo, produtos lácteos aromatizados e produtos de confeitaria.',
            };
        }
        if (it.title == 'Sorbato de Potassio INS 202') {
            this.text = {
                title: 'Sorbato de Potássio, INS 202',
                subTitle: 'Presente em vinhos, frutas desidratadas, vegetais em conservas, azeitonas, queijos, produtos de pastelaria e panificação, molhos prontos, carnes prontas para consumo, produtos lácteos aromatizados e produtos de confeitaria.',
            };
        }
        if (it.title == 'Sorbato de Cálcio INS 203') {
            this.text = {
                title: 'Sorbato de Cálcio, INS 203',
                subTitle: 'Presente em vinhos, frutas desidratadas, vegetais em conservas, azeitonas, queijos, produtos de pastelaria e panificação, molhos prontos, carnes prontas para consumo, produtos lácteos aromatizados e produtos de confeitaria.',
            };
        }
        if (it.title == 'Acido Benzoico INS 210') {
            this.text = {
                title: 'Acido Benzoico, INS 210',
                subTitle: 'Presente em refrigerantes, cervejas, refrescos, doces e geléias, produtos de frutas, queijo, molhos, margarina, creme vegetal e produtos de confeitaria.',
            };
        }
        if (it.title == 'Dioxido de Enxofre INS 220') {
            this.text = {
                title: 'Dióxido de Enxofre, INS 220',
                subTitle: 'Presente em açúcar refinado, batatas congeladas, bebidas alcoólicas, frutas dessecadas, geléias artificiais, legumes e verduras desidratadas, sucos, refrigerantes e refrescos, picles, vinhos, vinagres e frutos do mar.',
            };
        }
        if (it.title == 'Lecitina INS 322') {
            this.text = {
                title: 'Lecitina, INS 322',
                subTitle: 'Substância presente nos tecidos nervosos, mas freqüentemente obtida para uso comercial em ovos. Pode ser substituído por lecitina de soja e sintéticos.',
            };
        }
        if (it.title == 'Glicerina INS 422') {
            this.text = {
                title: 'Glicerina, INS 422',
                subTitle: 'Substância líquida, incolor e xaroposa, que é o princípio doce dos óleos e a base dos corpos gordos conhecidos. Pode ser produzida a partir de gordura animal ou vegetal. Também existe glicerina vegetal ou sintética',
            };
        }
        if (it.title == 'Gelatina INS 441') {
            this.text = {
                title: 'Gelatina, INS 441',
                subTitle: 'Presente em refrigerantes, cervejas, refrescos, doces e geléias, produtos de frutas, queijo, molhos, margarina, creme vegetal e produtos de confeitaria.',
            };
        }
        if (it.title == 'Goma Laca INS 904') {
            this.text = {
                title: 'Goma Laca, INS 904',
                subTitle: 'Excreção resinosa de determinados insetos. Utilizada em laquês para cabelo. Pode ser substituído por cera de plantas',
            };
        }
        if (it.title == 'Acido Estearico INS 570') {
            this.text = {
                title: 'Acido Estearico, INS 570',
                subTitle: 'Pode derivar de gordura de vacas, de ovelhas, de cães e de gatos sacrificados. Na maioria das vezes se refere a uma substância gordurosa tirada do estômago de porcos. Possui diversos derivados, como os estearatos. O ácido esteárico pode ser encontrado em várias gorduras vegetais, como coco.',
            };
        }
        if (it.title == 'Cisteina INS 920') {
            this.text = {
                title: 'Cisteina, INS 920',
                subTitle: 'Aminoácido retirado de pêlos de animais',
            };
        }
        if (it.title == 'Oleo de Ricino') {
            this.text = {
                title: 'Oleo de Ricino',
                subTitle: 'Extraído da planta Ricinus communis (Mamona). Usado em cosméticos, medicamentos e lubrificantes',
            };
        }
        if (it.title == 'Acido Caprilico') {
            this.text = {
                title: 'Acido Caprilico',
                subTitle: 'Ácido líquido e gorduroso do leite de vaca ou cabra. Encontrado em perfumes e sabonetes. Possui derivados, como o Triglicerídeo Caprílico. Pode ser substituído por óleo de palma e de coco.',
            };
        }
        if (it.title == 'Acido Hialuronico') {
            this.text = {
                title: 'Acido Hialuronico',
                subTitle: 'Proteína encontrada em cordões umbilicais e em fluidos das articulações. Também pode substituído por ácido hialurônico sintético ou óleos vegetais.',
            };
        }
        if (it.title == 'Alcool Cetilico') {
            this.text = {
                title: 'Alcool Cetilico',
                subTitle: 'Cera encontrada no espermacete (cetina) do esperma de baleias e golfinhos. Pode ser substituído por álcool cetílico vegetal ou espermacete sintético.',
            };
        }
        if (it.title == 'Acido Linoleico') {
            this.text = {
                title: 'Acido Linoleico',
                subTitle: 'Ácido graxo que pode ser origem animal ou vegetal.',
            };
        }
        if (it.title == 'Acidos Nucleicos') {
            this.text = {
                title: 'Acidos Nucleicos',
                subTitle: 'Encontrado nos núcleos de todas as células vivas.',
            };
        }
        if (it.title == 'Alantoina') {
            this.text = {
                title: 'Alantoina',
                subTitle: 'Ácido úrico de vacas e outros mamíferos. Pode ser encontrado também em algumas plantas (como confrei). Pode ser substituído por extrato de raízes de confrei ou sintéticos.',
            };
        }
        if (it.title == 'Colageno') {
            this.text = {
                title: 'Colageno',
                subTitle: 'Proteína fibrosa, de natureza mucopolissacarídica, que é constituinte essencial da substância intercelular do tecido conjuntivo. Geralmente proveniente de animais. Pode ser substituído por proteína da soja ou óleo de amêndoas.',
            };
        }
        if (it.title == 'Elastina') {
            this.text = {
                title: 'Elastina',
                subTitle: 'Proteína elástica, encontrada nos ligamentos do pescoço e nas paredes arteriais das vacas. Similar ao colágeno. Não afeta a elasticidade da pele.',
            };
        }
        if (it.title == 'Esqualeno') {
            this.text = {
                title: 'Esqualeno',
                subTitle: 'Óleo de fígado de tubarão. Usado em hidratantes e em tintas de cabelo. Pode ser substituído por vegetais emolientes como azeite de oliva, óleo de gérmen de trigo e óleo de farelo de arroz.',
            };
        }
        if (it.title == 'Esterol') {
            this.text = {
                title: 'Esterol',
                subTitle: 'Uma mistura de álcoois sólidos. Pode ser obtido do óleo de esperma de baleia. Usado em cremes e xampus. Possui diversos derivados. Existe o ácido esteárico vegetal.',
            };
        }
        if (it.title == 'Queratina') {
            this.text = {
                title: 'Queratina',
                subTitle: 'Proteína insolúvel, principal constituinte da epiderme, unhas, pêlos, tecidos córneos e esmalte dos dentes. Pode ser obtida nos chifres, cascos, penas e pêlo de vários animais. Utilizada em condicionadores de cabelo, xampus e soluções para permanente. Pode ser substituído por óleo de amêndoas, alecrim, urtiga, proteína de soja e óleo de amla (do fruto de uma árvore indiana).',
            };
        }
        var alert = this.alertCtrl.create({
            title: this.text.title,
            subTitle: this.text.subTitle,
            buttons: ['OK']
        });
        alert.present();
    };
    AboutPage.prototype.messagefav = function (it) {
        this.text = {
            title: it,
            subTitle: 'Este item foi favoritado'
        };
        var alert = this.alertCtrl.create({
            title: this.text.title,
            subTitle: this.text.subTitle,
            buttons: ['OK']
        });
        alert.present();
        var aux = JSON.stringify(this.favoritos);
        sessionStorage.setItem('AboutPage', aux);
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\Klaus\myApp\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <ion-searchbar (ionInput)="getItems($event)" clearInput></ion-searchbar>\n        <button *ngIf="this.tabinterno" class="aditivo-ativo" item-right clear (click)=\'tabinternotroca(tabinterno)\' ion-button default>\n        Aditivos\n        </button>\n        <button *ngIf="!this.tabinterno" class="aditivo-inativo" item-right clear (click)=\'tabinternotroca(tabinterno)\' ion-button default>\n        Aditivos\n        </button>\n        <button *ngIf="!this.tabinterno" class="outros-ativo" item-right clear (click)=\'tabinternotroca2(tabinterno)\' ion-button default>\n        Outros\n        </button>\n        <button *ngIf="this.tabinterno" class="outros-inativo" item-right clear (click)=\'tabinternotroca2(tabinterno)\' ion-button default>\n        Outros\n        </button>          \n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-list>\n      <ion-item tappable *ngFor="let item of fav">\n\n      <button class="botaoAnimal" item-left clear ion-button default *ngIf="item.animal">\n        <ion-icon name="play"></ion-icon>\n      </button>\n\n      <button class="botaoVegetal" item-left clear ion-button default *ngIf="item.vegetal">\n        <ion-icon name="star"></ion-icon>\n      </button>\n\n      <button class="botaoTalvez" item-left clear ion-button default *ngIf="item.talvez">\n        <ion-icon name="flask"></ion-icon>\n      </button>\n\n      {{ item.title }}\n\n      <button class="botao-fav" item-right clear (click)=\'addfavoritos(item)\' ion-button default>\n        <ion-icon class="favorito-inativo" *ngIf="!item.fav" name="star"></ion-icon>\n        <ion-icon class="favorito-ativo" *ngIf="item.fav" name="flask"></ion-icon>\n      </button>\n      <button item-right clear ion-button default>\n        <ion-icon name="play" (click)="message(item)"></ion-icon>\n      </button> \n      </ion-item>\n    </ion-list>\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Klaus\myApp\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_general_general__["a" /* GeneralProvider */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_general_general__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, navParams, alertCtrl, popoverCtrl, generalProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.popoverCtrl = popoverCtrl;
        this.generalProvider = generalProvider;
        this.lista = false;
        this.lista2 = false;
        this.lista3 = false;
        this.lista4 = false;
        this.lista5 = false;
        this.nomeHolder = "";
        this.nomedaslistas = {
            nomelista: 'Lista 1',
            nomelista2: 'Lista 2',
            nomelista3: 'Lista 3',
            nomelista4: 'Lista 4',
            nomelista5: 'Lista 5'
        };
        this.nomelistaAtual = '';
        this.menulistas = true;
        this.NomeListas = false;
        this.showAddProduto = false;
        this.pagcategorias = false;
        this.pagcarrinho = false;
        this.verdurasTrue = true;
        this.frutasTrue = true;
        this.bebidasTrue = true;
        this.higieneTrue = true;
        this.ApgLista = false;
        this.ApgLista2 = false;
        this.ApgLista3 = false;
        this.ApgLista4 = false;
        this.ApgLista5 = false;
        this.produto = {
            nome: '',
            preco: 0.00,
            unidades: 0.00,
            categoria: '',
            observacao: '',
            tanocarrinho: false
        };
        this.infoprodutos = [];
        this.produtosVerdurasReal = [];
        this.produtosFrutasReal = [];
        this.produtosBebidasReal = [];
        this.produtosHigieneReal = [];
        this.produtosVerduras = [];
        this.produtosFrutas = [];
        this.produtosBebidas = [];
        this.produtosHigiene = [];
        this.produtosVerduras2 = [];
        this.produtosFrutas2 = [];
        this.produtosBebidas2 = [];
        this.produtosHigiene2 = [];
        this.produtosVerduras3 = [];
        this.produtosFrutas3 = [];
        this.produtosBebidas3 = [];
        this.produtosHigiene3 = [];
        this.produtosVerduras4 = [];
        this.produtosFrutas4 = [];
        this.produtosBebidas4 = [];
        this.produtosHigiene4 = [];
        this.produtosVerduras5 = [];
        this.produtosFrutas5 = [];
        this.produtosBebidas5 = [];
        this.produtosHigiene5 = [];
        this.carrinhoReal = [];
        this.carrinho = [];
        this.carrinho2 = [];
        this.carrinho3 = [];
        this.carrinho4 = [];
        this.carrinho5 = [];
        this.precoTotal = 0.00;
        this.precoTotal2 = 0.00;
        this.precoTotal3 = 0.00;
        this.precoTotal4 = 0.00;
        this.precoTotal5 = 0.00;
        this.vazio = [];
        this.blocklista = false;
    }
    ContactPage.prototype.message = function () {
        this.infoprodutos.push(this.produto);
        if (this.lista == true) {
            if (this.produto.categoria == "Verduras") {
                this.produtosVerduras.push(this.produto);
            }
            if (this.produto.categoria == "Frutas") {
                this.produtosFrutas.push(this.produto);
            }
            if (this.produto.categoria == "Bebidas") {
                this.produtosBebidas.push(this.produto);
            }
            if (this.produto.categoria == "Higiene") {
                this.produtosHigiene.push(this.produto);
            }
        }
        if (this.lista2 == true) {
            if (this.produto.categoria == "Verduras") {
                this.produtosVerduras2.push(this.produto);
            }
            if (this.produto.categoria == "Frutas") {
                this.produtosFrutas2.push(this.produto);
            }
            if (this.produto.categoria == "Bebidas") {
                this.produtosBebidas2.push(this.produto);
            }
            if (this.produto.categoria == "Higiene") {
                this.produtosHigiene2.push(this.produto);
            }
        }
        if (this.lista3 == true) {
            if (this.produto.categoria == "Verduras") {
                this.produtosVerduras3.push(this.produto);
            }
            if (this.produto.categoria == "Frutas") {
                this.produtosFrutas3.push(this.produto);
            }
            if (this.produto.categoria == "Bebidas") {
                this.produtosBebidas3.push(this.produto);
            }
            if (this.produto.categoria == "Higiene") {
                this.produtosHigiene3.push(this.produto);
            }
        }
        if (this.lista4 == true) {
            if (this.produto.categoria == "Verduras") {
                this.produtosVerduras4.push(this.produto);
            }
            if (this.produto.categoria == "Frutas") {
                this.produtosFrutas4.push(this.produto);
            }
            if (this.produto.categoria == "Bebidas") {
                this.produtosBebidas4.push(this.produto);
            }
            if (this.produto.categoria == "Higiene") {
                this.produtosHigiene4.push(this.produto);
            }
        }
        if (this.lista5 == true) {
            if (this.produto.categoria == "Verduras") {
                this.produtosVerduras5.push(this.produto);
            }
            if (this.produto.categoria == "Frutas") {
                this.produtosFrutas5.push(this.produto);
            }
            if (this.produto.categoria == "Bebidas") {
                this.produtosBebidas5.push(this.produto);
            }
            if (this.produto.categoria == "Higiene") {
                this.produtosHigiene5.push(this.produto);
            }
        }
        var alert = this.alertCtrl.create({
            title: this.produto.nome,
            subTitle: 'produto registrado',
            buttons: ['ok']
        });
        this.produto = {
            nome: '',
            preco: 0,
            unidades: 0,
            categoria: '',
            observacao: '',
            tanocarrinho: false
        };
        if (this.lista == true) {
            this.produtosVerdurasReal = this.produtosVerduras;
            this.produtosFrutasReal = this.produtosFrutas;
            this.produtosBebidasReal = this.produtosBebidas;
            this.produtosHigieneReal = this.produtosHigiene;
            console.log("deu");
        }
        else if (this.lista2 == true) {
            this.produtosVerdurasReal = this.produtosVerduras2;
            this.produtosFrutasReal = this.produtosFrutas2;
            this.produtosBebidasReal = this.produtosBebidas2;
            this.produtosHigieneReal = this.produtosHigiene2;
        }
        else if (this.lista3 == true) {
            this.produtosVerdurasReal = this.produtosVerduras3;
            this.produtosFrutasReal = this.produtosFrutas3;
            this.produtosBebidasReal = this.produtosBebidas3;
            this.produtosHigieneReal = this.produtosHigiene3;
        }
        else if (this.lista4 == true) {
            this.produtosVerdurasReal = this.produtosVerduras4;
            this.produtosFrutasReal = this.produtosFrutas4;
            this.produtosBebidasReal = this.produtosBebidas4;
            this.produtosHigieneReal = this.produtosHigiene4;
        }
        else if (this.lista5 == true) {
            this.produtosVerdurasReal = this.produtosVerduras5;
            this.produtosFrutasReal = this.produtosFrutas5;
            this.produtosBebidasReal = this.produtosBebidas5;
            this.produtosHigieneReal = this.produtosHigiene5;
        }
        alert.present();
        this.menulistas = false;
        this.showAddProduto = false;
        this.pagcarrinho = false;
        this.pagcategorias = true;
        console.log(this.produtosVerduras2);
    };
    ContactPage.prototype.VoltarMenu = function () {
        if (this.menulistas == false && this.NomeListas == false && this.showAddProduto == false && this.pagcategorias == true && this.pagcarrinho == false) {
            this.lista = false;
            this.lista2 = false;
            this.lista3 = false;
            this.lista4 = false;
            this.lista5 = false;
            this.menulistas = true;
            this.pagcategorias = false;
            console.log("if " + this.lista, this.lista2, this.lista3, this.lista4, this.lista5, this.showAddProduto, this.menulistas, this.pagcategorias);
        }
        else if (this.menulistas == false && this.NomeListas == false && this.showAddProduto == true && this.pagcategorias == false && this.pagcarrinho == false) {
            this.showAddProduto = false;
            this.pagcategorias = true;
            this.menulistas = false;
            this.pagcarrinho = false;
        }
        else if (this.menulistas == false && this.NomeListas == false && this.showAddProduto == false && this.pagcategorias == false && this.pagcarrinho == true) {
            this.showAddProduto = false;
            this.pagcategorias = true;
            this.menulistas = false;
            this.pagcarrinho = false;
        }
        else if (this.menulistas == false && this.NomeListas == true && this.showAddProduto == false && this.pagcategorias == false && this.pagcarrinho == false) {
            this.NomeListas = false;
            this.showAddProduto = false;
            this.pagcategorias = false;
            this.menulistas = true;
            this.pagcarrinho = false;
            console.log(this.nomedaslistas.nomelista);
        }
        console.log("else if " + this.lista, this.lista2, this.lista3, this.lista4, this.lista5, this.showAddProduto, this.menulistas, this.pagcategorias);
    };
    ContactPage.prototype.AddItem = function () {
        this.pagcategorias = false;
        this.showAddProduto = true;
    };
    ContactPage.prototype.AddCarrinho = function (str) {
        console.log('deee ' + str.nome);
        if (this.lista == true) {
            for (var i = 0; i < this.produtosVerdurasReal.length; i++) {
                if (str === this.produtosVerdurasReal[i] && str !== this.carrinho[i] && str.tanocarrinho == false) {
                    this.carrinho.push(this.produtosVerdurasReal[i]);
                    this.precoTotal += +this.produtosVerdurasReal[i].preco * +this.produtosVerdurasReal[i].unidades;
                    this.precoTotalReal = this.precoTotal;
                    this.produtosVerdurasReal[i].tanocarrinho = true;
                }
            }
            for (var i = 0; i < this.produtosFrutasReal.length; i++) {
                if (str === this.produtosFrutasReal[i] && str !== this.carrinho[i] && str.tanocarrinho == false) {
                    this.carrinho.push(this.produtosFrutasReal[i]);
                    this.precoTotal += +this.produtosFrutasReal[i].preco * +this.produtosFrutasReal[i].unidades;
                    this.precoTotalReal = this.precoTotal;
                    this.produtosFrutasReal[i].tanocarrinho = true;
                }
            }
            for (var i = 0; i < this.produtosBebidasReal.length; i++) {
                if (str === this.produtosBebidasReal[i] && str !== this.carrinho[i] && str.tanocarrinho == false) {
                    this.carrinho.push(this.produtosBebidasReal[i]);
                    this.precoTotal += +this.produtosBebidasReal[i].preco * +this.produtosBebidasReal[i].unidades;
                    this.precoTotalReal = this.precoTotal;
                    this.produtosBebidasReal[i].tanocarrinho = true;
                }
            }
            for (var i = 0; i < this.produtosHigieneReal.length; i++) {
                if (str === this.produtosHigieneReal[i] && str !== this.carrinho[i] && str.tanocarrinho == false) {
                    this.carrinho.push(this.produtosHigieneReal[i]);
                    this.precoTotal += +this.produtosHigieneReal[i].preco * +this.produtosHigieneReal[i].unidades;
                    this.precoTotalReal = this.precoTotal;
                    this.produtosHigieneReal[i].tanocarrinho = true;
                }
            }
        }
        else if (this.lista2 == true) {
            for (var i = 0; i < this.produtosVerdurasReal.length; i++) {
                if (str === this.produtosVerdurasReal[i] && str !== this.carrinho2[i] && str.tanocarrinho == false) {
                    this.carrinho2.push(this.produtosVerdurasReal[i]);
                    this.precoTotal2 += +this.produtosVerdurasReal[i].preco * +this.produtosVerdurasReal[i].unidades;
                    this.precoTotalReal = this.precoTotal2;
                    this.produtosVerdurasReal[i].tanocarrinho = true;
                }
            }
            for (var i = 0; i < this.produtosFrutasReal.length; i++) {
                if (str === this.produtosFrutasReal[i] && str !== this.carrinho2[i] && str.tanocarrinho == false) {
                    this.carrinho2.push(this.produtosFrutasReal[i]);
                    this.precoTotal2 += +this.produtosFrutasReal[i].preco * +this.produtosFrutasReal[i].unidades;
                    this.precoTotalReal = this.precoTotal2;
                    this.produtosFrutasReal[i].tanocarrinho = true;
                }
            }
            for (var i = 0; i < this.produtosBebidasReal.length; i++) {
                if (str === this.produtosBebidasReal[i] && str !== this.carrinho2[i] && str.tanocarrinho == false) {
                    this.carrinho2.push(this.produtosBebidasReal[i]);
                    this.precoTotal2 += +this.produtosBebidasReal[i].preco * +this.produtosBebidasReal[i].unidades;
                    this.precoTotalReal = this.precoTotal2;
                    this.produtosBebidasReal[i].tanocarrinho = true;
                }
            }
            for (var i = 0; i < this.produtosHigieneReal.length; i++) {
                if (str === this.produtosHigieneReal[i] && str !== this.carrinho2[i] && str.tanocarrinho == false) {
                    this.carrinho2.push(this.produtosHigieneReal[i]);
                    this.precoTotal2 += +this.produtosHigieneReal[i].preco * +this.produtosHigieneReal[i].unidades;
                    this.precoTotalReal = this.precoTotal2;
                    this.produtosHigieneReal[i].tanocarrinho = true;
                }
            }
        }
        else if (this.lista3 == true) {
            for (var i = 0; i < this.produtosVerdurasReal.length; i++) {
                if (str === this.produtosVerdurasReal[i] && str !== this.carrinho3[i] && str.tanocarrinho == false) {
                    this.carrinho3.push(this.produtosVerdurasReal[i]);
                    this.precoTotal3 += +this.produtosVerdurasReal[i].preco * +this.produtosVerdurasReal[i].unidades;
                    this.precoTotalReal = this.precoTotal3;
                    this.produtosVerdurasReal[i].tanocarrinho = true;
                }
            }
            for (var i = 0; i < this.produtosFrutasReal.length; i++) {
                if (str === this.produtosFrutasReal[i] && str !== this.carrinho3[i] && str.tanocarrinho == false) {
                    this.carrinho3.push(this.produtosFrutasReal[i]);
                    this.precoTotal3 += +this.produtosFrutasReal[i].preco * +this.produtosFrutasReal[i].unidades;
                    this.precoTotalReal = this.precoTotal3;
                    this.produtosFrutasReal[i].tanocarrinho = true;
                }
            }
            for (var i = 0; i < this.produtosBebidasReal.length; i++) {
                if (str === this.produtosBebidasReal[i] && str !== this.carrinho3[i] && str.tanocarrinho == false) {
                    this.carrinho3.push(this.produtosBebidasReal[i]);
                    this.precoTotal3 += +this.produtosBebidasReal[i].preco * +this.produtosBebidasReal[i].unidades;
                    this.precoTotalReal = this.precoTotal3;
                    this.produtosBebidasReal[i].tanocarrinho = true;
                }
            }
            for (var i = 0; i < this.produtosHigieneReal.length; i++) {
                if (str === this.produtosHigieneReal[i] && str !== this.carrinho3[i] && str.tanocarrinho == false) {
                    this.carrinho3.push(this.produtosHigieneReal[i]);
                    this.precoTotal3 += +this.produtosHigieneReal[i].preco * +this.produtosHigieneReal[i].unidades;
                    this.precoTotalReal = this.precoTotal3;
                    this.produtosHigieneReal[i].tanocarrinho = true;
                }
            }
        }
        else if (this.lista4 == true) {
            for (var i = 0; i < this.produtosVerdurasReal.length; i++) {
                if (str === this.produtosVerdurasReal[i] && str !== this.carrinho4[i] && str.tanocarrinho == false) {
                    this.carrinho4.push(this.produtosVerdurasReal[i]);
                    this.precoTotal4 += +this.produtosVerdurasReal[i].preco * +this.produtosVerdurasReal[i].unidades;
                    this.precoTotalReal = this.precoTotal4;
                    this.produtosVerdurasReal[i].tanocarrinho = true;
                }
            }
            for (var i = 0; i < this.produtosFrutasReal.length; i++) {
                if (str === this.produtosFrutasReal[i] && str !== this.carrinho4[i] && str.tanocarrinho == false) {
                    this.carrinho4.push(this.produtosFrutasReal[i]);
                    this.precoTotal4 += +this.produtosFrutasReal[i].preco * +this.produtosFrutasReal[i].unidades;
                    this.precoTotalReal = this.precoTotal4;
                    this.produtosFrutasReal[i].tanocarrinho = true;
                }
            }
            for (var i = 0; i < this.produtosBebidasReal.length; i++) {
                if (str === this.produtosBebidasReal[i] && str !== this.carrinho4[i] && str.tanocarrinho == false) {
                    this.carrinho4.push(this.produtosBebidasReal[i]);
                    this.precoTotal4 += +this.produtosBebidasReal[i].preco * +this.produtosBebidasReal[i].unidades;
                    this.precoTotalReal = this.precoTotal4;
                    this.produtosBebidasReal[i].tanocarrinho = true;
                }
            }
            for (var i = 0; i < this.produtosHigieneReal.length; i++) {
                if (str === this.produtosHigieneReal[i] && str !== this.carrinho4[i] && str.tanocarrinho == false) {
                    this.carrinho4.push(this.produtosHigieneReal[i]);
                    this.precoTotal4 += +this.produtosHigieneReal[i].preco * +this.produtosHigieneReal[i].unidades;
                    this.precoTotalReal = this.precoTotal4;
                    this.produtosHigieneReal[i].tanocarrinho = true;
                }
            }
        }
        else if (this.lista5 == true) {
            for (var i = 0; i < this.produtosVerdurasReal.length; i++) {
                if (str === this.produtosVerdurasReal[i] && str !== this.carrinho5[i] && str.tanocarrinho == false) {
                    this.carrinho5.push(this.produtosVerdurasReal[i]);
                    this.precoTotal5 += +this.produtosVerdurasReal[i].preco * +this.produtosVerdurasReal[i].unidades;
                    this.precoTotalReal = this.precoTotal5;
                    this.produtosVerdurasReal[i].tanocarrinho = true;
                }
            }
            for (var i = 0; i < this.produtosFrutasReal.length; i++) {
                if (str === this.produtosFrutasReal[i] && str !== this.carrinho5[i] && str.tanocarrinho == false) {
                    this.carrinho5.push(this.produtosFrutasReal[i]);
                    this.precoTotal5 += +this.produtosFrutasReal[i].preco * +this.produtosFrutasReal[i].unidades;
                    this.precoTotalReal = this.precoTotal5;
                    this.produtosFrutasReal[i].tanocarrinho = true;
                }
            }
            for (var i = 0; i < this.produtosBebidasReal.length; i++) {
                if (str === this.produtosBebidasReal[i] && str !== this.carrinho5[i] && str.tanocarrinho == false) {
                    this.carrinho5.push(this.produtosBebidasReal[i]);
                    this.precoTotal5 += +this.produtosBebidasReal[i].preco * +this.produtosBebidasReal[i].unidades;
                    this.precoTotalReal = this.precoTotal5;
                    this.produtosBebidasReal[i].tanocarrinho = true;
                }
            }
            for (var i = 0; i < this.produtosHigieneReal.length; i++) {
                if (str === this.produtosHigieneReal[i] && str !== this.carrinho5[i] && str.tanocarrinho == false) {
                    this.carrinho5.push(this.produtosHigieneReal[i]);
                    this.precoTotal5 += +this.produtosHigieneReal[i].preco * +this.produtosHigieneReal[i].unidades;
                    this.precoTotalReal = this.precoTotal5;
                    this.produtosHigieneReal[i].tanocarrinho = true;
                }
            }
        }
        if (this.lista == true) {
            this.carrinhoReal = this.carrinho;
        }
        else if (this.lista2 == true) {
            this.carrinhoReal = this.carrinho2;
        }
        else if (this.lista3 == true) {
            this.carrinhoReal = this.carrinho3;
        }
        else if (this.lista4 == true) {
            this.carrinhoReal = this.carrinho4;
        }
        else if (this.lista5 == true) {
            this.carrinhoReal = this.carrinho5;
        }
        var alert = this.alertCtrl.create({
            title: 'deu',
            subTitle: 'produto registrado',
            buttons: ['ok']
        });
        alert.present();
    };
    ContactPage.prototype.IrCarrinho = function () {
        this.menulistas = false;
        this.showAddProduto = false;
        this.pagcategorias = false;
        this.pagcarrinho = true;
        if (this.lista == true) {
            this.carrinhoReal = this.carrinho;
        }
        else if (this.lista2 == true) {
            this.carrinhoReal = this.carrinho2;
        }
        else if (this.lista3 == true) {
            this.carrinhoReal = this.carrinho3;
        }
        else if (this.lista4 == true) {
            this.carrinhoReal = this.carrinho4;
        }
        else if (this.lista5 == true) {
            this.carrinhoReal = this.carrinho5;
        }
    };
    ContactPage.prototype.ListChange = function () {
        if (!this.blocklista) {
            this.lista = true;
            this.menulistas = false;
            this.pagcategorias = true;
            this.produtosVerdurasReal = this.produtosVerduras;
            this.produtosFrutasReal = this.produtosFrutas;
            this.produtosBebidasReal = this.produtosBebidas;
            this.produtosHigieneReal = this.produtosHigiene;
            this.precoTotalReal = this.precoTotal5;
            this.nomelistaAtual = this.nomedaslistas.nomelista;
            console.log(this.lista, this.lista2, this.lista3, this.lista4, this.lista5, this.showAddProduto, this.menulistas);
        }
    };
    ContactPage.prototype.ListChange2 = function () {
        if (!this.blocklista) {
            this.lista2 = true;
            this.menulistas = false;
            this.pagcategorias = true;
            this.produtosVerdurasReal = this.produtosVerduras2;
            this.produtosFrutasReal = this.produtosFrutas2;
            this.produtosBebidasReal = this.produtosBebidas2;
            this.produtosHigieneReal = this.produtosHigiene2;
            this.precoTotalReal = this.precoTotal2;
            this.nomelistaAtual = this.nomedaslistas.nomelista2;
            console.log(this.lista, this.lista2, this.lista3, this.lista4, this.lista5, this.showAddProduto, this.menulistas);
        }
    };
    ContactPage.prototype.ListChange3 = function () {
        if (!this.blocklista) {
            this.lista3 = true;
            this.menulistas = false;
            this.pagcategorias = true;
            this.produtosVerdurasReal = this.produtosVerduras3;
            this.produtosFrutasReal = this.produtosFrutas3;
            this.produtosBebidasReal = this.produtosBebidas3;
            this.produtosHigieneReal = this.produtosHigiene3;
            this.precoTotalReal = this.precoTotal3;
            this.nomelistaAtual = this.nomedaslistas.nomelista3;
            console.log(this.lista, this.lista2, this.lista3, this.lista4, this.lista5, this.showAddProduto, this.menulistas);
        }
    };
    ContactPage.prototype.ListChange4 = function () {
        if (!this.blocklista) {
            this.lista4 = true;
            this.menulistas = false;
            this.pagcategorias = true;
            console.log(this.lista4, this.menulistas, this.showAddProduto);
            this.produtosVerdurasReal = this.produtosVerduras4;
            this.produtosFrutasReal = this.produtosFrutas4;
            this.produtosBebidasReal = this.produtosBebidas4;
            this.produtosHigieneReal = this.produtosHigiene4;
            this.precoTotalReal = this.precoTotal4;
            this.nomelistaAtual = this.nomedaslistas.nomelista4;
            console.log(this.lista, this.lista2, this.lista3, this.lista4, this.lista5, this.showAddProduto, this.menulistas);
        }
    };
    ContactPage.prototype.ListChange5 = function (b) {
        if (!this.blocklista) {
            this.lista5 = true;
            this.menulistas = false;
            this.pagcategorias = true;
            console.log(this.lista5, this.menulistas, this.showAddProduto);
            this.produtosVerdurasReal = this.produtosVerduras5;
            this.produtosFrutasReal = this.produtosFrutas5;
            this.produtosBebidasReal = this.produtosBebidas5;
            this.produtosHigieneReal = this.produtosHigiene5;
            this.precoTotalReal = this.precoTotal5;
            this.nomelistaAtual = this.nomedaslistas.nomelista5;
            console.log(this.lista, this.lista2, this.lista3, this.lista4, this.lista5, this.showAddProduto, this.menulistas);
        }
    };
    ContactPage.prototype.showVerduras = function (b) {
        this.verdurasTrue = !b;
    };
    ContactPage.prototype.showFrutas = function (b) {
        this.frutasTrue = !b;
    };
    ContactPage.prototype.showBebidas = function (b) {
        this.bebidasTrue = !b;
    };
    ContactPage.prototype.showHigiene = function (b) {
        this.higieneTrue = !b;
        console.log(this.higieneTrue);
    };
    ContactPage.prototype.DeleteItemCarrinho2 = function (str) {
        if (this.lista == true) {
            for (var i = 0; i < this.carrinhoReal.length; i++) {
                if (str === this.carrinhoReal[i] && str.tanocarrinho == true) {
                    str.tanocarrinho = false;
                    this.precoTotal -= +this.carrinhoReal[i].preco * +this.carrinhoReal[i].unidades;
                    this.precoTotalReal = this.precoTotal;
                    this.carrinho.splice(i, 1);
                    this.carrinhoReal = this.carrinho;
                    console.log(str.tanocarrinho);
                }
            }
        }
        if (this.lista2 == true) {
            for (var i = 0; i < this.carrinho2.length; i++) {
                if (str === this.carrinhoReal[i] && str.tanocarrinho == true) {
                    str.tanocarrinho = false;
                    this.precoTotal2 -= +this.carrinhoReal[i].preco * +this.carrinhoReal[i].unidades;
                    this.precoTotalReal = this.precoTotal2;
                    this.carrinho2.splice(i, 1);
                    this.carrinhoReal = this.carrinho2;
                }
            }
        }
        if (this.lista3 == true) {
            for (var i = 0; i < this.carrinho3.length; i++) {
                if (str === this.carrinhoReal[i] && str.tanocarrinho == true) {
                    str.tanocarrinho = false;
                    this.precoTotal3 -= +this.carrinhoReal[i].preco * +this.carrinhoReal[i].unidades;
                    this.precoTotalReal = this.precoTotal3;
                    this.carrinho3.splice(i, 1);
                    this.carrinhoReal = this.carrinho3;
                }
            }
        }
        if (this.lista4 == true) {
            for (var i = 0; i < this.carrinho4.length; i++) {
                if (str === this.carrinhoReal[i] && str.tanocarrinho == true) {
                    str.tanocarrinho = false;
                    this.precoTotal4 -= +this.carrinhoReal[i].preco * +this.carrinhoReal[i].unidades;
                    this.precoTotalReal = this.precoTotal4;
                    this.carrinho4.splice(i, 1);
                    this.carrinhoReal = this.carrinho4;
                }
            }
        }
        if (this.lista5 == true) {
            for (var i = 0; i < this.carrinho5.length; i++) {
                if (str === this.carrinhoReal[i] && str.tanocarrinho == true) {
                    this.precoTotal5 -= +this.carrinhoReal[i].preco * +this.carrinhoReal[i].unidades;
                    this.precoTotalReal = this.precoTotal5;
                    this.carrinho5.splice(i, 1);
                    this.carrinhoReal = this.carrinho5;
                }
            }
        }
    };
    ContactPage.prototype.DeleteItemCarrinho = function (str) {
        console.log("foi", this.lista, this.carrinhoReal, this.carrinho);
        for (var i = 0; i < this.produtosVerdurasReal.length; i++) {
            if (str === this.produtosVerdurasReal[i]) {
                this.produtosVerdurasReal[i].tanocarrinho = false;
            }
        }
        for (var i = 0; i < this.produtosFrutasReal.length; i++) {
            if (str === this.produtosFrutasReal[i]) {
                this.produtosFrutasReal[i].tanocarrinho = false;
            }
        }
        for (var i = 0; i < this.produtosBebidasReal.length; i++) {
            if (str === this.produtosBebidasReal[i]) {
                this.produtosBebidasReal[i].tanocarrinho = false;
            }
        }
        for (var i = 0; i < this.produtosHigieneReal.length; i++) {
            if (str === this.produtosHigieneReal[i]) {
                this.produtosHigieneReal[i].tanocarrinho = false;
            }
        }
        if (this.lista == true) {
            for (var i = 0; i < this.carrinhoReal.length; i++) {
                if (str === this.carrinhoReal[i]) {
                    this.precoTotal -= +this.carrinhoReal[i].preco * +this.carrinhoReal[i].unidades;
                    this.precoTotalReal = this.precoTotal;
                    this.carrinho.splice(i, 1);
                    this.carrinhoReal = this.carrinho;
                    console.log("foi, caralho");
                }
            }
        }
        if (this.lista2 == true) {
            for (var i = 0; i < this.carrinho2.length; i++) {
                if (str === this.carrinhoReal[i]) {
                    this.precoTotal2 -= +this.carrinhoReal[i].preco * +this.carrinhoReal[i].unidades;
                    this.precoTotalReal = this.precoTotal2;
                    this.carrinho2.splice(i, 1);
                    this.carrinhoReal = this.carrinho2;
                }
            }
        }
        if (this.lista3 == true) {
            for (var i = 0; i < this.carrinho3.length; i++) {
                if (str === this.carrinhoReal[i]) {
                    this.precoTotal3 -= +this.carrinhoReal[i].preco * +this.carrinhoReal[i].unidades;
                    this.precoTotalReal = this.precoTotal3;
                    this.carrinho3.splice(i, 1);
                    this.carrinhoReal = this.carrinho3;
                }
            }
        }
        if (this.lista4 == true) {
            for (var i = 0; i < this.carrinho4.length; i++) {
                if (str === this.carrinhoReal[i]) {
                    this.precoTotal4 -= +this.carrinhoReal[i].preco * +this.carrinhoReal[i].unidades;
                    this.precoTotalReal = this.precoTotal4;
                    this.carrinho4.splice(i, 1);
                    this.carrinhoReal = this.carrinho4;
                }
            }
        }
        if (this.lista5 == true) {
            for (var i = 0; i < this.carrinho5.length; i++) {
                if (str === this.carrinhoReal[i]) {
                    this.precoTotal5 -= +this.carrinhoReal[i].preco * +this.carrinhoReal[i].unidades;
                    this.precoTotalReal = this.precoTotal5;
                    this.carrinho5.splice(i, 1);
                    this.carrinhoReal = this.carrinho5;
                }
            }
        }
    };
    ContactPage.prototype.DeleteItem = function (str) {
        console.log("eh esse");
        if (this.lista == true) {
            for (var i = 0; i < this.infoprodutos.length; i++) {
                if (str === this.infoprodutos[i]) {
                    this.infoprodutos.splice(i, 1);
                    console.log("removeu");
                }
            }
            for (var i = 0; i < this.produtosVerduras.length; i++) {
                if (str === this.produtosVerdurasReal[i]) {
                    this.produtosVerduras.splice(i, 1);
                    this.produtosVerdurasReal = this.produtosVerduras;
                    console.log("removeu");
                }
            }
            for (var i = 0; i < this.produtosFrutas.length; i++) {
                if (str === this.produtosFrutasReal[i]) {
                    this.produtosFrutas.splice(i, 1);
                    this.produtosFrutasReal = this.produtosFrutas;
                    console.log("removeu");
                }
            }
            for (var i = 0; i < this.produtosBebidas.length; i++) {
                if (str === this.produtosBebidasReal[i]) {
                    this.produtosBebidas.splice(i, 1);
                    this.produtosBebidasReal = this.produtosBebidas;
                    console.log("removeu");
                }
            }
            for (var i = 0; i < this.produtosHigiene.length; i++) {
                if (str === this.produtosHigieneReal[i]) {
                    this.produtosHigiene.splice(i, 1);
                    this.produtosHigieneReal = this.produtosHigiene;
                    console.log("removeu");
                }
            }
        }
        if (this.lista2 == true) {
            for (var i = 0; i < this.infoprodutos.length; i++) {
                if (str === this.infoprodutos[i]) {
                    this.infoprodutos.splice(i, 1);
                    console.log("removeu");
                }
            }
            for (var i = 0; i < this.produtosVerduras2.length; i++) {
                if (str === this.produtosVerdurasReal[i]) {
                    this.produtosVerduras2.splice(i, 1);
                    this.produtosVerdurasReal = this.produtosVerduras2;
                    console.log("removeu");
                }
            }
            for (var i = 0; i < this.produtosFrutas2.length; i++) {
                if (str === this.produtosFrutasReal[i]) {
                    this.produtosFrutas2.splice(i, 1);
                    this.produtosFrutasReal = this.produtosFrutas2;
                    console.log("removeu");
                }
            }
            for (var i = 0; i < this.produtosBebidas2.length; i++) {
                if (str === this.produtosBebidasReal[i]) {
                    this.produtosBebidas2.splice(i, 1);
                    this.produtosBebidasReal = this.produtosBebidas2;
                    console.log("removeu");
                }
            }
            for (var i = 0; i < this.produtosHigiene2.length; i++) {
                if (str === this.produtosHigieneReal[i]) {
                    this.produtosHigiene2.splice(i, 1);
                    this.produtosHigieneReal = this.produtosHigiene2;
                    console.log("removeu");
                }
            }
        }
        if (this.lista3 == true) {
            for (var i = 0; i < this.infoprodutos.length; i++) {
                if (str === this.infoprodutos[i]) {
                    this.infoprodutos.splice(i, 1);
                    console.log("removeu");
                }
            }
            for (var i = 0; i < this.produtosVerduras3.length; i++) {
                if (str === this.produtosVerdurasReal[i]) {
                    this.produtosVerduras3.splice(i, 1);
                    this.produtosVerdurasReal = this.produtosVerduras3;
                    console.log("removeu");
                }
            }
            for (var i = 0; i < this.produtosFrutas3.length; i++) {
                if (str === this.produtosFrutasReal[i]) {
                    this.produtosFrutas3.splice(i, 1);
                    this.produtosFrutasReal = this.produtosFrutas3;
                    console.log("removeu");
                }
            }
            for (var i = 0; i < this.produtosBebidas3.length; i++) {
                if (str === this.produtosBebidasReal[i]) {
                    this.produtosBebidas3.splice(i, 1);
                    this.produtosBebidasReal = this.produtosBebidas3;
                    console.log("removeu");
                }
            }
            for (var i = 0; i < this.produtosHigiene3.length; i++) {
                if (str === this.produtosHigieneReal[i]) {
                    this.produtosHigiene3.splice(i, 1);
                    this.produtosHigieneReal = this.produtosHigiene3;
                    console.log("removeu");
                }
            }
        }
        if (this.lista4 == true) {
            for (var i = 0; i < this.infoprodutos.length; i++) {
                if (str === this.infoprodutos[i]) {
                    this.infoprodutos.splice(i, 1);
                    console.log("removeu");
                }
            }
            for (var i = 0; i < this.produtosVerduras4.length; i++) {
                if (str === this.produtosVerdurasReal[i]) {
                    this.produtosVerduras4.splice(i, 1);
                    this.produtosVerdurasReal = this.produtosVerduras4;
                    console.log("removeu");
                }
            }
            for (var i = 0; i < this.produtosFrutas4.length; i++) {
                if (str === this.produtosFrutasReal[i]) {
                    this.produtosFrutas4.splice(i, 1);
                    this.produtosFrutasReal = this.produtosFrutas4;
                    console.log("removeu");
                }
            }
            for (var i = 0; i < this.produtosBebidas4.length; i++) {
                if (str === this.produtosBebidasReal[i]) {
                    this.produtosBebidas4.splice(i, 1);
                    this.produtosBebidasReal = this.produtosBebidas4;
                    console.log("removeu");
                }
            }
            for (var i = 0; i < this.produtosHigiene4.length; i++) {
                if (str === this.produtosHigieneReal[i]) {
                    this.produtosHigiene4.splice(i, 1);
                    this.produtosHigieneReal = this.produtosHigiene4;
                    console.log("removeu");
                }
            }
        }
        if (this.lista5 == true) {
            for (var i = 0; i < this.infoprodutos.length; i++) {
                if (str === this.infoprodutos[i]) {
                    this.infoprodutos.splice(i, 1);
                    console.log("removeu");
                }
            }
            for (var i = 0; i < this.produtosVerduras5.length; i++) {
                if (str === this.produtosVerdurasReal[i]) {
                    this.produtosVerduras5.splice(i, 1);
                    this.produtosVerdurasReal = this.produtosVerduras5;
                    console.log("removeu");
                }
            }
            for (var i = 0; i < this.produtosFrutas5.length; i++) {
                if (str === this.produtosFrutasReal[i]) {
                    this.produtosFrutas5.splice(i, 1);
                    this.produtosFrutasReal = this.produtosFrutas5;
                    console.log("removeu");
                }
            }
            for (var i = 0; i < this.produtosBebidas5.length; i++) {
                if (str === this.produtosBebidasReal[i]) {
                    this.produtosBebidas5.splice(i, 1);
                    this.produtosBebidasReal = this.produtosBebidas5;
                    console.log("removeu");
                }
            }
            for (var i = 0; i < this.produtosHigiene5.length; i++) {
                if (str === this.produtosHigieneReal[i]) {
                    this.produtosHigiene5.splice(i, 1);
                    this.produtosHigieneReal = this.produtosHigiene5;
                    console.log("removeu");
                }
            }
        }
    };
    ContactPage.prototype.NomeLista = function () {
        this.NomeListas = true;
        this.menulistas = false;
        this.lista = true;
        console.log("deu", this.lista);
    };
    ContactPage.prototype.NomeLista2 = function () {
        this.NomeListas = true;
        this.menulistas = false;
        this.lista2 = true;
        console.log("deu");
    };
    ContactPage.prototype.NomeLista3 = function () {
        this.NomeListas = true;
        this.menulistas = false;
        this.lista3 = true;
        console.log("deu");
    };
    ContactPage.prototype.NomeLista4 = function () {
        this.NomeListas = true;
        this.menulistas = false;
        this.lista4 = true;
        console.log("deu");
    };
    ContactPage.prototype.NomeLista5 = function () {
        this.NomeListas = true;
        this.menulistas = false;
        this.lista5 = true;
        console.log("deu");
    };
    ContactPage.prototype.ConcluirNome = function () {
        if (this.lista == true) {
            this.nomedaslistas.nomelista = this.nomeHolder;
            console.log("asdsdadasdada");
        }
        else if (this.lista2 == true) {
            this.nomedaslistas.nomelista2 = this.nomeHolder;
        }
        else if (this.lista3 == true) {
            this.nomedaslistas.nomelista3 = this.nomeHolder;
        }
        else if (this.lista4 == true) {
            this.nomedaslistas.nomelista4 = this.nomeHolder;
        }
        else if (this.lista5 == true) {
            this.nomedaslistas.nomelista5 = this.nomeHolder;
        }
        console.log(this.nomedaslistas.nomelista);
        console.log(this.nomeHolder);
        this.NomeListas = false;
        this.menulistas = true;
        this.lista = false;
        this.lista2 = false;
        this.lista3 = false;
        this.lista4 = false;
        this.lista5 = false;
        this.nomeHolder = "";
    };
    ContactPage.prototype.ApagarLista = function () {
        var _this = this;
        this.blocklista = true;
        var alert = this.alertCtrl.create({
            title: this.nomedaslistas.nomelista,
            message: 'você deseja limpar o conteúdo da lista?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        _this.blocklista = false;
                    }
                },
                {
                    text: 'Confirmar',
                    handler: function () {
                        _this.blocklista = false;
                        for (var i = 0; i <= _this.produtosVerduras.length; i++) {
                            _this.produtosVerduras.splice(i);
                        }
                        for (var i = 0; i <= _this.produtosFrutas.length; i++) {
                            _this.produtosFrutas.splice(i);
                        }
                        for (var i = 0; i <= _this.produtosBebidas.length; i++) {
                            _this.produtosBebidas.splice(i);
                        }
                        for (var i = 0; i <= _this.produtosHigiene.length; i++) {
                            _this.produtosHigiene.splice(i);
                        }
                        _this.ApgLista = false;
                        _this.lista = false;
                        _this.menulistas = true;
                    }
                }
            ]
        });
        alert.present();
    };
    ContactPage.prototype.ApagarLista2 = function () {
        var _this = this;
        this.blocklista = true;
        var alert = this.alertCtrl.create({
            title: this.nomedaslistas.nomelista2,
            message: 'você deseja limpar o conteúdo da lista?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        _this.blocklista = false;
                    }
                },
                {
                    text: 'Confirmar',
                    handler: function () {
                        _this.blocklista = false;
                        for (var i = 0; i <= _this.produtosVerduras2.length; i++) {
                            _this.produtosVerduras2.splice(i);
                        }
                        for (var i = 0; i <= _this.produtosFrutas2.length; i++) {
                            _this.produtosFrutas2.splice(i);
                        }
                        for (var i = 0; i <= _this.produtosBebidas2.length; i++) {
                            _this.produtosBebidas2.splice(i);
                        }
                        for (var i = 0; i <= _this.produtosHigiene2.length; i++) {
                            _this.produtosHigiene2.splice(i);
                        }
                        _this.ApgLista2 = false;
                        _this.lista2 = false;
                        _this.menulistas = true;
                    }
                }
            ]
        });
        alert.present();
    };
    ContactPage.prototype.ApagarLista3 = function () {
        var _this = this;
        this.blocklista = true;
        var alert = this.alertCtrl.create({
            title: this.nomedaslistas.nomelista3,
            message: 'você deseja limpar o conteúdo da lista?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        _this.blocklista = false;
                    }
                },
                {
                    text: 'Confirmar',
                    handler: function () {
                        _this.blocklista = false;
                        for (var i = 0; i <= _this.produtosVerduras3.length; i++) {
                            _this.produtosVerduras3.splice(i);
                        }
                        for (var i = 0; i <= _this.produtosFrutas3.length; i++) {
                            _this.produtosFrutas3.splice(i);
                        }
                        for (var i = 0; i <= _this.produtosBebidas3.length; i++) {
                            _this.produtosBebidas3.splice(i);
                        }
                        for (var i = 0; i <= _this.produtosHigiene3.length; i++) {
                            _this.produtosHigiene3.splice(i);
                        }
                        _this.ApgLista3 = false;
                        _this.lista3 = false;
                        _this.menulistas = true;
                    }
                }
            ]
        });
        alert.present();
    };
    ContactPage.prototype.ApagarLista4 = function () {
        var _this = this;
        this.blocklista = true;
        var alert = this.alertCtrl.create({
            title: this.nomedaslistas.nomelista4,
            message: 'você deseja limpar o conteúdo da lista?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        _this.blocklista = false;
                    }
                },
                {
                    text: 'Confirmar',
                    handler: function () {
                        _this.blocklista = false;
                        for (var i = 0; i <= _this.produtosVerduras4.length; i++) {
                            _this.produtosVerduras4.splice(i);
                        }
                        for (var i = 0; i <= _this.produtosFrutas4.length; i++) {
                            _this.produtosFrutas4.splice(i);
                        }
                        for (var i = 0; i <= _this.produtosBebidas4.length; i++) {
                            _this.produtosBebidas4.splice(i);
                        }
                        for (var i = 0; i <= _this.produtosHigiene4.length; i++) {
                            _this.produtosHigiene4.splice(i);
                        }
                        _this.ApgLista4 = false;
                        _this.lista4 = false;
                        _this.menulistas = true;
                    }
                }
            ]
        });
        alert.present();
    };
    ContactPage.prototype.ApagarLista5 = function () {
        var _this = this;
        this.blocklista = true;
        var alert = this.alertCtrl.create({
            title: this.nomedaslistas.nomelista5,
            message: 'você deseja limpar o conteúdo da lista?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        _this.blocklista = false;
                    }
                },
                {
                    text: 'Confirmar',
                    handler: function () {
                        _this.blocklista = false;
                        for (var i = 0; i <= _this.produtosVerduras5.length; i++) {
                            _this.produtosVerduras5.splice(i);
                        }
                        for (var i = 0; i <= _this.produtosFrutas5.length; i++) {
                            _this.produtosFrutas5.splice(i);
                        }
                        for (var i = 0; i <= _this.produtosBebidas5.length; i++) {
                            _this.produtosBebidas5.splice(i);
                        }
                        for (var i = 0; i <= _this.produtosHigiene5.length; i++) {
                            _this.produtosHigiene5.splice(i);
                        }
                        _this.ApgLista5 = false;
                        _this.lista5 = false;
                        _this.menulistas = true;
                    }
                }
            ]
        });
        alert.present();
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\Klaus\myApp\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n\n    <ion-title *ngIf="menulistas">\n      <button class="botao-voltar" ion-button (click)="VoltarMenu()" *ngIf="!menulistas">\n        <ion-icon name="arrow-dropdown" item-end></ion-icon></button>\n      Gerenciar Listas\n    </ion-title>\n\n    <ion-title *ngIf="pagcategorias">\n      <button class="botao-voltar" ion-button (click)="VoltarMenu()" *ngIf="!menulistas">\n        <ion-icon name="arrow-dropdown" item-end></ion-icon></button>\n      {{ nomelistaAtual }}\n    </ion-title>\n\n    <ion-title *ngIf="showAddProduto">\n      <button class="botao-voltar" ion-button (click)="VoltarMenu()" *ngIf="!menulistas">\n        <ion-icon name="arrow-dropdown" item-end></ion-icon></button>\n      Novo Produto\n    </ion-title>\n\n    <ion-title *ngIf="pagcarrinho">\n      <button class="botao-voltar" ion-button (click)="VoltarMenu()" *ngIf="!menulistas">\n        <ion-icon name="arrow-dropdown" item-end></ion-icon></button>\n      Carrinho de Compras\n    </ion-title>\n\n    <ion-title *ngIf="NomeListas">\n      <button class="botao-voltar" ion-button (click)="VoltarMenu()" *ngIf="!menulistas">\n        <ion-icon name="arrow-dropdown" item-end></ion-icon></button>\n      Mudar Nome da Lista\n    </ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list *ngIf="menulistas">\n  <ion-list *ngIf="!NomeListas">\n  <ion-list *ngIf="!showAddProduto">\n  <ion-list *ngIf="!pagcategorias">\n  <ion-list *ngIf="!pagcarrinho">\n    <ion-item class="listasLista1" tappable style="text-align: center" (click)="ListChange()"> {{nomedaslistas.nomelista}}\n      <button class="botao1Lista1" item-right clear ion-button default>\n        <ion-icon name="star" (click)="NomeLista()"></ion-icon>\n      </button>\n      <button class="botao2Lista1" item-right clear ion-button default>\n        <ion-icon name="play" (click)="ApagarLista()"></ion-icon>\n      </button>\n    </ion-item>\n    <ion-item class="listasLista1" tappable style="text-align: center" (click)="ListChange2()"> {{nomedaslistas.nomelista2}} \n      <button class="botao1Lista1" item-right clear ion-button default (click)="NomeLista2()">\n        <ion-icon name="star"></ion-icon>\n      </button>\n      <button class="botao2Lista1" item-right clear ion-button default>\n        <ion-icon name="play" (click)="ApagarLista2()"></ion-icon>\n      </button>\n    </ion-item>\n    <ion-item class="listasLista1" tappable style="text-align: center" (click)="ListChange3()"> {{nomedaslistas.nomelista3}}\n      <button class="botao1Lista1" item-right clear ion-button default (click)="NomeLista3()">\n        <ion-icon name="star"></ion-icon>\n      </button> \n      <button class="botao2Lista1" item-right clear ion-button default>\n        <ion-icon name="play" (click)="ApagarLista3()"></ion-icon>\n      </button>\n    </ion-item>\n    <ion-item class="listasLista1" tappable style="text-align: center" (click)="ListChange4()"> {{nomedaslistas.nomelista4}}\n      <button class="botao1Lista1" item-right clear ion-button default (click)="NomeLista4()">\n        <ion-icon name="star"></ion-icon>\n      </button>\n      <button class="botao2Lista1" item-right clear ion-button default>\n        <ion-icon name="play" (click)="ApagarLista4()"></ion-icon>\n      </button>\n    </ion-item>\n    <ion-item class="listasLista1" tappable style="text-align: center" (click)="ListChange5()"> {{nomedaslistas.nomelista5}}\n      <button class="botao1Lista1" item-right clear ion-button default (click)="NomeLista5()">\n        <ion-icon name="star"></ion-icon>\n      </button>\n      <button class="botao2Lista1" item-right clear ion-button default>\n        <ion-icon name="play" (click)="ApagarLista5()"></ion-icon>\n      </button>\n    </ion-item>\n  </ion-list>\n  </ion-list>\n  </ion-list>\n  </ion-list>\n  </ion-list>\n\n  <ion-list *ngIf="!showAddProduto">\n  <ion-list *ngIf="!menulistas">\n  <ion-list *ngIf="!NomeListas">\n  <ion-list *ngIf="pagcategorias">\n  <ion-list *ngIf="!pagcarrinho">\n\n  <ion-list inset>\n    \n    <ion-item class="verduras" tappable style="text-align: center" (click)="showVerduras(verdurasTrue)">\n      Verdura: {{produtosVerdurasReal.length}}\n      <ion-icon name="arrow-dropdown" item-end></ion-icon>\n    </ion-item>\n\n    <ion-list class="lista-verduras" *ngIf="verdurasTrue">\n      <ion-item class="item-verduras" tappable *ngFor="let item of produtosVerdurasReal">\n       <b>Nome: </b> {{ item.nome }} <br/>\n       <b>Quantidade: </b> {{ item.unidades }}un <br/>         \n       <b>Preço Total: </b> {{ item.preco*item.unidades }}R$ <br/>\n\n       <button *ngIf="!item.tanocarrinho" class="add-verdura-carrinho" item-right clear ion-button default>\n        <ion-icon name="star" (click)="AddCarrinho(item)"></ion-icon>\n      </button>\n\n      <button *ngIf="item.tanocarrinho"  class="add-verdura-carrinho-ativo" item-right clear ion-button default>\n        <ion-icon name="flask" (click)="DeleteItemCarrinho2(item)"></ion-icon>\n      </button>\n\n      <button class="deletar-verdura" item-right clear ion-button default>\n        <ion-icon name="play" (click)="DeleteItem(item)"></ion-icon>\n      </button>\n\n    </ion-item>\n  </ion-list>\n</ion-list>\n\n<ion-list inset>\n  <ion-item class="frutas" tappable style="text-align: center" (click)="showFrutas(frutasTrue)">\n    Fruta: {{produtosFrutasReal.length}}\n    <ion-icon name="arrow-dropdown" item-end></ion-icon>\n  </ion-item>\n\n  <ion-list class="lista-frutas" *ngIf="frutasTrue">\n    <ion-item class="item-frutas" tappable *ngFor="let item of produtosFrutasReal">\n     <b>Nome: </b> {{ item.nome }} <br/>\n     <b>Quantidade: </b> {{ item.unidades }}un <br/>         \n     <b>Preço Total: </b> {{ item.preco*item.unidades }}R$ <br/>\n\n     <button *ngIf="!item.tanocarrinho" class="add-fruta-carrinho" item-right clear ion-button default>\n      <ion-icon name="star" (click)="AddCarrinho(item)"></ion-icon>\n    </button>\n    <button *ngIf="item.tanocarrinho" class="add-fruta-carrinho-ativo" item-right clear ion-button default>\n      <ion-icon name="flask" (click)="DeleteItemCarrinho2(item)"></ion-icon>\n    </button>\n\n    <button class="deletar-fruta" item-right clear ion-button default>\n      <ion-icon name="play" (click)="DeleteItem(item)"></ion-icon>\n    </button>\n  </ion-item>\n</ion-list>\n</ion-list>\n\n<ion-list inset>\n  <ion-item class="bebidas" tappable style="text-align: center" (click)="showBebidas(bebidasTrue)">\n    Bebidas: {{produtosBebidasReal.length}}\n    <ion-icon name="arrow-dropdown" item-end></ion-icon>\n  </ion-item>\n\n  <ion-list class="lista-bebidas" *ngIf="bebidasTrue">\n    <ion-item class="item-bebidas" tappable *ngFor="let item of produtosBebidasReal">\n     <b>Nome: </b> {{ item.nome }} <br/>\n     <b>Quantidade: </b> {{ item.unidades }}un <br/>         \n     <b>Preço Total: </b> {{ item.preco*item.unidades }}R$ <br/>\n\n     <button *ngIf="!item.tanocarrinho" class="add-bebida-carrinho" item-right clear ion-button default>\n      <ion-icon name="star" (click)="AddCarrinho(item)"></ion-icon>\n    </button>\n\n    <button *ngIf="item.tanocarrinho" class="add-bebida-carrinho-ativo" item-right clear ion-button default>\n      <ion-icon name="flask" (click)="DeleteItemCarrinho2(item)"></ion-icon>\n    </button>\n\n    <button class="deletar-bebida" item-right clear ion-button default>\n      <ion-icon name="play" (click)="DeleteItem(item)"></ion-icon>\n    </button>\n  </ion-item>\n</ion-list>\n</ion-list>\n\n<ion-list inset>\n  <ion-item class="hegiene" tappable style="text-align: center" (click)="showHigiene(higieneTrue)" >\n    Higiene: {{produtosHigieneReal.length}}\n    <ion-icon name="arrow-dropdown" item-end></ion-icon>\n  </ion-item>\n\n  <ion-list class="lista-higiene" *ngIf="higieneTrue">\n    <ion-item class="item-higiene" tappable *ngFor="let item of produtosHigieneReal">\n     <b>Nome: </b> {{ item.nome }} <br/>\n     <b>Quantidade: </b> {{ item.unidades }}un <br/>         \n     <b>Preço Total: </b> {{ item.preco*item.unidades }}R$ <br/>\n\n     <button *ngIf="!item.tanocarrinho" class="add-higiene-carrinho" item-right clear ion-button default>\n      <ion-icon name="star" (click)="AddCarrinho(item)"></ion-icon>\n    </button>\n\n    <button *ngIf="item.tanocarrinho" class="add-higiene-carrinho-ativo" item-right clear ion-button default>\n      <ion-icon name="flask" (click)="DeleteItemCarrinho2(item)"></ion-icon>\n    </button>\n\n    <button class="deletar-higiene" item-right clear ion-button default>\n      <ion-icon name="play" (click)="DeleteItem(item)"></ion-icon>\n    </button>\n\n  </ion-item>\n</ion-list>\n</ion-list>\n\n    <ion-item class="ir-carrinho">\n      <button ion-button full (click)="IrCarrinho()">Carrinho</button>  \n      </ion-item>\n      <ion-item class="adicionar-produto">\n      <button ion-button full (click)="AddItem()">Adicionar Produto</button>  \n    </ion-item>\n\n</ion-list>\n</ion-list>\n</ion-list>\n</ion-list>\n</ion-list>\n\n  <ion-list *ngIf="!menulistas">\n  <ion-list *ngIf="!NomeListas">\n  <ion-list *ngIf="!pagcategorias"> \n  <ion-list *ngIf="!pagcarrinho">\n  <ion-list inset *ngIf="showAddProduto">\n    <ion-item>\n      <ion-label>Categoria</ion-label>\n      <ion-select [(ngModel)]="produto.categoria">\n        <ion-option value="Verduras">Verduras</ion-option>\n        <ion-option value="Frutas">Frutas</ion-option>\n        <ion-option value="Bebidas">Bebidas</ion-option>\n        <ion-option value="Higiene">Higiene</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item class="input-item-nome">\n      <ion-label floating>Produto</ion-label>\n      <ion-input class="input-nome" type="text" [(ngModel)]="produto.nome"></ion-input>\n    </ion-item>\n    \n    <ion-item class="input-item-preco">\n      <ion-label floating>Preço</ion-label>\n      <ion-input class="input-preco" type="text" [(ngModel)]="produto.preco"></ion-input>\n    </ion-item>\n\n    <ion-item class="input-item-unidades">\n      <ion-label floating>Unidades</ion-label>\n      <ion-input class="input-unidades" type="text" [(ngModel)]="produto.unidades"></ion-input>\n    </ion-item>\n\n    <ion-item class="input-item-observacao">\n      <ion-label floating>Observação</ion-label>\n      <ion-input class="input-observacao" type="text" [(ngModel)]="produto.observacao"></ion-input>\n    </ion-item>\n\n    <ion-item class="concluir-add">\n      <button class="bota-concluir-add" ion-button full (click)="message()"> Concluir</button>  \n    </ion-item>\n\n  </ion-list>\n  </ion-list>\n  </ion-list>\n  </ion-list>\n  </ion-list>\n\n  <ion-list *ngIf="!menulistas">\n  <ion-list *ngIf="!NomeListas">\n  <ion-list *ngIf="!pagcategorias"> \n  <ion-list *ngIf="pagcarrinho">\n  <ion-list *ngIf="!showAddProduto">\n\n  <ion-list>\n    <ion-list>\n      <ion-item class="calculadora" tappable style="text-align: center">\n        <ion-icon name="star"></ion-icon>\n      Preço Total: {{ precoTotalReal }}\n      </ion-item>\n    </ion-list>\n    <ion-item class="item-carrinho" style="text-align: center" tappable *ngFor="let item of carrinhoReal">\n      {{item.nome}}\n    <button class="botao-confirmado-carrinho" item-right clear ion-button default>\n      <ion-icon name="star"></ion-icon>\n    </button>\n    <button class="botao-remover-carrinho" item-right clear ion-button default>\n      <ion-icon name="play" (click)="DeleteItemCarrinho(item)"></ion-icon>\n    </button>\n    </ion-item>\n  </ion-list>\n\n  </ion-list>\n  </ion-list>\n  </ion-list>\n  </ion-list>\n  </ion-list>\n\n  <ion-list *ngIf="!menulistas">\n  <ion-list *ngIf="NomeListas">\n  <ion-list *ngIf="!pagcategorias"> \n  <ion-list *ngIf="!pagcarrinho">\n  <ion-list *ngIf="!showAddProduto">\n\n    <ion-list>\n      <ion-item>\n      <ion-label floating>Nome da Lista</ion-label>\n      <ion-input class="input-nome-da-lista" type="text" [(ngModel)]="nomeHolder"></ion-input>\n    </ion-item>\n    <button class="botao-concluir-nome" ion-button full (click)="ConcluirNome()">\n      Concluir\n    </button>\n    </ion-list>\n\n  </ion-list>\n  </ion-list>\n  </ion-list>\n  </ion-list>\n  </ion-list>\n</ion-content>\n\n//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n\n\n'/*ion-inline-end:"C:\Users\Klaus\myApp\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_general_general__["a" /* GeneralProvider */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_general_general__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { AboutPage } from '../about/about';
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, alertCtrl, toastCtrl, generalProvider) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.generalProvider = generalProvider;
        this.searchQuery = '';
        this.favoritos = [];
        // if(this.about.favoritos.length > 0)
        // for (var i = 0; i < this.about.favoritos.length; ++i) {
        //   this.about.favoritos[i];
        // }
    }
    HomePage.prototype.ionViewDidEnter = function () {
        var aux = JSON.parse(sessionStorage.getItem('AboutPage'));
        this.favoritos = this.generalProvider.favGeral;
        console.log(this.favoritos[0]);
        //    this.favoritos = this.generalProvider.favGeral
    };
    //generalProvider é um serviço e pega os elementos do rolê para passar para outras páginas
    HomePage.prototype.ionViewWillEnter = function () {
        //this.generalPrivider.teste
    };
    HomePage.prototype.initializeItems = function () {
        var aux = JSON.parse(sessionStorage.getItem('AboutPage'));
        console.log(this.generalProvider.teste);
        this.favoritos = this.generalProvider.favGeral;
    };
    HomePage.prototype.message = function (it) {
        if (it.title == 'Acido Carminico INS 120') {
            this.text = {
                title: 'Ácido Carmínico, INS 120',
                subTitle: 'Pigmento vermelho obtido através da compressão da fêmea do inseto cochonilha. Os insetos precisam ser mortos para produzir o corante de cor vermelha. Usado em cosméticos, pós, ruges e xampus. Pode ser substituído por suco de beterraba (não possui qualquer toxidade).',
            };
        }
        else if (it.title == 'Acido Sorbico INS 200') {
            this.text = {
                title: 'Ácido Sórbico, INS 200',
                subTitle: 'Presente em vinhos, frutas desidratadas, vegetais em conservas, azeitonas, queijos, produtos de pastelaria e panificação, molhos prontos, carnes prontas para consumo, produtos lácteos aromatizados e produtos de confeitaria.',
            };
        }
        else if (it.title == 'Sorbato de Potassio INS 202') {
            this.text = {
                title: 'Sorbato de Potássio, INS 202',
                subTitle: 'Presente em vinhos, frutas desidratadas, vegetais em conservas, azeitonas, queijos, produtos de pastelaria e panificação, molhos prontos, carnes prontas para consumo, produtos lácteos aromatizados e produtos de confeitaria.',
            };
        }
        else if (it.title == 'Sorbato de Cálcio INS 203') {
            this.text = {
                title: 'Sorbato de Cálcio, INS 203',
                subTitle: 'Presente em vinhos, frutas desidratadas, vegetais em conservas, azeitonas, queijos, produtos de pastelaria e panificação, molhos prontos, carnes prontas para consumo, produtos lácteos aromatizados e produtos de confeitaria.',
            };
        }
        else if (it.title == 'Acido Benzoico INS 210') {
            this.text = {
                title: 'Acido Benzoico, INS 210',
                subTitle: 'Presente em refrigerantes, cervejas, refrescos, doces e geléias, produtos de frutas, queijo, molhos, margarina, creme vegetal e produtos de confeitaria.',
            };
        }
        else if (it.title == 'Dioxido de Enxofre INS 220') {
            this.text = {
                title: 'Dióxido de Enxofre, INS 220',
                subTitle: 'Presente em açúcar refinado, batatas congeladas, bebidas alcoólicas, frutas dessecadas, geléias artificiais, legumes e verduras desidratadas, sucos, refrigerantes e refrescos, picles, vinhos, vinagres e frutos do mar.',
            };
        }
        else if (it.title == 'Lecitina INS 322') {
            this.text = {
                title: 'Lecitina, INS 322',
                subTitle: 'Substância presente nos tecidos nervosos, mas freqüentemente obtida para uso comercial em ovos. Pode ser substituído por lecitina de soja e sintéticos.',
            };
        }
        else if (it.title == 'Glicerina INS 422') {
            this.text = {
                title: 'Glicerina, INS 422',
                subTitle: 'Substância líquida, incolor e xaroposa, que é o princípio doce dos óleos e a base dos corpos gordos conhecidos. Pode ser produzida a partir de gordura animal ou vegetal. Também existe glicerina vegetal ou sintética',
            };
        }
        else if (it.title == 'Gelatina INS 441') {
            this.text = {
                title: 'Gelatina, INS 441',
                subTitle: 'Presente em refrigerantes, cervejas, refrescos, doces e geléias, produtos de frutas, queijo, molhos, margarina, creme vegetal e produtos de confeitaria.',
            };
        }
        else if (it.title == 'Goma Laca INS 904') {
            this.text = {
                title: 'Goma Laca, INS 904',
                subTitle: 'Excreção resinosa de determinados insetos. Utilizada em laquês para cabelo. Pode ser substituído por cera de plantas',
            };
        }
        else if (it.title == 'Acido Estearico INS 570') {
            this.text = {
                title: 'Acido Estearico, INS 570',
                subTitle: 'Pode derivar de gordura de vacas, de ovelhas, de cães e de gatos sacrificados. Na maioria das vezes se refere a uma substância gordurosa tirada do estômago de porcos. Possui diversos derivados, como os estearatos. O ácido esteárico pode ser encontrado em várias gorduras vegetais, como coco.',
            };
        }
        else if (it.title == 'Cisteina INS 920') {
            this.text = {
                title: 'Cisteina, INS 920',
                subTitle: 'Aminoácido retirado de pêlos de animais',
            };
        }
        else if (it.title == 'Oleo de Ricino') {
            this.text = {
                title: 'Oleo de Ricino',
                subTitle: 'Extraído da planta Ricinus communis (Mamona). Usado em cosméticos, medicamentos e lubrificantes',
            };
        }
        else if (it.title == 'Acido Caprilico') {
            this.text = {
                title: 'Acido Caprilico',
                subTitle: 'Ácido líquido e gorduroso do leite de vaca ou cabra. Encontrado em perfumes e sabonetes. Possui derivados, como o Triglicerídeo Caprílico. Pode ser substituído por óleo de palma e de coco.',
            };
        }
        else if (it.title == 'Acido Hialuronico') {
            this.text = {
                title: 'Acido Hialuronico',
                subTitle: 'Proteína encontrada em cordões umbilicais e em fluidos das articulações. Também pode substituído por ácido hialurônico sintético ou óleos vegetais.',
            };
        }
        else if (it.title == 'Alcool Cetilico') {
            this.text = {
                title: 'Alcool Cetilico',
                subTitle: 'Cera encontrada no espermacete (cetina) do esperma de baleias e golfinhos. Pode ser substituído por álcool cetílico vegetal ou espermacete sintético.',
            };
        }
        else if (it.title == 'Acido Linoleico') {
            this.text = {
                title: 'Acido Linoleico',
                subTitle: 'Ácido graxo que pode ser origem animal ou vegetal.',
            };
        }
        else if (it.title == 'Acidos Nucleicos') {
            this.text = {
                title: 'Acidos Nucleicos',
                subTitle: 'Encontrado nos núcleos de todas as células vivas.',
            };
        }
        else if (it.title == 'Alantoina') {
            this.text = {
                title: 'Alantoina',
                subTitle: 'Ácido úrico de vacas e outros mamíferos. Pode ser encontrado também em algumas plantas (como confrei). Pode ser substituído por extrato de raízes de confrei ou sintéticos.',
            };
        }
        else if (it.title == 'Colageno') {
            this.text = {
                title: 'Colageno',
                subTitle: 'Proteína fibrosa, de natureza mucopolissacarídica, que é constituinte essencial da substância intercelular do tecido conjuntivo. Geralmente proveniente de animais. Pode ser substituído por proteína da soja ou óleo de amêndoas.',
            };
        }
        else if (it.title == 'Elastina') {
            this.text = {
                title: 'Elastina',
                subTitle: 'Proteína elástica, encontrada nos ligamentos do pescoço e nas paredes arteriais das vacas. Similar ao colágeno. Não afeta a elasticidade da pele.',
            };
        }
        else if (it.title == 'Esqualeno') {
            this.text = {
                title: 'Esqualeno',
                subTitle: 'Óleo de fígado de tubarão. Usado em hidratantes e em tintas de cabelo. Pode ser substituído por vegetais emolientes como azeite de oliva, óleo de gérmen de trigo e óleo de farelo de arroz.',
            };
        }
        else if (it.title == 'Esterol') {
            this.text = {
                title: 'Esterol',
                subTitle: 'Uma mistura de álcoois sólidos. Pode ser obtido do óleo de esperma de baleia. Usado em cremes e xampus. Possui diversos derivados. Existe o ácido esteárico vegetal.',
            };
        }
        else if (it.title == 'Queratina') {
            this.text = {
                title: 'Queratina',
                subTitle: 'Proteína insolúvel, principal constituinte da epiderme, unhas, pêlos, tecidos córneos e esmalte dos dentes. Pode ser obtida nos chifres, cascos, penas e pêlo de vários animais. Utilizada em condicionadores de cabelo, xampus e soluções para permanente. Pode ser substituído por óleo de amêndoas, alecrim, urtiga, proteína de soja e óleo de amla (do fruto de uma árvore indiana).',
            };
        }
        var alert = this.alertCtrl.create({
            title: this.text.title,
            subTitle: this.text.subTitle,
            buttons: ['OK']
        });
        alert.present();
    };
    HomePage.prototype.messagefav = function (it) {
        this.text = {
            title: it,
            subTitle: 'Este item foi favoritado'
        };
        var alert = this.alertCtrl.create({
            title: this.text.title,
            subTitle: this.text.subTitle,
            buttons: ['OK']
        });
        alert.present();
    };
    HomePage.prototype.DeleteFav = function (str) {
        for (var i = 0; i < this.favoritos.length; i++) {
            if (str === this.favoritos[i]) {
                if (this.favoritos[i].ordem == 1) {
                    this.favoritos[i].fav = false;
                }
                if (this.favoritos[i].ordem == 2) {
                    this.favoritos[i].fav = false;
                }
                if (this.favoritos[i].ordem == 3) {
                    this.favoritos[i].fav = false;
                }
                if (this.favoritos[i].ordem == 4) {
                    this.favoritos[i].fav = false;
                }
                if (this.favoritos[i].ordem == 5) {
                    this.favoritos[i].fav = false;
                }
                if (this.favoritos[i].ordem == 6) {
                    this.favoritos[i].fav = false;
                }
                if (this.favoritos[i].ordem == 7) {
                    this.favoritos[i].fav = false;
                }
                if (this.favoritos[i].ordem == 8) {
                    this.favoritos[i].fav = false;
                }
                if (this.favoritos[i].ordem == 9) {
                    this.favoritos[i].fav = false;
                }
                if (this.favoritos[i].ordem == 10) {
                    this.favoritos[i].fav = false;
                }
                if (this.favoritos[i].ordem == 11) {
                    this.favoritos[i].fav = false;
                }
                if (this.favoritos[i].ordem == 12) {
                    this.favoritos[i].fav = false;
                }
                if (this.favoritos[i].ordem == 13) {
                    this.favoritos[i].fav = false;
                }
                if (this.favoritos[i].ordem == 14) {
                    this.favoritos[i].fav = false;
                }
                if (this.favoritos[i].ordem == 15) {
                    this.favoritos[i].fav = false;
                }
                if (this.favoritos[i].ordem == 16) {
                    this.favoritos[i].fav = false;
                }
                if (this.favoritos[i].ordem == 17) {
                    this.favoritos[i].fav = false;
                }
                if (this.favoritos[i].ordem == 18) {
                    this.favoritos[i].fav = false;
                }
                if (this.favoritos[i].ordem == 19) {
                    this.favoritos[i].fav = false;
                }
                if (this.favoritos[i].ordem == 20) {
                    this.favoritos[i].fav = false;
                }
                if (this.favoritos[i].ordem == 21) {
                    this.favoritos[i].fav = false;
                }
                if (this.favoritos[i].ordem == 22) {
                    this.favoritos[i].fav = false;
                }
                if (this.favoritos[i].ordem == 23) {
                    this.favoritos[i].fav = false;
                }
                if (this.favoritos[i].ordem == 24) {
                    this.favoritos[i].fav = false;
                }
                if (this.favoritos[i].ordem == 1) {
                    this.favoritos[i].fav = false;
                }
                this.favoritos.splice(i, 1);
                this.generalProvider.favGeral = this.favoritos;
            }
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Klaus\myApp\src\pages\home\home.html"*/'<!-- <ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Bem vindo!</h2>\n  <p>\n   Nesta página, serão encontrados seus favoritos,<br/>\n   mas, para este checkpoint, ela ainda não faz nada\n  </p>\n  <p>\n    a página substâncias mostra, mais ou menos, como ela será<br/>\n    e a barra de pesquisa já funciona. Os botões mostram caixas de texto <br/>\n    que explicam o que acontece ao clicá-los<br/>\n    a página lista é só um "placeholder", pra dar ideia, mais ou menos de como ela será.<br/>\n    e a página informações ficará em branco, por que ela não tem muita funcionalidade além de informar\n  </p>\n</ion-content>\n -->\n <ion-header>\n  <ion-navbar>\n    <ion-title>\n      Favoritos\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-list>\n      <ion-item tappable *ngFor="let item of favoritos">\n\n      <button class="botaoAnimalFav" item-left clear ion-button default *ngIf="item.animal">\n        <ion-icon name="play"></ion-icon>\n      </button>\n\n      <button class="botaoVegealFav" item-left clear ion-button default *ngIf="item.vegetal">\n        <ion-icon name="star"></ion-icon>\n      </button>\n\n      <button class="botaoTalvezFav" item-left clear ion-button default *ngIf="item.talvez">\n        <ion-icon name="flask"></ion-icon>\n      </button>\n\n      {{ item.title }}\n\n      <button class="botao-fav" item-right clear ion-button default>\n        <ion-icon class="favorito-ativo" name="star" (click) = "DeleteFav(item)"></ion-icon>\n      </button>\n      <button item-right clear ion-button default>\n        <ion-icon name="play" (click) = "message(item)"></ion-icon>\n      </button>  \n      </ion-item>\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Klaus\myApp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_general_general__["a" /* GeneralProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_feed_feed_module__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_general_general__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








//import { FavoritosComponent } from '../components/favoritos/favoritos';





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/feed/feed.module#FeedPageModule', name: 'FeedPage', segment: 'feed', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10__pages_feed_feed_module__["FeedPageModule"],
                __WEBPACK_IMPORTED_MODULE_11__angular_http__["a" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
                //FavoritosComponent
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_general_general__["a" /* GeneralProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Klaus\myApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Klaus\myApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneralProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { HttpClient } from '@angular/common/http';

/*
  Generated class for the GeneralProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GeneralProvider = /** @class */ (function () {
    function GeneralProvider() {
        this.teste = "coisa";
        this.favGeral = [];
        this.armazemDeFav = false;
        this.armazemDeFav2 = false;
        this.armazemDeFav3 = false;
        this.armazemDeFav4 = false;
        this.armazemDeFav5 = false;
        this.armazemDeFav6 = false;
        this.armazemDeFav7 = false;
        this.armazemDeFav8 = false;
        this.armazemDeFav9 = false;
        this.armazemDeFav10 = false;
        this.armazemDeFav11 = false;
        this.armazemDeFav12 = false;
        this.armazemDeFav13 = false;
        this.armazemDeFav14 = false;
        this.armazemDeFav15 = false;
        this.armazemDeFav16 = false;
        this.armazemDeFav17 = false;
        this.armazemDeFav18 = false;
        this.armazemDeFav19 = false;
        this.armazemDeFav20 = false;
        this.armazemDeFav21 = false;
        this.armazemDeFav22 = false;
        this.armazemDeFav23 = false;
        this.armazemDeFav24 = false;
        console.log('Hello GeneralProvider Provider');
    }
    GeneralProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], GeneralProvider);
    return GeneralProvider;
}());

//# sourceMappingURL=general.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map