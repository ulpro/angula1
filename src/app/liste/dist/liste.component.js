"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ListeComponent = void 0;
var core_1 = require("@angular/core");
var ListeComponent = /** @class */ (function () {
    function ListeComponent(dataservice) {
        this.dataservice = dataservice;
        this.message = "bonjour";
        this.liste = [
            { id: 1,
                titre: "velo",
                prix: 84,
                alternative: "",
                dispo: false,
                url: "",
                extAltImg: ""
            }, {
                id: 2,
                titre: "tv",
                prix: 4,
                alternative: "",
                dispo: false,
                url: "",
                extAltImg: ""
            }
        ];
    }
    ListeComponent.prototype.onAffiche = function (arg) {
        return this.message = "Merci d'avoir voté pour l'article : " + arg;
    };
    ListeComponent.prototype.getlist = function () {
        var _this = this;
        this.dataservice.getlistfromserver().subscribe(function (liste) { _this.liste = liste; });
    };
    ListeComponent = __decorate([
        core_1.Component({
            selector: 'app-liste',
            templateUrl: './liste.component.html',
            styleUrls: ['./liste.component.css']
        })
    ], ListeComponent);
    return ListeComponent;
}());
exports.ListeComponent = ListeComponent;
