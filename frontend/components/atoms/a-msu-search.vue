<template>
  <div id="search" role="search" class="js-initial-load">
    <form
      action="//u.search.msu.edu/index.php"
      method="get"
    >
      <input name="sitesearch" type="hidden" value="msu.edu">
      <label class="show-for-sr" for="q">Search</label>
      <input id="q" name="q" placeholder="Search...">
      <button id="btn_search" type="submit" value="search">
        <span class="show-for-sr">Search</span>
      </button>
    </form>
  </div>
</template>
