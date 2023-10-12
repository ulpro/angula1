"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var AppComponent = /** @class */ (function () {
    function AppComponent(dataservice) {
        this.dataservice = dataservice;
        this.title = 'project';
        this.message = "";
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var compteur = rxjs_1.interval(1000).pipe(operators_1.filter(function (value) { return value % 2 === 0; }), operators_1.map(function (value) { return value % 2 === 0 ?
            value + " est pair" :
            value + " est impair"; }));
        this.compteursubscription = compteur.subscribe({
            next: function (v) { return _this.secondes = v; },
            error: function (e) { return console.error(e); },
            complete: function () { return console.info('complete'); }
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.compteursubscription.unsubscribe;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
