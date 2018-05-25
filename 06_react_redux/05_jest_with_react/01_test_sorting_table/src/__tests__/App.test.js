import React from 'react';
import App from '../App.js';
import renderer from 'react-test-renderer';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const products =
[
  { "decathlon_id": 8282689, "title": "Corne chasse 14cm", "price": 9.99 },
  { "decathlon_id": 8354464, "title": "Basic L print Long Gold Fusion", "price": 9.99 },
  { "decathlon_id": 8380024, "title": "RUN ELIOPRIME", "price": 54.99 },
  { "decathlon_id": 8379970, "title": "Pantalon Gym", "price": 12.99 },
  { "decathlon_id": 8247793, "title": "PALMES WADERS", "price": 24.99 },
  { "decathlon_id": 8357549, "title": "MINIMIZER EDEN UNI  NOIR", "price": 19.99 },
  { "decathlon_id": 8326155, "title": "Pantalon Training mesh marine", "price": 44.99 },
  { "decathlon_id": 8329121, "title": "COUTEAU A PALOURDES", "price": 4.99 },
  { "decathlon_id": 8370749, "title": "Doudoune Hike 100 garçon bleu", "price": 9.99 },
  { "decathlon_id": 8298354, "title": "OREILLER CONFORT", "price": 6.99 },
  { "decathlon_id": 8044622, "title": "2 guêtres RIDING noir", "price": 14.99 },
  { "decathlon_id": 8249674, "title": "BOBINE FUN 2 3 4mm X 40 20 12m", "price": 6.99 },
  { "decathlon_id": 8353265, "title": "Justaucorps manche longue Gym.", "price": 34.99 }
]
describe("Enzyme shallow", () => {
  it("Shallow test:onClick()", () => { //text enzyme shallow rendered
    const orderAsc = shallow(
      <App lines={products}/>
    )

    expect(orderAsc.text().slice(12,19)).toEqual('8044622');

    orderAsc.find('th').first().simulate('click');
// autre manière de faire
    expect(orderAsc.find("td").first().props().children.toString().toEqual('8380024');
  });
});


test('Data sorted when click on column ID', () => { //test snapshot
  const component = renderer.create(
    <App lines={products} />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // console.log(tree.children[0]);
  // console.log(tree.children[0].children[0]);
  // console.log(tree.children[0].children[0].children[0]);
  // console.log(tree.children[0].children[0].children[1]);
  // console.log(tree.children[0].children[0].children[0]);
  // console.log(tree.children[0].children[0].children[0].props.onClick);

  tree.children[0].children[0].children[0].props.onClick();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.children[0].children[0].children[1].props.onClick();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.children[0].children[0].children[2].props.onClick();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
