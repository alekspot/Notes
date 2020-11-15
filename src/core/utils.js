export function capitalize(str) {
    if (typeof str !== 'string') {
        return '';
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function isEqual(a, b) {
    if (typeof a === 'object' && typeof b === 'object') {
        return JSON.stringify(a) === JSON.stringify(b);
    }
    return a === b;
}

export function paginate(
    totalItems,
    currentPage = 1,
    pageSize = 10,
    maxPages = 4
) {
    
    const totalPages = Math.ceil(totalItems / pageSize);

    if (currentPage < 1) {
        currentPage = 1;
    } else if (currentPage > totalPages) {
        currentPage = totalPages;
    }

    let startPage;
    let endPage;
    if (totalPages <= maxPages) {
        
        startPage = 1;
        endPage = totalPages;
    } else {
       
        const maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
        const maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
        if (currentPage <= maxPagesBeforeCurrentPage) {
           
            startPage = 1;
            endPage = maxPages;
        } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
            
            startPage = totalPages - maxPages + 1;
            endPage = totalPages;
        } else {
            
            startPage = currentPage - maxPagesBeforeCurrentPage;
            endPage = currentPage + maxPagesAfterCurrentPage;
        }
    }

   
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    
    const pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);

    
    return {
        totalItems,
        currentPage,
        pageSize,
        totalPages,
        startPage,
        endPage,
        startIndex,
        endIndex,
        pages
    };
}

export const setPageRecordsWithPaginationByMonth = (records, month, page) => {
    
    const recordsByMonth = records.filter(rec => rec.month === month);
    
    const pagination = paginate(recordsByMonth.length, page);

    const {startIndex, endIndex} = pagination;

    const recordsOnPage = recordsByMonth.filter((rec, index) => {
        return index >= startIndex && index <= endIndex; 
    });

    return {recordsByMonth, recordsOnPage, pagination};
};

export const setPageRecords = (recordsByMonth, page) => {
    const pagination = paginate(recordsByMonth.length, page);
    const {startIndex, endIndex} = pagination;

    const recordsOnPage = recordsByMonth.filter((rec, index) => {
        return index >= startIndex && index <= endIndex; 
    });

    return {recordsOnPage, pagination};
};

export function storage(key, data = null) {
    if (!data) {
        return JSON.parse(localStorage.getItem(key));
    }
    localStorage.setItem(key, JSON.stringify(data));
}