function getConfig() {
  var id = '1ir1hbWJcE2GIVd-j7TuXTeKzirPjbcnXYvu4fzNqKj8'; // スプレットシートのidを入力する
  var data = SpreadsheetApp.openById(id).getSheetByName('config').getDataRange().getValues();
  var result = {};
  for (var i = 0; i < data.length; i++) {
    result[data[i][0]] = data[i][1];
  } 
  return result;
}
