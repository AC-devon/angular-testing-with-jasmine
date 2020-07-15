import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TestBed, async } from '@angular/core/testing';
import { 
  BrowserDynamicTestingModule, 
  platformBrowserDynamicTesting 
} 
from '@angular/platform-browser-dynamic/testing';


describe('AppComponent', () => {
    beforeAll( ()=> {
     TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
  });
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [AppComponent]
      }).compileComponents();
    })
  );
  it(
    'should render title \'Welcome to app!!\' in a h1 tag',
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!!');
    })
  );
  it('should return 0 if the input is negative', () =>{
    // arrange
    const fixture = new AppComponent();
    
    // act
    const result = fixture.compute(-1);

    //assert 
    expect(result).toBe(0);
  })
    it('should check if name contain string amir', () =>{
    const fixture = new AppComponent();
    const result = fixture.name;
    expect(result).toContain("amir");
  })
});
