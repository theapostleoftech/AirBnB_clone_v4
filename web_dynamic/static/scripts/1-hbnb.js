/*
  Listen for changes on each INPUT checkbox tag
*/

$(document).ready(() => {
  const checkBoxDict = {};
  $('input[type=checkbox]').on('click', function () {
    if ($(this).prop('checked') === true) {
      checkBoxDict[$(this).attr('data-id')] = $(this).attr('data-name');
    } else if ($(this).prop('checked') === false) {
      delete checkBoxDict[$(this).attr('data-id')];
    }

    if (Object.keys(checkBoxDict).length >= 1) {
      $('.amenities H4').html(Object.values(checkBoxDict).join(', ') + '&nbsp;');
    } else {
      $('.amenities H4').html('&nbsp;');
    }
  });

  /* Add css */
  $('.amenities ul li input[type="checkbox"]').css({ margin: '0px 10px 0px 0px', padding: '10px 0 0 0' });
  $('.amenities h4').css({ height: '17px', 'max-width': '250px', 'text-overflow': 'ellipsis', 'white-space': 'nowrap', overflow: 'hidden' });
});
