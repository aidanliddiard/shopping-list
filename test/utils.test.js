// IMPORT MODULES under test here:
import { renderItem } from '../render-utils.js';

const test = QUnit.test;

test('time to test bought item with renderItem function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<li class="bought item">Goldfish</li>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderItem ({
        id: 2, 
        created_at: '2022-02-18T16:24:42+00:00', 
        item: 'Goldfish', bought: true, 
        user_id: 'd26416c2-2395-4a3b-b8a6-1035e140ea80'
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('time to test not bought item with renderItem function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<li class="item">Goldfish</li>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderItem ({
        id: 2, 
        created_at: '2022-02-18T16:24:42+00:00', 
        item: 'Goldfish', bought: false, 
        user_id: 'd26416c2-2395-4a3b-b8a6-1035e140ea80'
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
