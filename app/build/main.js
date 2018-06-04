webpackJsonp([0],{

/***/ 108:
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
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/feed/feed.module": [
		150
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
webpackAsyncContext.id = 149;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedPageModule", function() { return FeedPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feed__ = __webpack_require__(151);
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

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
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
    function FeedPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FeedPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FeedPage');
    };
    FeedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-feed',template:/*ion-inline-start:"C:\Users\Klaus\myApp\src\pages\feed\feed.html"*/'<!--\n  Generated template for the FeedPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Informacoes</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Klaus\myApp\src\pages\feed\feed.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], FeedPage);
    return FeedPage;
}());

//# sourceMappingURL=feed.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__feed_feed__ = __webpack_require__(151);
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

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
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
    function AboutPage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.searchQuery = '';
        this.fav = [{
                'title': '',
                'fav': false,
            }
        ];
        this.tabinterno = true;
        this.favoritos = [];
        this.initializeItems();
        var aux = JSON.stringify(this.favoritos);
        sessionStorage.setItem('AboutPage', aux);
    }
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
        this.fav = [
            {
                'title': 'item10',
                'fav': false,
            },
            {
                'title': 'item12',
                'fav': false,
            },
            {
                'title': 'item13',
                'fav': false,
            }, {
                'title': 'item14',
                'fav': false,
            },
            {
                'title': 'item15',
                'fav': false,
            },
            {
                'title': 'item10000',
                'fav': false,
            },
            {
                'title': 'item12000',
                'fav': false,
            },
            {
                'title': 'item13000',
                'fav': false,
            },
            {
                'title': 'item14000',
                'fav': false,
            },
            {
                'title': 'item15000',
                'fav': false,
            }
        ];
    };
    AboutPage.prototype.addfavoritos = function (str) {
        var _this = this;
        for (var i = 0; i < this.fav.length; ++i) {
            if (this.fav[i].title == str) {
                if (this.fav[i].fav == false && this.favoritos.findIndex(function (n) { return n === _this.fav[i].title; }) === -1) {
                    this.fav[i].fav = true;
                    this.favoritos.push(this.fav[i].title);
                }
                else {
                    this.fav[i].fav = false;
                    this.favoritos.splice(this.favoritos.findIndex(function (n) { return n === _this.fav[i].title; }), 1);
                    console.log('deu bom');
                }
                console.log(this.fav[i].fav);
                console.log(this);
            }
        }
        console.log(this.favoritos);
        var aux = JSON.stringify(this.favoritos);
        sessionStorage.setItem('AboutPage', aux);
        var alert = this.alertCtrl.create({
            title: str,
            subTitle: 'Este item foi favoritado',
            buttons: ['OK']
        });
        alert.present();
    };
    AboutPage.prototype.removefavoritos = function (str) {
        for (var i = 0; i < this.fav.length; ++i) {
            if (this.fav[i].title == str) {
                if (this.fav[i].fav == false) {
                    this.fav[i].fav = true;
                    this.favoritos.push(this.fav[i].title);
                }
                else {
                    this.fav[i].fav = false;
                    this.favoritos.splice(i, 1);
                    this.fav.splice(i, 1);
                    console.log('deu bom');
                }
                console.log(this.fav[i].fav);
                console.log(this);
            }
        }
        console.log(this.favoritos);
        var aux = JSON.stringify(this.favoritos);
        sessionStorage.setItem('AboutPage', aux);
        var alert = this.alertCtrl.create({
            title: str,
            subTitle: 'Este item foi favoritado',
            buttons: ['OK']
        });
        alert.present();
    };
    AboutPage.prototype.tabinternotroca = function (b) {
        if (!this.tabinterno) {
            this.tabinterno = !b;
            this.initializeItems();
        }
    };
    AboutPage.prototype.tabinternotroca2 = function (b) {
        if (this.tabinterno) {
            this.tabinterno = !b;
            this.initializeItems();
        }
    };
    AboutPage.prototype.getItems = function (ev) {
        // Reset items back all of the items
        this.initializeItems();
        //set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string dont filter items
        if (val && val.trim() != "") {
            this.items = this.items.filter(function (item) {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    AboutPage.prototype.message = function (it) {
        if (it == 'item10') {
            this.text = {
                title: 'item10',
                subTitle: 'Talvez esta substância provenha de uma fonte animal, portanto, tenha cuidado ao consumi-la',
            };
        }
        if (it == 'item12') {
            this.text = {
                title: 'Item12',
                subTitle: 'Talvez esta substância provenha de uma fonte animal, portanto, tenha cuidado ao consumi-la',
            };
        }
        if (it == 'item13') {
            this.text = {
                title: 'Item13',
                subTitle: 'Talvez esta substância provenha de uma fonte animal, portanto, tenha cuidado ao consumi-la',
            };
        }
        if (it == 'item14') {
            this.text = {
                title: 'Item14',
                subTitle: 'Talvez esta substância provenha de uma fonte animal, portanto, tenha cuidado ao consumi-la',
            };
        }
        if (it == 'item15') {
            this.text = {
                title: 'Item15',
                subTitle: 'Talvez esta substância provenha de uma fonte animal, portanto, tenha cuidado ao consumi-la',
            };
        }
        if (it == 'item10000') {
            this.text = {
                title: 'item10000',
                subTitle: 'Talvez esta substância provenha de uma fonte animal, portanto, tenha cuidado ao consumi-la',
            };
        }
        if (it == 'item12000') {
            this.text = {
                title: 'Item12000',
                subTitle: 'Talvez esta substância provenha de uma fonte animal, portanto, tenha cuidado ao consumi-la',
            };
        }
        if (it == 'item13000') {
            this.text = {
                title: 'Item13000',
                subTitle: 'Talvez esta substância provenha de uma fonte animal, portanto, tenha cuidado ao consumi-la',
            };
        }
        if (it == 'item14000') {
            this.text = {
                title: 'Item14000',
                subTitle: 'Talvez esta substância provenha de uma fonte animal, portanto, tenha cuidado ao consumi-la',
            };
        }
        if (it == 'item15000') {
            this.text = {
                title: 'Item15000',
                subTitle: 'Talvez esta substância provenha de uma fonte animal, portanto, tenha cuidado ao consumi-la',
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
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\Klaus\myApp\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <ion-searchbar (ionInput)="getItems($event)" clearInput></ion-searchbar>\n        <button item-right clear (click)=\'tabinternotroca(tabinterno)\' ion-button default>\n        aditivos\n        </button>\n        <button item-right clear (click)=\'tabinternotroca2(tabinterno)\' ion-button default>\n        outros\n        </button>          \n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-list>\n      <ion-item tappable *ngFor="let item of items">\n        {{ item }}\n      <button item-right clear (click)=\'addfavoritos(item)\' ion-button default>\n        <ion-icon name="star"></ion-icon>\n      </button>\n      <button item-right clear ion-button default>\n        <ion-icon name="play" (click)="message(item)"></ion-icon>\n      </button>\n    \n      </ion-item>\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Klaus\myApp\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
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
    function ContactPage(navCtrl, navParams, alertCtrl, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.popoverCtrl = popoverCtrl;
        this.showAddProduto = false;
        this.verdurasTrue = true;
        this.frutasTrue = true;
        this.bebidasTrue = true;
        this.higieneTrue = true;
        this.produto = {
            nome: '',
            preco: 0,
            unidades: 0,
            categoria: '',
            observacao: ''
        };
        this.produtoVerdura = {
            nome: '',
            preco: 0,
            unidades: 0,
            categoria: '',
            observacao: ''
        };
        this.produtoFruta = {
            nome: '',
            preco: 0,
            unidades: 0,
            categoria: '',
            observacao: ''
        };
        this.produtoBebida = {
            nome: '',
            preco: 0,
            unidades: 0,
            categoria: '',
            observacao: ''
        };
        this.produtoHigiene = {
            nome: '',
            preco: 0,
            unidades: 0,
            categoria: '',
            observacao: ''
        };
        this.infoprodutos = [];
        this.produtosVerduras = [];
        this.produtosFrutas = [];
        this.produtosBebidas = [];
        this.produtosHigiene = [];
    }
    ContactPage.prototype.message = function (b) {
        this.infoprodutos.push(this.produto);
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
            observacao: ''
        };
        this.produtoVerdura = {
            nome: '',
            preco: 0,
            unidades: 0,
            categoria: '',
            observacao: ''
        };
        this.produtoFruta = {
            nome: '',
            preco: 0,
            unidades: 0,
            categoria: '',
            observacao: ''
        };
        this.produtoBebida = {
            nome: '',
            preco: 0,
            unidades: 0,
            categoria: '',
            observacao: ''
        };
        this.produtoHigiene = {
            nome: '',
            preco: 0,
            unidades: 0,
            categoria: '',
            observacao: ''
        };
        alert.present();
        this.showAddProduto = !b;
        console.log(this.produtoBebida);
    };
    ContactPage.prototype.AddItem = function (b) {
        this.showAddProduto = !b;
        console.log(this.infoprodutos);
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
        console.log("deu");
    };
    ContactPage.prototype.DeleteItem = function (str) {
        for (var i = 0; i < this.infoprodutos.length; i++) {
            if (str === this.infoprodutos[i]) {
                this.infoprodutos.splice(i, 1);
            }
        }
        for (var i = 0; i < this.produtosVerduras.length; i++) {
            if (str === this.produtosVerduras[i]) {
                this.produtosVerduras.splice(i, 1);
            }
        }
        for (var i = 0; i < this.produtosFrutas.length; i++) {
            if (str === this.produtosFrutas[i]) {
                this.produtosFrutas.splice(i, 1);
            }
        }
        for (var i = 0; i < this.produtosBebidas.length; i++) {
            if (str === this.produtosBebidas[i]) {
                this.produtosBebidas.splice(i, 1);
            }
        }
        for (var i = 0; i < this.produtosHigiene.length; i++) {
            if (str === this.produtosHigiene[i]) {
                this.produtosHigiene.splice(i, 1);
            }
        }
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\Klaus\myApp\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Adicionar Produtos\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list inset *ngIf="showAddProduto">\n\n    <ion-item>\n      <ion-label>Categoria</ion-label>\n      <ion-select [(ngModel)]="produto.categoria">\n        <ion-option value="Verduras">Verduras</ion-option>\n        <ion-option value="Frutas">Frutas</ion-option>\n        <ion-option value="Bebidas">Bebidas</ion-option>\n        <ion-option value="Higiene">Higiene</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Produto</ion-label>\n      <ion-input type="text" [(ngModel)]="produto.nome"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label floating>Preço</ion-label>\n      <ion-input type="text" [(ngModel)]="produto.preco"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Unidades</ion-label>\n      <ion-input type="text" [(ngModel)]="produto.unidades"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Observação</ion-label>\n      <ion-input type="text" [(ngModel)]="produto.observacao"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <button ion-button full (click)="message(showAddProduto)">Adicionar Produto</button>  \n    </ion-item>\n  </ion-list>\n\n  <ion-list inset *ngIf="!showAddProduto">\n    <ion-item>\n      <button ion-button full (click)="AddItem()">Adicionar Produto</button>  \n    </ion-item>\n    \n    <ion-item tappable style="text-align: center" (click)="showVerduras(verdurasTrue)">\n      Verdura: {{produtosVerduras.length}}\n      <ion-icon name="arrow-dropdown" item-end></ion-icon>\n    </ion-item>\n\n    <ion-list *ngIf="verdurasTrue">\n    <ion-item tappable *ngFor="let item of produtosVerduras">\n       <b>Nome: </b> {{ item.nome }} <br/>\n       <b>Quantidade: </b> {{ item.unidades }}un <br/>         \n       <b>Preço Total: </b> {{ item.preco*item.unidades }}R$ <br/>\n      <button item-right clear ion-button default>\n          <ion-icon name="star"></ion-icon>\n        </button>\n        <button item-right clear ion-button default>\n          <ion-icon name="play" (click)="DeleteItem(item)"></ion-icon>\n      </button>\n    </ion-item>\n  </ion-list>\n  </ion-list>\n\n  <ion-list inset *ngIf="!showAddProduto">\n    <ion-item tappable style="text-align: center" (click)="showFrutas(frutasTrue)">\n      Fruta: {{produtosFrutas.length}}\n      <ion-icon name="arrow-dropdown" item-end></ion-icon>\n    </ion-item>\n\n    <ion-list *ngIf="frutasTrue">\n    <ion-item tappable *ngFor="let item of produtosFrutas">\n       <b>Nome: </b> {{ item.nome }} <br/>\n       <b>Quantidade: </b> {{ item.unidades }}un <br/>         \n       <b>Preço Total: </b> {{ item.preco*item.unidades }}R$ <br/>\n      <button item-right clear ion-button default>\n          <ion-icon name="star"></ion-icon>\n        </button>\n        <button item-right clear ion-button default>\n          <ion-icon name="play" (click)="DeleteItem(item)"></ion-icon>\n      </button>\n    </ion-item>\n  </ion-list>\n  </ion-list>\n\n  <ion-list inset *ngIf="!showAddProduto">\n    <ion-item tappable style="text-align: center" (click)="showBebidas(bebidasTrue)">\n      Bebidas: {{produtosBebidas.length}}\n      <ion-icon name="arrow-dropdown" item-end></ion-icon>\n    </ion-item>\n\n    <ion-list *ngIf="bebidasTrue">\n    <ion-item tappable *ngFor="let item of produtosBebidas">\n       <b>Nome: </b> {{ item.nome }} <br/>\n       <b>Quantidade: </b> {{ item.unidades }}un <br/>         \n       <b>Preço Total: </b> {{ item.preco*item.unidades }}R$ <br/>\n      <button item-right clear ion-button default>\n          <ion-icon name="star"></ion-icon>\n        </button>\n        <button item-right clear ion-button default>\n          <ion-icon name="play" (click)="DeleteItem(item)"></ion-icon>\n      </button>\n    </ion-item>\n  </ion-list>\n  </ion-list>\n\n  <ion-list inset *ngIf="!showAddProduto">\n    <ion-item tappable style="text-align: center" (click)="showHigiene(higieneTrue)" >\n      Higiene: {{produtosHigiene.length}}\n      <ion-icon name="arrow-dropdown" item-end></ion-icon>\n    </ion-item>\n\n    <ion-list *ngIf="higieneTrue">\n    <ion-item tappable *ngFor="let item of produtosHigiene">\n       <b>Nome: </b> {{ item.nome }} <br/>\n       <b>Quantidade: </b> {{ item.unidades }}un <br/>         \n       <b>Preço Total: </b> {{ item.preco*item.unidades }}R$ <br/>\n      <button item-right clear ion-button default>\n          <ion-icon name="star"></ion-icon>\n        </button>\n        <button item-right clear ion-button default>\n          <ion-icon name="play" (click)="DeleteItem(item)"></ion-icon>\n      </button>\n    </ion-item>\n  </ion-list>\n  </ion-list>\n\n</ion-content>\n\n\n'/*ion-inline-end:"C:\Users\Klaus\myApp\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* PopoverController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
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
    function HomePage(navCtrl, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.searchQuery = '';
        // if(this.about.favoritos.length > 0)
        // for (var i = 0; i < this.about.favoritos.length; ++i) {
        // 	this.about.favoritos[i];
        // }
        this.initializeItems();
    }
    HomePage.prototype.initializeItems = function () {
        var aux = JSON.parse(sessionStorage.getItem('AboutPage'));
        console.log(aux);
        this.favoritos = aux;
    };
    HomePage.prototype.message = function (item) {
        if (item == 'item10') {
            this.text = {
                title: 'item10',
                subTitle: 'Talvez esta substância provenha de uma fonte animal, portanto, tenha cuidado ao consumi-la',
            };
        }
        else if (item == 'item12') {
            this.text = {
                title: 'Item12',
                subTitle: 'Talvez esta substância provenha de uma fonte animal, portanto, tenha cuidado ao consumi-la',
            };
        }
        else if (item == 'item13') {
            this.text = {
                title: 'Item13',
                subTitle: 'Talvez esta substância provenha de uma fonte animal, portanto, tenha cuidado ao consumi-la',
            };
        }
        else if (item == 'item14') {
            this.text = {
                title: 'Item14',
                subTitle: 'Talvez esta substância provenha de uma fonte animal, portanto, tenha cuidado ao consumi-la',
            };
        }
        else if (item == 'item15') {
            this.text = {
                title: 'Item15',
                subTitle: 'Talvez esta substância provenha de uma fonte animal, portanto, tenha cuidado ao consumi-la',
            };
        }
        else if (item == 'item10000') {
            this.text = {
                title: 'Item10000',
                subTitle: 'Talvez esta substância provenha de uma fonte animal, portanto, tenha cuidado ao consumi-la',
            };
        }
        else if (item == 'item12000') {
            this.text = {
                title: 'Item12000',
                subTitle: 'Talvez esta substância provenha de uma fonte animal, portanto, tenha cuidado ao consumi-la',
            };
        }
        else if (item == 'item13000') {
            this.text = {
                title: 'Item13000',
                subTitle: 'Talvez esta substância provenha de uma fonte animal, portanto, tenha cuidado ao consumi-la',
            };
        }
        else if (item == 'item14000') {
            this.text = {
                title: 'Item14000',
                subTitle: 'Talvez esta substância provenha de uma fonte animal, portanto, tenha cuidado ao consumi-la',
            };
        }
        else if (item == 'item15000') {
            this.text = {
                title: 'Item15000',
                subTitle: 'Talvez esta substância provenha de uma fonte animal, portanto, tenha cuidado ao consumi-la',
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
        var aux = JSON.stringify(this.favoritos);
        sessionStorage.setItem('AboutPage', aux);
    };
    HomePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        var aux = JSON.parse(sessionStorage.getItem('AboutPage'));
        console.log(aux);
        this.favoritos = aux;
        setTimeout(function () {
            refresher.complete();
            var toast = _this.toastCtrl.create({
                message: 'Os favoritos foram atualizadas',
                duration: 3000
            });
            toast.present();
        }, 1000);
    };
    ;
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Klaus\myApp\src\pages\home\home.html"*/'<!-- <ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Bem vindo!</h2>\n  <p>\n   Nesta página, serão encontrados seus favoritos,<br/>\n   mas, para este checkpoint, ela ainda não faz nada\n  </p>\n  <p>\n    a página substâncias mostra, mais ou menos, como ela será<br/>\n    e a barra de pesquisa já funciona. Os botões mostram caixas de texto <br/>\n    que explicam o que acontece ao clicá-los<br/>\n    a página lista é só um "placeholder", pra dar ideia, mais ou menos de como ela será.<br/>\n    e a página informações ficará em branco, por que ela não tem muita funcionalidade além de informar\n  </p>\n</ion-content>\n -->\n <ion-header>\n  <ion-navbar>\n    <ion-title>\n      Favoritos\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n    <ion-list>\n      <ion-item tappable *ngFor="let item of favoritos">\n        {{ item }}\n      <button item-right clear ion-button default>\n        <ion-icon name="star" ></ion-icon>\n      </button>\n      <button item-right clear ion-button default>\n        <ion-icon name="play" (click) = "message(item)"></ion-icon>\n      </button>  \n      </ion-item>\n\n        <br/><div style="text-align: center;">Deslize para baixo para atualizar a lista</div>\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Klaus\myApp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_feed_feed_module__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(274);
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
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(195);
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

/***/ })

},[199]);
//# sourceMappingURL=main.js.map