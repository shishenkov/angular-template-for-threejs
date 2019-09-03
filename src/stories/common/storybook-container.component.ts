import {Component} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'storybook-container',
  template: `
      <atft-orbit-controls rotateSpeed=1 zoomSpeed=1.2 [listeningControlElement]=mainRenderer.renderPane (render)="mainRenderer.render()">
          <atft-webgl-renderer #mainRenderer>
              <atft-perspective-camera (render)="mainRenderer.render()" [zAxisUp]="true" positionX=50 positionY=-20
                                       positionZ=50></atft-perspective-camera>
              <atft-scene>
                  <atft-axes-helper size=200></atft-axes-helper>
                  <atft-grid-helper size=100 divisions=10 [rotateX]="90 | deg2rad"></atft-grid-helper>
                  <atft-point-light color="white" intensity="0.9" distance="1000" translateX=50 translateY=50
                                    translateZ=50></atft-point-light>
                  <storybook-sample (render)="mainRenderer.render()"></storybook-sample>
              </atft-scene>
          </atft-webgl-renderer>
      </atft-orbit-controls>
  `,
  styleUrls: ['storybook-container.component.scss']
})
export class StorybookContainerComponent {

}