const {Circle, Triangle, Square} = require('../lib/shapes')
    
describe('Circle', () => {
    it('should render correctly', () => {
        const Shape = new Circle();
        var color = 'blue'
        Shape.setColor('blue');
    expect(Shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="${color}" />`);
    });
});
  
describe('Triangle', () => {
    it('should render correctly', () => {
        const Shape = new Triangle();
        var color = 'red'
        Shape.setColor('red');
    expect(Shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="${color}" />`);
    });
});

describe('Square', () => {
    it('should render correctly', () => {
        const Shape = new Square();
        var color = 'green'
        Shape.setColor('green');
    expect(Shape.render()).toEqual(`<rect x="50" y="50" width="100" height="100" fill="${color}" />`);
    });
});