// import Pagination from 'tui-pagination';

// function initializePagination() {
//   const container = document.getElementById('pagination');
//   const options = {
//     totalItems: 10,
//     itemsPerPage: 10,
//     visiblePages: 5,
//     page: 1,
//     centerAlign: false,
//     firstItemClassName: 'tui-first-child',
//     lastItemClassName: 'tui-last-child',
//     template: {
//       page: '<a href="#" class="tui-page-btn">{{page}}</a>',
//       currentPage:
//         '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
//       moveButton:
//         '<a href="#" class="tui-page-btn tui-{{type}}">' +
//         '<span class="tui-ico-{{type}}">{{type}}</span>' +
//         '</a>',
//       disabledMoveButton:
//         '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
//         '<span class="tui-ico-{{type}}">{{type}}</span>' +
//         '</span>',
//       moreButton:
//         '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
//         '<span class="tui-ico-ellip">...</span>' +
//         '</a>',
//     },
//   };
//   const pagination = new Pagination(container, options);

//   return pagination;
// }
// pagination.reset();

// export { initializePagination as default };

// var Pagination = defineClass(
//   /** @lends Pagination.prototype */ {
//     init: function (container, options) {
//       /**
//        * Option object
//        * @type {object}
//        * @private
//        */
//       this._options = extend({}, defaultOption, options);
//       this._currentPage = 0;
//       this._view = new View(
//         container,
//         this._options,
//         util.bind(this._onClickHandler, this)
//       );

//       this._paginate();

//       if (this._options.usageStatistics) {
//         util.sendHostName();
//       }
//     },
//     _setCurrentPage: function (page) {
//       this._currentPage = page || this._options.page;
//     },
//     _getLastPage: function () {
//       var lastPage = Math.ceil(
//         this._options.totalItems / this._options.itemsPerPage
//       );

//       return !lastPage ? 1 : lastPage;
//     },
//     _getPageIndex: function (pageNumber) {
//       var left, pageIndex;

//       if (this._options.centerAlign) {
//         left = Math.floor(this._options.visiblePages / 2);
//         pageIndex = pageNumber - left;
//         pageIndex = Math.max(pageIndex, 1);
//         pageIndex = Math.min(
//           pageIndex,
//           this._getLastPage() - this._options.visiblePages + 1
//         );

//         return pageIndex;
//       }

//       return Math.ceil(pageNumber / this._options.visiblePages);
//     },
//     _getRelativePage: function (moveType) {
//       var isPrevMove = moveType === 'prev';
//       var currentPage = this.getCurrentPage();

//       return isPrevMove ? currentPage - 1 : currentPage + 1;
//     },
//     _getMorePageIndex: function (moveType) {
//       var currentPageIndex = this._getPageIndex(this.getCurrentPage());
//       var pageCount = this._options.visiblePages;
//       var isPrevMove = moveType === 'prev';
//       var pageIndex;

//       if (this._options.centerAlign) {
//         pageIndex = isPrevMove
//           ? currentPageIndex - 1
//           : currentPageIndex + pageCount;
//       } else {
//         pageIndex = isPrevMove
//           ? (currentPageIndex - 1) * pageCount
//           : currentPageIndex * pageCount + 1;
//       }

//       return pageIndex;
//     },
//     _convertToValidPage: function (page) {
//       var lastPageNumber = this._getLastPage();
//       page = Math.max(page, 1);
//       page = Math.min(page, lastPageNumber);

//       return page;
//     },
//     _paginate: function (page) {
//       var viewData = this._makeViewData(page || this._options.page);
//       this._setCurrentPage(page);
//       this._view.update(viewData);
//     },
//     _makeViewData: function (page) {
//       var viewData = {};
//       var lastPage = this._getLastPage();
//       var currentPageIndex = this._getPageIndex(page);
//       var lastPageListIndex = this._getPageIndex(lastPage);
//       var edges = this._getEdge(page);

//       viewData.leftPageNumber = edges.left;
//       viewData.rightPageNumber = edges.right;

//       viewData.prevMore = currentPageIndex > 1;
//       viewData.nextMore = currentPageIndex < lastPageListIndex;

//       viewData.page = page;
//       viewData.currentPageIndex = page;
//       viewData.lastPage = lastPage;
//       viewData.lastPageListIndex = lastPage;

//       return viewData;
//     },
//     _getEdge: function (page) {
//       var leftPageNumber, rightPageNumber, left;
//       var lastPage = this._getLastPage();
//       var visiblePages = this._options.visiblePages;
//       var currentPageIndex = this._getPageIndex(page);

//       if (this._options.centerAlign) {
//         left = Math.floor(visiblePages / 2);
//         leftPageNumber = Math.max(page - left, 1);
//         rightPageNumber = leftPageNumber + visiblePages - 1;

//         if (rightPageNumber > lastPage) {
//           leftPageNumber = Math.max(lastPage - visiblePages + 1, 1);
//           rightPageNumber = lastPage;
//         }
//       } else {
//         leftPageNumber = (currentPageIndex - 1) * visiblePages + 1;
//         rightPageNumber = currentPageIndex * visiblePages;
//         rightPageNumber = Math.min(rightPageNumber, lastPage);
//       }

//       return {
//         left: leftPageNumber,
//         right: rightPageNumber,
//       };
//     },
//     _onClickHandler: function (buttonType, page) {
//       switch (buttonType) {
//         case 'first':
//           page = 1;
//           break;
//         case 'prev':
//           page = this._getRelativePage('prev');
//           break;
//         case 'next':
//           page = this._getRelativePage('next');
//           break;
//         case 'prevMore':
//           page = this._getMorePageIndex('prev');
//           break;
//         case 'nextMore':
//           page = this._getMorePageIndex('next');
//           break;
//         case 'last':
//           page = this._getLastPage();
//           break;
//         default:
//           if (!page) {
//             return;
//           }
//       }

//       this.movePageTo(page);
//     },
//     reset: function (totalItems) {
//       if (isUndefined(totalItems)) {
//         totalItems = this._options.totalItems;
//       }

//       this._options.totalItems = totalItems;
//       this._paginate(1);
//     },
//     movePageTo: function (targetPage) {
//       targetPage = this._convertToValidPage(targetPage);
//       if (!this.invoke('beforeMove', { page: targetPage })) {
//         return;
//       }

//       this._paginate(targetPage);

//       this.fire('afterMove', { page: targetPage });
//     },
//     setTotalItems: function (itemCount) {
//       this._options.totalItems = itemCount;
//     },
//     setItemsPerPage: function (itemCount) {
//       this._options.itemsPerPage = itemCount;
//     },
//     getCurrentPage: function () {
//       return this._currentPage || this._options.page;
//     },
//   }
// );

// CustomEvents.mixin(Pagination);

// module.exports = Pagination;
