$('.tab-menu a').hover(function (e) {
    e.preventDefault()
    $(this).tab('show')
  })