import { refs } from './common/refs';
import onClickTrending from './handlers/on-click-trending';
import onClickCategory from './handlers/on-click-category-list';
import loadSidebarCategory from './handlers/load-sigebar-category';
import { OnClickSidebar } from './handlers/on-click-sidebar';
import loadMostWatchedList from './handlers/load-most-watched-list';

if (refs.pageTitle.textContent !== 'New video')
  refs.pageTitle.textContent = 'New video';

addEventListener('DOMContentLoaded', loadSidebarCategory, { once: true });
addEventListener('DOMContentLoaded', loadMostWatchedList);
refs.logo.addEventListener('click', loadMostWatchedList);
refs.trending.addEventListener('click', onClickTrending);
refs.categoryList.addEventListener('click', onClickCategory);
refs.sidebar.addEventListener('click', OnClickSidebar);
