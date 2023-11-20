import gd from 'node-gd';

const img = await gd.createTrueColor(200, 200);

const points = [
  { x: 100, y: 20 },
  { x: 170, y: 60 },
  { x: 170, y: 140 },
  { x: 100, y: 180 },
  { x: 30, y: 140 },
  { x: 30, y: 60 },
  { x: 100, y: 20 },
];

img.setThickness(4);
img.polygon(points, 0xff0000);
await img.saveBmp('test1.bmp', 0);
img.destroy();

console.log('Hello, World!');