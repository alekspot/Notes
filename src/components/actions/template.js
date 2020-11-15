const actionBtns = (state) => 
    [
        {
            action: 'show_modal',
            text: 'ADD',
            isDisabled: state.showModal
        },
        {
            action: 'delete',
            text: 'DELETE',
            isDisabled: state.showModal || !state.selectedRecord
        }
    ].map(btn => `<button class="btn" data-type="action" data-action="${btn.action}" ${btn.isDisabled ? 'disabled' : ''}>${btn.text}</button>`)
        .join('');
    

export const renderAction = (state) => `

    
    <h5>Note list:</h5>
    <div class="actions">
        ${actionBtns(state)}
    </div>
   
    ${state.showModal ?
        `<div class="modal">
        <h4>Add note</h4>
        <div>Title:</div>
        <input data-input="title" type="text">
        <div>Note:</div>
        <input data-input="text" type="text">
        <div class="modal__footer">
            <button class="btn modal__btn" data-type="action" data-action="add">ADD</button>
            <button class="btn modal__btn" data-type="action" data-action="close">CLOSE</button>
        </div>
    </div>
    ` : ''
}
`;