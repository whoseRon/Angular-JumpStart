import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';

import { CustomerOrderEditComponent } from './customer-order-edit.component';
import { DataService } from 'src/app/core/services/data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UtilitiesService } from 'src/app/core/services/utilities.service';
import { GrowlerService } from 'src/app/core/growler/growler.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

describe('CustomerOrderEditComponent', () => {
  let component: CustomerOrderEditComponent;
  let fixture: ComponentFixture<CustomerOrderEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, FormsModule, HttpClientTestingModule ],
      declarations: [ CustomerOrderEditComponent ],
      providers: [DataService, UtilitiesService, {provide: 'Window', useValue: window }, GrowlerService,
        {provide: ActivatedRoute, useValue: {parent: {snapshot: {params: {'id': 1}}}}} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerOrderEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain order variable for form', ()=>{
    expect(component.order).toEqual({productName: '', itemCost: 0});
  })
});
