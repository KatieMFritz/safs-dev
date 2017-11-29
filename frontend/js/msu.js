$(document).foundation(); // Initialize Zurb Foundation. This needs to be at the top.
(function ($) {
  'use strict'
  /*
  max height for navbar. if the navbar's calculated height is larger
  than this number, the condition for a wrapping navbar is deemed true
  */
  const navBarTarget = 50

  // establish a minimum breakpoint in case the navbar only has a couple of links
  const minNavBarBreakpoint = 700

  const $window = $(window)
  const $btnHamburger = $('#btn-hamburger')
  const $btnHamburgerClose = $('.js-off-canvas-exit') // offcanvas menu content overlay
  const $offCanvasMenu = $('#offcanvas-nav')
  const $offCanvasContent = $('.off-canvas-content')
  const $utilities = $('.template__utilities')
  const $search = $('#search')
  const $searchField = $('input[name="q"]')
  const $siteTitleWrapper = $('#site-title-wrapper')
  const $siteTitle = $('#site-title')
  const $navBar = $('#desktop-nav')
  const $navBarMenuWrapper = $('#main-menu-wrapper')
  const $mainMenu = $('#main-menu')
  const $contextualNavSidebar = $('.contextual-nav__sidebar')
  const $contextualNav = $('.contextual-nav > div')
  const $contextualNavDrawer = $('.contextual-nav__drawer')
  const $contextualNavDrawerToggle = $('.contextual-nav__drawer__link')

  // sticky header on scroll up http://wicky.nillia.ms/headroom.js/
  const stickyHeader = document.getElementsByClassName('template__sticky-header')
  const headroom = new Headroom(stickyHeader[0], {
    offset: 12,
    tolerance: {
      // up: 5;
      down: 5
    },
    classes: {
      // when element is initialised
      initial: 'headroom',
      // when scrolling up
      pinned: 'headroom--pinned',
      // when scrolling down
      unpinned: 'headroom--unpinned',
      // when above offset
      top: 'headroom--top',
      // when below offset
      notTop: 'headroom--not-top',
      // when at bottom of scoll area
      bottom: 'headroom--bottom',
      // when not at bottom of scroll area
      notBottom: 'headroom--not-bottom'
    }
  })
  headroom.init()

  function checkMainNavWrap () {
    let checkAgain
    clearTimeout(checkAgain)
    if ($navBar.find('ul').is(':visible')) {
      toggleMobile()
    } else {
      checkAgain = setTimeout(checkMainNavWrap, 50)
    }
  }

  // toggle hiding/showing desktop nav and search vs mobile
  function toggleMobile () {
    console.log('toggling')
    let navBarHeight = $navBar.outerHeight()
    console.log(navBarHeight)
    if (navBarHeight > navBarTarget || $winWidth <= minNavBarBreakpoint) {
      console.log('wrapping')
      $([$search[0], $btnHamburger[0], $navBar[0], $siteTitleWrapper[0]]).addClass('mobile')
      //console.log('main navbar wrapping');
    } else {
      console.log('not wrapping')
      $([$search[0], $btnHamburger[0], $navBar[0], $siteTitleWrapper[0]]).removeClass('mobile')
      //console.log('main navbar not wrapping');
      //console.log(navBarHeight);
      if ($offCanvasMenu.hasClass('is-open')) {
        $btnHamburger.click()
      }
    }
    // contextual right nav functionality for desktop and mobile
    if ($contextualNav.length && $contextualNavDrawer.is(':visible')) {
      $contextualNav.appendTo($contextualNavDrawer)
    } else {
      $contextualNav.appendTo($contextualNavSidebar)
      $contextualNavDrawerToggle.removeClass('active')
      $('.contextual-nav__sidebar nav').removeAttr('style')
    }
  }

  // toggle hamburger icon state
  $btnHamburger.click(function () {
    let $this = $(this)
    $('html,body').scrollTop(0)// fixes quirkiness with transition from sticky header to off canvas
    $this.toggleClass('is-active')
    // dynamically move the unordered list from the main nav to the off canvas
    if ($this.hasClass('is-active')) { // open event
      headroom.destroy() // disable sticky header when offcanvas is open
      $offCanvasMenu.attr('aria-hidden', 'false')
      $offCanvasContent.attr('aria-hidden', 'true')
      // move search, site title, and menu into offcanvas menu
      $([$search[0], $siteTitle[0], $mainMenu[0]]).appendTo($offCanvasMenu)
      setTimeout(() => {
        $searchField.focus()
      }, 200)
    } else { // close event
      resetMasthead()
    }
  })

  // if hamburger menu is open and content area is clicked, close menu
  $btnHamburgerClose.on('click', function (e) {
    $btnHamburger.removeClass('is-active')
    resetMasthead()
    e.preventDefault()
  })

  $window.keyup(function (e) {
    let code = (e.keyCode ? e.keyCode : e.which)
    if (code === 9 && $btnHamburger.hasClass('is-active')) {
      $('.off-canvas-content').focusin(function () {
        if ($btnHamburger.hasClass('is-active')) {
          $btnHamburgerClose.click()
        }
      })
    } else if (code === 27 && $btnHamburger.hasClass('is-active')) {
      if ($btnHamburger.hasClass('is-active')) {
        $btnHamburgerClose.click()
      }
    }
  })

  function resetMasthead () { // put things back
    $siteTitle.appendTo($siteTitleWrapper) // move site title back
    $mainMenu.appendTo($navBarMenuWrapper) // move menu back to desktop nav bar
    $search.appendTo($utilities) // move search back
    $([$search[0], $btnHamburger[0], $navBar[0], $siteTitleWrapper[0]]).addClass('mobile')
    headroom.init() // re-enable sticky header when masthead is closed
    $offCanvasMenu.attr('aria-hidden', 'true')
    $offCanvasContent.attr('aria-hidden', 'false')
  }

  function showElms () {
    $('.js-initial-load').each(function () {
      $(this).removeClass('js-initial-load')
    })
  }

  $contextualNavDrawerToggle.on('click', function (e) {
    let $this = $(this)
    $this.toggleClass('active')
    if ($this.hasClass('active')) {
      $('.contextual-nav__drawer nav').slideDown()
    } else {
      $('.contextual-nav__drawer nav').slideUp(300)
    }
    if ($contextualNavDrawer.is(':visible')) {
      e.preventDefault()
    }
  })

  /* Commented out code below may be needed
  outside of the Cascade CMS in order for
  contextual navigation accordion to work */

  // add class to list items that have children
  // $('.contextual-nav ul > li').has('> ul').each(function() {
  //     var $this = $(this);
  //     $this.addClass('has-children');
  // });

  // expand accordion tree to see current current page's on state
  // $('.contextual-nav').find('a.current').parents('li').each(function() {
  //     var $this = $(this)
  //     if ($this.attr('aria-expanded')) {
  //         $this.attr('aria-expanded'; 'true').parents('ul').show();
  //         $this.attr('aria-expanded'; 'true').find('> ul').show();
  //     }
  // });

  // render the parent accordion node for each level as clickable
  // $('.contextual-nav .is-accordion-submenu-parent > a').on('click'; function() {
  //     var parentLink = $(this).attr('href');
  //     location.href = parentLink;
  // });

  let $winWidth = $window.width()
  // triggering the hamburger after checking for width or navbar wrapping
  $(document).ready(function () {
    let waitForRender = setTimeout(() => {
      $.when(checkMainNavWrap()).done(() => {
        showElms() // unhide elemnts after elements have been relocated
        clearTimeout(waitForRender)
      })
    }, 100)
    // jquery-responsive-tables
    $.responsiveTables()
    // foundaiton-datepicker
    $(function () {
      $('.dp').fdatepicker({
        format: 'mm-dd-yyyy',
        disableDblClickSelection: true,
        leftArrow: '<<',
        rightArrow: '>>',
        closeIcon: 'X',
        closeButton: false
      })
    })
  })

  // triggering the hamburger menu on resize
  $window.resize(function () {
    if ($window.width() !== $winWidth) {
      $winWidth = $window.width()
      toggleMobile()
    }
  })

  $window.on('load', function () {
    // reflow equalized elements after content is fully rendered
    let equiPromoThree = $('.promo--3-up[data-equalizer="true"]')
    if (equiPromoThree.length) {
      let reflowPromoThree = new Foundation.Equalizer(equiPromoThree)
      reflowPromoThree.applyHeight()
    }
    let equiPromoFour = $('.promo--4-up[data-equalizer="true"]')
    if (equiPromoFour.length) {
      let reflowPromoFour = new Foundation.Equalizer(equiPromoFour)
      reflowPromoFour.applyHeight()
    }
    let equiMegaFooter = $('.footer__mega').find('.row[data-equalizer="true"]')
    if (equiMegaFooter.length) {
      let reflowMegaFooter = new Foundation.Equalizer(equiMegaFooter)
      reflowMegaFooter.applyHeight()
    }
  })

  if ($('#directory-index').length > 0) { // is there a directory?
    const $directoryIndex = $('#directory-index')
    const $directoryFilters = $('.directory nav')
    const $resetFilterCategories = $('#reset-filter-categories')
    const $dropDowns = $('.filter-category')
    let firstDirectoryCategory

    $directoryFilters.find('form').submit(function (e) {
      e.preventDefault()
    })

    // add data-name attribute to each person container
    $('.column-block').each(function () {
      // format as LastnameMiddlenameFirstname
      let firstName = $(this).find('.first-name').text().replace(/[\W_]+/g, '')
      let middleName = $(this).find('.middle-name').text().replace(/[\W_]+/g, '')
      let lastNameSuf = $(this).find('.last-name').text().trim().split(',')[0]
      let lastName = lastNameSuf.replace(/[\W_]+/g, '')
      let fullName = lastName + middleName + firstName
      $(this).attr('data-name', fullName)
    })

    $(window).load(function () {
      firstDirectoryCategory = getAllUrlParams().cat1
      if (location.search && firstDirectoryCategory) {
        filterItems(firstDirectoryCategory)
      } else {
        $directoryIndex.find('.column-block').sort(sortItems).prependTo($directoryIndex)
        $directoryIndex.show()
      }
    })

    // clear directory filters
    $resetFilterCategories.on('click', function () {
      // reset form
      $directoryFilters.find('form').not(':hidden')[0].reset()

      // re-sort items
      let clearItems = setTimeout(function () {
        filterItems(firstDirectoryCategory)
        $resetFilterCategories.hide()
        clearTimeout(clearItems)
      }, 100)
    })

    // filter functionality
    $directoryFilters.on('change keyup', function () {
      $resetFilterCategories.show()
      filterItems(firstDirectoryCategory)
      checkFields()
    })

    function checkFields () {
      // loop through the dropdowns and check for values
      $dropDowns.each(function (index) {
        // if all, plus the the name search is empty
        if (!$(this).val() && $(this).length === index && !$('#directory-search-box').val()) {
          // hide clear filter button
          $resetFilterCategories.hide()
        } else if ($(this).val()) {
          // escape loop if dropdown has value
          return false
        }
      })
    }

    function filterItems (preFilter) {
      $('.column-block').removeClass('filtered').hide().filter(function () {
        // build regular expresion from name search field
        let regExName = new RegExp($('#directory-search-box').val().trim(), 'ig')

        // cache some things
        let rtnData = $(this).find('li').first().text().match(regExName)
        let component = $(this)

        if ($dropDowns.length > 0) {
          let regEx = []

          // loop through drop downs, get values, and generate regular expression(s) from them
          $dropDowns.each(function (i) {
            if (i === 0 && preFilter) {
              regEx[i] = new RegExp(preFilter, 'ig')
            } else {
              regEx[i] = new RegExp($('#filter-category-' + (i + 1)).val().trim().replace(/[^A-Z0-9]+/ig, '-').toLowerCase(), 'ig')
            }
          })

          // loop through each regular expression and match the directory categories for the return data
          regEx.forEach(function (currentRegEx) {
            rtnData = rtnData && component.find('span').text().replace(/[^A-Z0-9]+/ig, '-').toLowerCase().match(currentRegEx)
          })
        }
        // return the filtered data
        return rtnData
      }).addClass('filtered')

      // add or remove "no results" message as applicable
      if (!$('.column-block').hasClass('filtered')) {
        if ($('#no-results').length === 0) {
          $directoryFilters.append('<div id="no-results">No results found</div>')
        }
      } else {
        $('.filtered').show()
        $('#no-results').remove()
      }
      // call sorting function for filtered items
      $directoryIndex.find('.filtered').sort(sortItems).prependTo($directoryIndex)
      $directoryIndex.show()
    }

    function sortItems (a, b) {
      // sort the filtered data
      return ($(b).data('name')) < ($(a).data('name')) ? 1 : -1
    }

    function getAllUrlParams (url) {
      // get query string from url (optional) or window
      let queryString = url ? url.split('?')[1] : window.location.search.slice(1)

      // we'll store the parameters here
      let obj = {}

      // if query string exists
      if (queryString) {
        // stuff after # is not part of query string, so get rid of it
        queryString = queryString.split('#')[0]

        // split our query string into its component parts
        let arr = queryString.split('&')

        for (let i = 0; i < arr.length; i++) {
          // separate the keys and the values
          let a = arr[i].split('=')

          // in case params look like: list[]=thing1&list[]=thing2
          let paramNum;
          let paramName = a[0].replace(/\[\d*\]/, function (v) {
            paramNum = v.slice(1, -1)
            return ''
          })

          // set parameter value (use 'true' if empty)
          let paramValue = typeof (a[1]) === 'undefined' ? true : a[1]

          // (optional) keep case consistent
          paramName = paramName.toLowerCase()
          paramValue = paramValue.toLowerCase()

          // if parameter name already exists
          if (obj[paramName]) {
            // convert value to array (if still string)
            if (typeof obj[paramName] === 'string') {
              obj[paramName] = [obj[paramName]]
            }
            // if no array index number specified...
            if (typeof paramNum === 'undefined') {
              // put the value on the end of the array
              obj[paramName].push(paramValue)
            }
            // if array index number specified...
            else {
              // put the value at that index number
              obj[paramName][paramNum] = paramValue
            }
          }
          // if param name doesn't exist yet, set it
          else {
            obj[paramName] = paramValue
          }
        }
      }
      return obj
    }
  }
})(jQuery)

// browser-update.org
var $buoop = { vs: { i: 10, f: -4, o: -4, s: 8, c: -4 }, unsecure: true, api: 4 }
function $buo_f () {
  var e = document.createElement('script')
  e.src = '//browser-update.org/update.min.js'
  document.body.appendChild(e)
}
try { document.addEventListener('DOMContentLoaded', $buo_f, false) } catch (e) { window.attachEvent('onload', $buo_f) }
