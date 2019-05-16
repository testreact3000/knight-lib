const boardTemplate = require('./lib/board.js');
const board = boardTemplate();
const KnightTemplate = require('./lib/knight.js');
const Knight = KnightTemplate();

function knightPositions(position){
  let knight = new Knight(board.a2i([position])[0]);
  return board.i2a(knight.stepsTo);
};

module.exports = {
	knightPositions,
	KnightTemplate,
        board

};




