## AbstractObject3D: Demo of data binding

This storybook demonstrates data binding (change propagation) which is by default supported by all components extended from AbstractObject3D.
The input fields `translate{X,Y,Z}`, `rotate{X,Y,Z}` are forwarded internally to [Object3D](https://threejs.org/docs/#api/en/core/Object3D).

### Source Code

```html
<atft-empty (render)="mainRenderer.render()"
    [translateX]="translateX"
    [translateY]="translateY"
    [translateZ]="translateZ"
    [rotateX]="rotateX"
    [rotateY]="rotateY"
    [rotateZ]="rotateZ">
      …
    <atft-cylinder-mesh …>…</atft-cylinder-mesh>
    <atft-torus-mesh …>…</atft-torus-mesh>
     ...
</atft-empty>
```

### How it works

The components atft-empty, atft-cylinder-mesh, atft-torus-mesh and others extends AbstractObject3D, with [ngOnChanges](https://angular.io/api/core/OnChanges) method to handle the changes:
 
```typescript
public ngOnChanges(changes: SimpleChanges) {
  …
  if (['rotateX', 'rotateY', 'rotateZ'].some(propName => propName in changes)) {
    this.applyRotation();
    mustRerender = true;
  }
  …
}
```