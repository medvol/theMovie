import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

export default function initPagination({ page, itemsPerPage, totalItems }) {

  const paginationContainer = document.querySelector('#pagination')

  const options = {
    totalItems,
    itemsPerPage,
    visiblePages: 5,
    page,
    centerAlign: true,
    usageStatistics: false,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
      page: '<a href="#" class="tui-page-btn border">{{page}}</a>',
      currentPage:
        '<strong class="tui-page-btn tui-is-selected border">{{page}}</strong>',
      moveButton:
        '<a href="#" class="border tui-page-btn tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}} border">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip border">' +
        '<span class="tui-ico-ellip">...</span>' +
        '</a>',
    },
};
  
  const pagination = new Pagination(paginationContainer, options);
  return pagination;
}
