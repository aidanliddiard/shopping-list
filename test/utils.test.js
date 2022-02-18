// IMPORT MODULES under test here:
// import { example } from '../example.js';

const test = QUnit.test;

test('time to test renderItem function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<li class="bought item">Goldfish</li>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderItem ({
        
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.HTML, expected);
});
