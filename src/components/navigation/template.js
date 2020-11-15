const months = [
    'Jan', 'Feb', 'Mar',
    'Apr', 'May', 'Jun', 
    'Jul', 'Aug', 'Sep',
    'Oct', 'Nov', 'Dec'
];

const toNavItem = (item, id, selected = 0) => `
    <div class="nav-item${selected === id ? ' nav-item--selected': ''}" data-id="${id}" data-type="btn">
        ${item}
    </div>`;

export const renderNav = (selected) => months.map((item, id) => toNavItem(item, id, selected)).join('');
    
    

