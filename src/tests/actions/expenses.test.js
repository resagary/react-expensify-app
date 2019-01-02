import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123A' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123A'
    });
});

test('should setup edit expense action object', () => {
    const action = editExpense('abc89', { note: 'new note' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'abc89',
        updates: {
            note: 'new note'
        }
    });
});

test('should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 145500,
        createdAt: 1000,
        note: "January's rent"
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('should setup add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            amount: 0,
            createdAt: 0,
            note: ""
        }
    });
});