import React from 'react';
import CourseFrom from './CourseForm';
import renderer from 'react-test-renderer';
import {courses, authors} from '../../../tools/mockData';

it("Set submit button label to 'Saving...', when saving is true", () => {
    const tree = renderer.create(
    <CourseFrom course={courses[0]}
        authors={authors}
        onSave={jest.fn()}
        onChange={jest.fn()}
        saving 
        />);

        expect(tree).toMatchSnapshot()
});

it("Set submit button label to 'Save, when saving is true", () => {
    const tree = renderer.create(
    <CourseFrom course={courses[0]}
        authors={authors}
        onSave={jest.fn()}
        onChange={jest.fn()}
        saving={false}
        />);

        expect(tree).toMatchSnapshot()
})