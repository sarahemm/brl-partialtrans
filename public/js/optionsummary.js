$( document ).ready(function() {
  $( "input[type='checkbox']" ).change(function() {
    fillSelectedOptionsBox();
  });
});

function fillSelectedOptionsBox() {
  var checkedVals = $("input[type='checkbox']:checked").map(function() {
    return this.value;
  }).get();
  $("#selected_options").val(checkedVals.join(" "));
}
