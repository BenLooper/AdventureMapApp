import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import WebMap from '@arcgis/core/WebMap';
import MapView from '@arcgis/core/views/MapView';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  public view: any = null;
  // Get a container link for map place
  @ViewChild('mapView', { static: true }) private mapViewElement!: ElementRef;

  initializeMap(){
    const container = this.mapViewElement.nativeElement;

    const webmap = new WebMap({
      portalItem: {
        id: 'aa1d3f80270146208328cf66d022e09c',
      },
    });

    const view = new MapView({
      container,
      map: webmap
    })

    this.view = view;
    return this.view.when();
  }

  ngOnInit(): any {
    this.initializeMap().then(() => {
      console.log('Map ready I guess')
    })
  }

  ngOnDestroy(): void {
      if(this.view){
        this.view.destroy();
      }
  }
}
