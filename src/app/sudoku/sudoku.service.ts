import { Injectable } from '@angular/core';

@Injectable()
export class SudokuService {
  isSodukoSolution(solution: number[][]) {
    return this.allSetsHaveAllDigits([
      ...solution, // rows
      ...this.buildColumnSets(solution), // columns
      ...this.buildBlockSets(solution) // blocks
    ])
  }

  isSodukoSolutionFromText(solution: string) {
    return this.isSodukoSolution(
      solution.split('\n').map(row => row.split('').map(cell => Number(cell)))
    );
  }

  buildBlockSets(sudokuInput: number[][]) {
    return sudokuInput.reduce((memo: number[][], sudokuRow: number[], sudokuRowIndex: number) => {
      // multiples of 3 start new blocks
      if (sudokuRowIndex % 3 === 0) {
        return memo = [...memo, sudokuRow.slice(0,3), sudokuRow.slice(3,6), sudokuRow.slice(6,9)]
      }

      return memo = [
        ...memo.slice(0, memo.length-3),
        [...memo[memo.length-3], ...sudokuRow.slice(0,3)],
        [...memo[memo.length-2], ...sudokuRow.slice(3,6)],
        [...memo[memo.length-1], ...sudokuRow.slice(6,9)]
      ];
    }, []);
  }

  buildColumnSets(sudokuInput: number[][]): number[][] {
    return sudokuInput.reduce((memo: any, sudokuRow) => {
      if (!memo.length) {
        return memo = sudokuRow.map(item => [item]);
      }

      return memo = memo.map((set, index) => [...set, sudokuRow[index]]);
    }, []);
  }

  allSetsHaveAllDigits(sets: number[][]): boolean {
    return !sets.find(set => !this.hasAllDigits(set));
  }

  hasAllDigits(set: number[]): boolean {
    const allDigits = [1,2,3,4,5,6,7,8,9];
    return allDigits.filter(digit => set.indexOf(digit) !== -1).length === 9;
  }
}