
function handleSelectionChange() {
  var selection = window.getSelection();
  if (selection && selection.rangeCount > 0) {
      var selectedText = selection.toString();

      // Ngecek buat teks yang dipilih itu kosong
      if (selectedText.trim() !== '') {
          // Bakal ngeganti warna yang ke select
          document('foreColor', false, 'white');
          document('backColor', false, 'black');
      }
  }
}

