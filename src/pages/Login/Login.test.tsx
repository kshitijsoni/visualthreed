import * as ReactDOM from 'react-dom';
import Login from './Login';
jest.mock('../../provider/AuthProvider');

describe('Login component tests', () => {
    let container: HTMLDivElement

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<Login />, container);
    })

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    })

    test('Renders all input fields correctly', () => {
        const inputs = container.querySelectorAll('input');
        expect(inputs).toHaveLength(2);

        expect(inputs[0].name).toBe('email');
        expect(inputs[1].name).toBe('password');
    });

    test('Renders all buttons correctly', () => {
        const buttons = container.querySelectorAll('button');
        expect(buttons).toHaveLength(2);

        expect(buttons[0].type).toBe('button');
        expect(buttons[1].type).toBe('button');
    });

})
