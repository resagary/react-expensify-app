import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
    state = {
        selectedOption: false
    };

    openModal = () => {
        this.setState(() => ({ selectedOption: true }));
    };

    closeModal = () => {
        this.setState(() => ({ selectedOption: false }));
    };

    onRemove = () => {
        this.props.startRemoveExpense({ id: this.props.expense.id });
        this.props.history.push('/');
    };

    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm 
                      expense={this.props.expense}
                      onSubmit={this.onSubmit}
                    />
                    <button
                      className="button button--secondary"
                      onClick={this.openModal}
                    > Remove
                    </button>
                </div>
                <Modal
                  isOpen={this.state.selectedOption}
                  onRequestClose={this.closeModal}
                  contentLabel="Remove Expense"
                  className="modal"
                  closeTimeoutMS={200}
                  appElement={document.getElementById('app')}
                >
                    <h3 className="modal__title">Remove Expense</h3>
                    <p className="modal__body">Are you sure you want to remove {this.props.expense.description}?</p>
                    <button className="button--remove" onClick={this.onRemove}>Yes</button>
                    <button className="button button--secondary" onClick={this.closeModal}>No</button>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);