import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Greeting from "./Greeting";

//globally available fun
//params --> 1]testSuite description, 2] Anonymous function which contains test funtions
describe("Greeting Component", () => {


    //globally available function
    //param ==> functiona name/purpose, anonymous test function
    //3 A's
    // 1] Arrange => set up test data, test conditions & test env
    // 2] Act => Run logic that should be tested, (e.g. execute function)
    // 3] Assert = compare execution results with expected results
    test('renders hello world as a text', () => {
        //Arrange
        render(<Greeting />); //pass JSX code

        //Act
        //..nothing

        //Assert
        //access virtual DOM
        const helloWorldElement = screen.getByText('Hello Worl', { exact: false });
        expect(helloWorldElement).toBeInTheDocument();
    });

    test('renders its good to see you when buttons are NOT clicked', () => {
        //Arrange
        render(<Greeting />);

        //Act
        //..nothing

        //Assert
        const outputElement = screen.getByText('good to see you!', { exact: false });
        expect(outputElement).toBeInTheDocument();

    });


    test('renders "Change Text!" when button is Clicked', () => {
        //Arrange
        render(<Greeting />);

        //Act 
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement)

        //Assert
        const outputElement = screen.getByText('Change Text!', { exact: false });
        expect(outputElement).toBeInTheDocument();
    });

    test('NOT render "Its good to see you" when BUTTON clicked', () => {

        //Arrange
        render(<Greeting />);

        //Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        //Assert
        const outputElement = screen.queryByText('Its good to see you', { exact: false });
        //expect(outputElement).not.toBeInTheDocument();
        expect(outputElement).toBeNull();
    });
});
