/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/gameState.js
class GameState {
  constructor() {
    this.score = 0;
    this.miss = 0;
  }
}
;// CONCATENATED MODULE: ./src/js/board.js

class Board {
  constructor(cells) {
    this.cells = cells;
    this.gameState = new GameState();
    this.interval = null;
    this.onClick = this.onClick.bind(this);
    this.cells.forEach(element => {
      element.addEventListener('click', this.onClick);
    });
  }
  deleteActiveClass() {
    const item = this.cells.filter(el => el.classList.contains('cell_active'))[0];
    if (item) item.classList.remove('cell_active');
  }
  addActiveClass() {
    const randomCell = Math.floor(Math.random() * this.cells.length);
    const item = this.cells[randomCell];
    item.classList.add('cell_active');
  }
  moveGoblin() {
    this.interval = setInterval(() => {
      this.deleteActiveClass();
      this.addActiveClass();
    }, 1000);
  }
  restart() {
    clearInterval(this.interval);
    this.gameState.score = 0;
    this.gameState.miss = 0;
    this.showMiss();
    this.showScore();
    this.moveGoblin();
  }
  showScore() {
    document.querySelector('.score_count').textContent = this.gameState.score;
  }
  showMiss() {
    document.querySelector('.miss_count').textContent = this.gameState.miss;
  }
  onClick(e) {
    if (e.target.className === 'cell cell_active') {
      this.gameState.score += 1;
      this.showScore();
      clearInterval(this.interval);
      this.deleteActiveClass();
      this.moveGoblin();
    } else {
      this.gameState.miss += 1;
      this.showMiss();
    }
    if (this.gameState.miss === 5) {
      alert('You loose!'); // eslint-disable-line no-alert
      this.restart();
    }
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

const cells = Array.from(document.querySelectorAll('.cell'));
const board = new Board(cells);
document.addEventListener('DOMContentLoaded', () => {
  board.moveGoblin();
});
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;