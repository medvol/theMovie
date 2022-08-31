// const selectWrapper = () => document.getElementById('.my-select');

export function createListSelector(wrap) {
  const markup = `<ul class="select_list" data-selector>
  <li class="select_item"><button class="select-btn" type="button">add to watched</button></li>
  <li class="select_item"><button class="select-btn" type="button">remove from queue</button></li>
</ul>`;

  wrap.insertAdjacentHTML('beforeend', markup);
}
