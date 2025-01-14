/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ConfigState } from '../states';
import { takeUntilDestroy } from '../utils';
import snq from 'snq';
var DynamicLayoutComponent = /** @class */ (function () {
    function DynamicLayoutComponent(router, store) {
        var _this = this;
        this.router = router;
        this.store = store;
        this.router.events.pipe(takeUntilDestroy(this)).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (event instanceof NavigationEnd) {
                var segments = _this.router.parseUrl(event.url).root.children.primary.segments;
                var _a = _this.store.selectSnapshot(ConfigState.getAll), layouts = _a.requirements.layouts, routes = _a.routes;
                /** @type {?} */
                var layout_1 = findLayout(segments, routes);
                _this.layout = layouts.filter((/**
                 * @param {?} l
                 * @return {?}
                 */
                function (l) { return !!l; })).find((/**
                 * @param {?} l
                 * @return {?}
                 */
                function (l) { return snq((/**
                 * @return {?}
                 */
                function () { return l.type.toLowerCase().indexOf(layout_1); }), -1) > -1; }));
            }
        }));
    }
    /**
     * @return {?}
     */
    DynamicLayoutComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { };
    DynamicLayoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'abp-dynamic-layout',
                    template: "\n    <ng-container *ngTemplateOutlet=\"layout ? componentOutlet : routerOutlet\"></ng-container>\n\n    <ng-template #routerOutlet><router-outlet></router-outlet></ng-template>\n    <ng-template #componentOutlet><ng-container *ngComponentOutlet=\"layout\"></ng-container></ng-template>\n  "
                }] }
    ];
    /** @nocollapse */
    DynamicLayoutComponent.ctorParameters = function () { return [
        { type: Router },
        { type: Store }
    ]; };
    tslib_1.__decorate([
        Select(ConfigState.getOne('requirements')),
        tslib_1.__metadata("design:type", Observable)
    ], DynamicLayoutComponent.prototype, "requirements$", void 0);
    return DynamicLayoutComponent;
}());
export { DynamicLayoutComponent };
if (false) {
    /** @type {?} */
    DynamicLayoutComponent.prototype.requirements$;
    /** @type {?} */
    DynamicLayoutComponent.prototype.layout;
    /**
     * @type {?}
     * @private
     */
    DynamicLayoutComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    DynamicLayoutComponent.prototype.store;
}
/**
 * @param {?} segments
 * @param {?} routes
 * @return {?}
 */
