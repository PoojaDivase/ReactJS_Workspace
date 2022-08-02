import { render, screen } from "@testing-library/react";
import Async from "./Async";

//Test Suite
describe('Async component test suite', () => {

    test('renders posts if requests succeeds', async () => {

        //Arrange
        render(<Async />);

        //Act
        //nothing

        //Assert
        //const listItemElements = screen.getAllByRole('listitem');//it takes time
        const listItemElements = await screen.findAllByRole('listitem');//3rd param- timer--> returns promise
        expect(listItemElements).not.toHaveLength(0);
    });

    //Do not send request- use mocking
    test('renders posts if requests succeeds', async () => {

        //Arrange
        window.fetch= jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id:'p1', title:'First post'}],
        });
        render(<Async />);

        //Act
        //nothing

        //Assert
        //const listItemElements = screen.getAllByRole('listitem');//it takes time
        const listItemElements = await screen.findAllByRole('listitem');//3rd param- timer--> returns promise
        expect(listItemElements).not.toHaveLength(0);
    });

});