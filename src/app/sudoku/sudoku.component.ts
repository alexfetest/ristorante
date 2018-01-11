import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SudokuService } from './sudoku.service';


@Component({
  selector: 'sudoku',
  templateUrl: './sudoku.html',
  styleUrls: ['./sudoku.scss']
})
export class SudokuComponent {
  constructor(private sudokuService: SudokuService) {}

  sudokuInputs = [
    [5,3,4,6,7,8,9,1,2],
    [6,7,2,1,9,5,3,4,8],
    [1,9,8,3,4,2,5,6,7],
    [8,5,9,7,6,1,4,2,3],
    [4,2,6,8,5,3,7,9,1],
    [7,1,3,9,2,4,8,5,6],
    [9,6,1,5,3,7,2,8,4],
    [2,8,7,4,1,9,6,3,5],
    [3,4,5,2,8,6,1,7,9]
  ];

  isSolution: boolean;

  sudokuFormGroup = new FormGroup(
    this.sudokuInputs.reduce((memo, row, rowIndex) => {
      return {
        ...memo,
        ...row.reduce((rowMemo, cell, cellIndex) => {
          return { ...rowMemo, [rowIndex+','+cellIndex]: new FormControl(cell) }
        }, {})
      }
    }, {})
  );

  ngOnInit() {
    this.validateSolution();
  }

  validateSolution() {
    const sudokuSolution = Object.keys(this.sudokuFormGroup.value)
      .reduce((memo, key) => {
        const memoRowKey = key.split(',')[0];
        const memoCellKey = key.split(',')[1];

        if (!memo[memoRowKey]) {
          memo[memoRowKey] = [this.sudokuFormGroup.value[key]];
          return memo;
        }

        memo[memoRowKey] = [...memo[memoRowKey], this.sudokuFormGroup.value[key]];
        return memo;
      }, []);

      this.isSolution = this.sudokuService.isSodukoSolution(sudokuSolution);
  }
}