function findLayout(segments, routes) {
    /** @type {?} */
    var layout = "empty" /* empty */;
    /** @type {?} */
    var route = routes
        .reduce((/**
     * @param {?} acc
     * @param {?} val
     * @return {?}
     */
    function (acc, val) { return (val.wrapper ? tslib_1.__spread(acc, val.children) : tslib_1.__spread(acc, [val])); }), [])
        .find((/**
     * @param {?} r
     * @return {?}
     */
    function (r) { return r.path === segments[0].path; }));
    if (route) {
        if (route.layout) {
            layout = route.layout;
        }
        if (route.children && route.children.length && segments.length > 1) {
            /** @type {?} */
            var child = route.children.find((/**
             * @param {?} c
             * @return {?}
             */
            function (c) { return c.path === segments[1].path; }));
            if (child && child.layout) {
                layout = child.layout;
            }
        }
    }
    return layout;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1sYXlvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZHluYW1pYy1sYXlvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBbUIsTUFBTSxlQUFlLENBQUM7QUFDM0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQWMsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBR2xDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDeEMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQzVDLE9BQU8sR0FBRyxNQUFNLEtBQUssQ0FBQztBQUV0QjtJQWVFLGdDQUFvQixNQUFjLEVBQVUsS0FBWTtRQUF4RCxpQkFjQztRQWRtQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBTztRQUN0RCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxLQUFLO1lBQzdELElBQUksS0FBSyxZQUFZLGFBQWEsRUFBRTtnQkFDMUIsSUFBQSwwRUFBUTtnQkFDVixJQUFBLG1EQUcyQyxFQUYvQixpQ0FBTyxFQUN2QixrQkFDK0M7O29CQUUzQyxRQUFNLEdBQUcsVUFBVSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUM7Z0JBRTNDLEtBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU07Ozs7Z0JBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsQ0FBQyxFQUFILENBQUcsRUFBQyxDQUFDLElBQUk7Ozs7Z0JBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxHQUFHOzs7Z0JBQUMsY0FBTSxPQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQU0sQ0FBQyxFQUFwQyxDQUFvQyxHQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQXhELENBQXdELEVBQUMsQ0FBQzthQUM1RztRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELDRDQUFXOzs7SUFBWCxjQUFlLENBQUM7O2dCQS9CakIsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLFFBQVEsRUFBRSxvU0FLVDtpQkFDRjs7OztnQkFqQnVCLE1BQU07Z0JBQ2IsS0FBSzs7SUFtQnBCO1FBREMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7MENBQzVCLFVBQVU7aUVBQXNCO0lBcUJqRCw2QkFBQztDQUFBLEFBaENELElBZ0NDO1NBdkJZLHNCQUFzQjs7O0lBQ2pDLCtDQUMrQzs7SUFFL0Msd0NBQWtCOzs7OztJQUVOLHdDQUFzQjs7Ozs7SUFBRSx1Q0FBb0I7Ozs7Ozs7QUFtQjFELFNBQVMsVUFBVSxDQUFDLFFBQXNCLEVBQUUsTUFBdUI7O1FBQzdELE1BQU0sc0JBQW9COztRQUV4QixLQUFLLEdBQUcsTUFBTTtTQUNqQixNQUFNOzs7OztJQUFDLFVBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSyxPQUFBLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGtCQUFLLEdBQUcsRUFBSyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsa0JBQUssR0FBRyxHQUFFLEdBQUcsRUFBQyxDQUFDLEVBQXpELENBQXlELEdBQUUsRUFBRSxDQUFDO1NBQ25GLElBQUk7Ozs7SUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBM0IsQ0FBMkIsRUFBQztJQUV6QyxJQUFJLEtBQUssRUFBRTtRQUNULElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNoQixNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztTQUN2QjtRQUVELElBQUksS0FBSyxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTs7Z0JBQzVELEtBQUssR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUk7Ozs7WUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBM0IsQ0FBMkIsRUFBQztZQUVuRSxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO2dCQUN6QixNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQzthQUN2QjtTQUNGO0tBQ0Y7SUFFRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdmlnYXRpb25FbmQsIFJvdXRlciwgVXJsU2VnbWVudCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZUxheW91dFR5cGUgfSBmcm9tICcuLi9lbnVtcyc7XG5pbXBvcnQgeyBBQlAsIENvbmZpZyB9IGZyb20gJy4uL21vZGVscyc7XG5pbXBvcnQgeyBDb25maWdTdGF0ZSB9IGZyb20gJy4uL3N0YXRlcyc7XG5pbXBvcnQgeyB0YWtlVW50aWxEZXN0cm95IH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHNucSBmcm9tICdzbnEnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhYnAtZHluYW1pYy1sYXlvdXQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJsYXlvdXQgPyBjb21wb25lbnRPdXRsZXQgOiByb3V0ZXJPdXRsZXRcIj48L25nLWNvbnRhaW5lcj5cblxuICAgIDxuZy10ZW1wbGF0ZSAjcm91dGVyT3V0bGV0Pjxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD48L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSAjY29tcG9uZW50T3V0bGV0PjxuZy1jb250YWluZXIgKm5nQ29tcG9uZW50T3V0bGV0PVwibGF5b3V0XCI+PC9uZy1jb250YWluZXI+PC9uZy10ZW1wbGF0ZT5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgRHluYW1pY0xheW91dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIEBTZWxlY3QoQ29uZmlnU3RhdGUuZ2V0T25lKCdyZXF1aXJlbWVudHMnKSlcbiAgcmVxdWlyZW1lbnRzJDogT2JzZXJ2YWJsZTxDb25maWcuUmVxdWlyZW1lbnRzPjtcblxuICBsYXlvdXQ6IFR5cGU8YW55PjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHN0b3JlOiBTdG9yZSkge1xuICAgIHRoaXMucm91dGVyLmV2ZW50cy5waXBlKHRha2VVbnRpbERlc3Ryb3kodGhpcykpLnN1YnNjcmliZShldmVudCA9PiB7XG4gICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSB7XG4gICAgICAgIGNvbnN0IHsgc2VnbWVudHMgfSA9IHRoaXMucm91dGVyLnBhcnNlVXJsKGV2ZW50LnVybCkucm9vdC5jaGlsZHJlbi5wcmltYXJ5O1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgcmVxdWlyZW1lbnRzOiB7IGxheW91dHMgfSxcbiAgICAgICAgICByb3V0ZXMsXG4gICAgICAgIH0gPSB0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KENvbmZpZ1N0YXRlLmdldEFsbCk7XG5cbiAgICAgICAgY29uc3QgbGF5b3V0ID0gZmluZExheW91dChzZWdtZW50cywgcm91dGVzKTtcblxuICAgICAgICB0aGlzLmxheW91dCA9IGxheW91dHMuZmlsdGVyKGwgPT4gISFsKS5maW5kKGwgPT4gc25xKCgpID0+IGwudHlwZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YobGF5b3V0KSwgLTEpID4gLTEpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7fVxufVxuXG5mdW5jdGlvbiBmaW5kTGF5b3V0KHNlZ21lbnRzOiBVcmxTZWdtZW50W10sIHJvdXRlczogQUJQLkZ1bGxSb3V0ZVtdKTogZUxheW91dFR5cGUge1xuICBsZXQgbGF5b3V0ID0gZUxheW91dFR5cGUuZW1wdHk7XG5cbiAgY29uc3Qgcm91dGUgPSByb3V0ZXNcbiAgICAucmVkdWNlKChhY2MsIHZhbCkgPT4gKHZhbC53cmFwcGVyID8gWy4uLmFjYywgLi4udmFsLmNoaWxkcmVuXSA6IFsuLi5hY2MsIHZhbF0pLCBbXSlcbiAgICAuZmluZChyID0+IHIucGF0aCA9PT0gc2VnbWVudHNbMF0ucGF0aCk7XG5cbiAgaWYgKHJvdXRlKSB7XG4gICAgaWYgKHJvdXRlLmxheW91dCkge1xuICAgICAgbGF5b3V0ID0gcm91dGUubGF5b3V0O1xuICAgIH1cblxuICAgIGlmIChyb3V0ZS5jaGlsZHJlbiAmJiByb3V0ZS5jaGlsZHJlbi5sZW5ndGggJiYgc2VnbWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgY29uc3QgY2hpbGQgPSByb3V0ZS5jaGlsZHJlbi5maW5kKGMgPT4gYy5wYXRoID09PSBzZWdtZW50c1sxXS5wYXRoKTtcblxuICAgICAgaWYgKGNoaWxkICYmIGNoaWxkLmxheW91dCkge1xuICAgICAgICBsYXlvdXQgPSBjaGlsZC5sYXlvdXQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGxheW91dDtcbn1cbiJdfQ==