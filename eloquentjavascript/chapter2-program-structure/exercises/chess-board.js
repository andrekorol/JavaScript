function even(i) {
  if (i % 2 === 0) {
    return true;
  }
  else {
    return false;
  }
}
size = 8;
chessBoard = "";
for (i = 0; i < size; i++) {
  for (j = 0; j < size; j++) {
    if (even(i + j)) {
      chessBoard += ' ';
    }
    else {
      chessBoard += '#';
    }
  }
  chessBoard += '\n';
}

console.log(chessBoard);
