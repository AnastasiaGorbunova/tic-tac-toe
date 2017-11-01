class TicTacToe {
    constructor() {
        this.player = 'x';
        this.field = [[null,null,null], [null,null,null], [null,null,null]];
        this.turns = 0;
    }

    getCurrentPlayerSymbol() {
        return this.player;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex][columnIndex]===null) {
            this.field[rowIndex][columnIndex] = this.player;
            if (this.player === 'x') {
                this.player = 'o';
            }
            else {
                this.player = 'x';
            }
            this.turns++;
        }
        return this;
    }

    isFinished() {
        if (this.getWinner() || this.isDraw()){
            return true;
        }
        else {
            return false;
        }
    }

    getWinner() {
        for (var i = 0; i <= 2; i++) {
            if (this.field[i][0] === this.field[i][1] && this.field[i][1] === this.field[i][2]){
                return this.field[i][0];
            }
            if (this.field[0][i] === this.field[1][i] && this.field[1][i] === this.field[2][i]){
                return this.field[0][i];
            }
        }
        if ((this.field[0][0] === this.field[1][1] && this.field[1][1] === this.field[2][2]) || (this.field[0][2] === this.field[1][1] && this.field[1][1] === this.field[2][0])) {
            return this.field[1][1];
        }
        return null;
    }

    noMoreTurns() {
        if (this.turns === 9) {
            return true;
        }
        else {
            return false;
        }
    }

    isDraw() {
        if (!this.getWinner() && this.noMoreTurns()) {
            return true;
        }
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
