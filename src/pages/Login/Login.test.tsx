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

})
