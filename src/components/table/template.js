const ths = [
    'Date & Time',
    'Title',
    'Note'
];

const tableHeaders = `<tr>${ths.map((th,index) => `<td ${index === 0 ? `class="col-1"`: ''}class="">${th}</td>`).join('')}</tr>`;

const getTableRecord = (record, selected) => `
    <tr class="table__record${selected === record.id ? ' table__record--selected': ''}" data-type="record" data-id="${record.id}">
        <td class="col-1">${record.time}</td>
        <td>${record.title}</td>
        <td>${record.text}</td>
    </tr>
`;

export const renderTable = ({recordsOnPage, selectedRecord}) => {
    return `
        <table class="table">
           ${tableHeaders}
           ${recordsOnPage.map((record) => getTableRecord(record, selectedRecord)).join('')}
        </table>
    `;
};