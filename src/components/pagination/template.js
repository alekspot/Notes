const getActiveClass = (baseClass, selectedIf) => `${baseClass}${selectedIf ? ' ' + baseClass+'--selected': '' }`;

export const renderPagination = ({pagination}) => {
    const {currentPage, startPage, endPage, totalPages} = pagination;

    const isVisibleLeftArrows = startPage !== 1;
    const isVisibleRightArrows = endPage !== totalPages;

    return [
        {
            text: '<<',
            page: currentPage - pagination.pages.length,
            display: isVisibleLeftArrows
        },
        {
            text: '<',
            page: currentPage - 1,
            display: isVisibleLeftArrows
        },
        ...pagination.pages.map(item =>({text: item, page: item, display: true})),
        {
            text: '>',
            page: currentPage + 1,
            display: isVisibleRightArrows
        },
        {
            text: '>>',
            page: currentPage + pagination.pages.length,
            display: isVisibleRightArrows
        }
    ]
        .filter(item => item.display)
        .map(({page, text}) => {
            return `<span class="${getActiveClass('pagination__item', currentPage === page)}" data-page="${page}">${text}</span>`;
        })
        .join('');
};


