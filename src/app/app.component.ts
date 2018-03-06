import {
  Compiler,
  Component, ComponentRef, Injector, ModuleWithComponentFactories, NgModuleFactory, NgModuleRef, OnInit,
  SystemJsNgModuleLoader,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import * as corodova from 'cordova';
import {RouterConfigLoader} from '@angular/router/src/router_config_loader';
import {Router, Routes} from '@angular/router';



declare var LocalFileSystem;


@Component({
  selector:'app-root',
  templateUrl:'./app.component.html',
  styleUrls:['./app.component.css']
})
export class AppComponent implements OnInit
{

  @ViewChild('container', {read:ViewContainerRef}) container:ViewContainerRef;
  cmpRef:ComponentRef<any>;



  pathModule:string = 'modules/especifico-test/especifico-test.module#EspecificoTestModule';

  constructor(private router:Router,
              private compiler: Compiler,
              private viewref: ViewContainerRef,
              private loader:SystemJsNgModuleLoader, private inj:Injector)
  {


  }


  loadModuleMethod1()
  {

    let routerSet:Routes =
      [
        {
          path:'especifico-test',

          loadChildren:this.pathModule
        }
      ]
    ;

    this.router.resetConfig(routerSet);

    /*
     this.moduleNode.modulePath = '../modules/especifico-test-wrapping/especifico-test-wrapping.module#EspecificoTestWrappingModule';
     this.moduleNode.componentName = 'EspecificoTestWrappingComponent';
     */

    let componentName = 'EspecificoTestComponent';

    this.loader.load(this.pathModule)  // load the module and its components
        .then((modFac) =>
        {
          // the missing step, need to use Compiler to resolve the module's embedded components
          this.compiler.compileModuleAndAllComponentsAsync<any>(modFac.moduleType)

              .then((factory: ModuleWithComponentFactories<any>) => {
                return factory.componentFactories.find(x => x.componentType.name === componentName);
              })
              .then(cmpFactory =>
              {

                // need to instantiate the Module so we can use it as the provider for the new component
                let modRef = modFac.create(this.viewref.parentInjector);
                this.cmpRef = this.viewref.createComponent(cmpFactory, 0, modRef.injector);
                // done, now Module and main Component are known to NG2

              });
        });
  }

  loadModuleMethod2()
  {


    let routerSet:Routes =
      [
        {
          path:'especifico-test',
          loadChildren:this.pathModule
        }
      ]
    ;

    this.router.resetConfig(routerSet);

    //navigator.notification.alert(message, alertCallback, [title], [buttonName])
    // alert('holaa')
    // this.router.navigate(['especifico-test']);

     this.loader.load(this.pathModule)
     //  this.loader.load('modules/especifico-test/bundles/EspecificoTestModule')
     .then((factory:NgModuleFactory<any>) =>
     {

     console.log(factory.moduleType);
     const entryComponent = (<any>factory.moduleType).entry;
     const moduleRef:NgModuleRef<any> = factory.create(this.inj);

     const compFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(entryComponent);
     this.container.createComponent(compFactory);

     });

  }

  test(methodNumber:number)
  {

    switch(methodNumber)
    {
      case 1:
        this.loadModuleMethod1();
        break;

      case 2:
        this.loadModuleMethod2();
        break;
    }


  }

  listDir_clickHandler(path:string)
  {
    console.log(cordova['file'].applicationDirectory + path)
    this.listDir(cordova['file'].applicationDirectory + path);
  }

  ngOnInit():void
  {


    document.addEventListener('deviceready', this.onDeviceReady, false);


  }

  onDeviceReady()
  {

    window['requestFileSystem'](LocalFileSystem.PERSISTENT, 0, onFileSystemSuccess, fail);
   function onFileSystemSuccess(fileSystem)
    {
      console.log(fileSystem.name);
      console.log(fileSystem.root.name);
    }

    function fail(error)
    {
      console.log(error.code);
    }

    window['sqlitePlugin'].selfTest(function ()
    {
      alert('SELF test OK');
     // console.log('SELF test OK');
    });

  }


  listDir(path)
  {
  window['resolveLocalFileSystemURL'](path,
    function (fileSystem:any) {
      let reader = fileSystem.createReader();
      reader.readEntries(
        function (entries) {
          console.log(entries);
        },
        function (err) {
          console.log(err);
        }
      );
    }, function (err) {
      console.log(err);
    }
  );
}

}
