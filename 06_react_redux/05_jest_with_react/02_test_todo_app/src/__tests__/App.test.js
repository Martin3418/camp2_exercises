import React from 'react';
import App from '../App.js';
import renderer from 'react-test-renderer';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// test('Test ADDING a new task', () => { //test snapshot
//   const component = renderer.create(
//     <App />, document.getElementById("root")
//   );
//
//   let tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
//   let preventDefault = function(element) {
//       return element;
//   }
//   let event = {preventDefault()};
//   tree.children[0].children[0].props.onSubmit();
//   tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
//
//   });
//
//   test('Test HANDLING a new task to save it', () => { //test snapshot
//     const component = renderer.create(
//       <App />, document.getElementById("root")
//     );
//
//     let tree = component.toJSON();
//     // console.log(tree.children[0].children[0].children[0].props.onChange);
//
//     tree.children[0].children[0].children[0].props.onChange();
//     tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
//
//     });



    describe("Enzyme shallow", () => {
      it("Shallow test:CREATE NEW TASK", () => { //text enzyme shallow rendered
        const component = shallow(
          <App />
        )
        component.setState({ newTask: "task 1 to test" });
        component.find('form').simulate('submit', {preventDefault() {}});

        // console.log(component.find("span").text());
        expect(component.find("span").text()).toEqual("task 1 to test");
      });

      it("Shallow test:MANY TASKS ALLOWED", () => { //text enzyme shallow rendered
        const component = shallow(
          <App />
        )
        component.setState({ newTask: "task 1 to test" });
        component.find('form').simulate('submit', {preventDefault() {}});
        component.setState({ newTask: "task 1 to test" });
        component.find('form').simulate('submit', {preventDefault() {}});
        component.setState({ newTask: "task 2 to test" });
        component.find('form').simulate('submit', {preventDefault() {}});
        // console.log(component.find("span"));
        expect(component.find("span").length).toBe(3);
      });

      it("Shallow test:DELETE BUTTON TO DISPLAY", () => { //text enzyme shallow rendered
        const component = shallow(
          <App />
        )
        component.setState({ newTask: "task 2 to test" });
        component.find('form').simulate('submit', {preventDefault() {}});
        component.setState({ newTask: "task 3 to test" });
        component.find('form').simulate('submit', {preventDefault() {}});
        component.setState({ newTask: "task 4 to test" });
        component.find('form').simulate('submit', {preventDefault() {}});
        component.find('input').at(1).simulate("change");
        console.log(component.find("#del"));

        expect(component.find("#del").length).toBe(1);
      });
    });
