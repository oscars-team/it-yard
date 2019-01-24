import { async, TestBed } from '@angular/core/testing';
import { CategoryTabberComponent } from './category-tabber.component';
describe('CategoryTabberComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [CategoryTabberComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(CategoryTabberComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=category-tabber.component.spec.js.map