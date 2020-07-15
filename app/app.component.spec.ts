import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TestBed, async } from '@angular/core/testing';
import { 
  BrowserDynamicTestingModule, 
  platformBrowserDynamicTesting 
} 
from '@angular/platform-browser-dynamic/testing';


describe('AppComponent', () => {
    let appComponent: AppComponent;
    beforeAll( ()=> {
     TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
  });
  beforeEach(
    async(() => {
      appComponent = new AppComponent();
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
    const fixture = appComponent
    
    // act
    const result = fixture.compute(-1);

    //assert 
    expect(result).toBe(0);
  })
    it('should check if name contain string amir', () =>{
    const fixture = appComponent;
    const result = fixture.name;
    expect(result).toContain("amir");
  })

  it('should check name changed',()=> {
    // arrange
    let currentName = appComponent.name;
    appComponent.nameChange.subscribe(nc => currentName = nc)
    // act
    appComponent.onNameChange();
    // assets
    expect(currentName).not.toContain('hey dan')
  })
});
