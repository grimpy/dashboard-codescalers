"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var dash_service_1 = require('./dash.service');
var DashComponent = (function () {
    function DashComponent(dashService) {
        var _this = this;
        this.dashService = dashService;
        this.count = 0;
        this.id = setInterval(function () {
            _this.getOverallStatus();
            _this.getStatusSummary();
        }, 10000);
    }
    DashComponent.prototype.ngOnInit = function () {
        this.getOverallStatus();
        this.getStatusSummary();
    };
    DashComponent.prototype.getOverallStatus = function () {
        var _this = this;
        this.dashService.getOverallStatus(function (response) { return _this.OverallStatus = response.text(); });
        this.count += 1;
        console.log(this.count);
    };
    DashComponent.prototype.getStatusSummary = function () {
        var _this = this;
        this.dashService.getStatusSummary(function (response) { return _this.StatusSummary = response.text(); });
        this.count += 1;
        console.log(this.count);
    };
    DashComponent = __decorate([
        core_1.Component({
            selector: 'my-dash',
            template: "\n    <h1>TEST</h1>\n    <h3><i>Get Dashboard Data</i></h3>\n\n    <p><i>Overall status</i></p>\n    <p>{{OverallStatus}}</p>\n\n    <p><i>Summary status</i></p>\n    <p>{{StatusSummary}}</p>\n\n  ",
            providers: [dash_service_1.DashService, http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [dash_service_1.DashService])
    ], DashComponent);
    return DashComponent;
}());
exports.DashComponent = DashComponent;
//# sourceMappingURL=dash.component.js.map