import { TestBed, inject } from '@angular/core/testing';
import { SudokuService } from './sudoku.service';
import { sudokuTextMock, sudokuArrayMock, sudokuTextMockIncorrect, sudokuArrayMockIncorrect } from './mocks';

describe('SudokuService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [{ provide: SudokuService, useClass: SudokuService }]
  }));

  it('should be defined', inject([SudokuService], (sudokuService: SudokuService) => {
    expect(sudokuService).toBeTruthy();
  }));

  it('isSodukoSolution: should return true given a correct sudoku solution',
    inject([SudokuService], (sudokuService: SudokuService) => {
      expect(sudokuService.isSodukoSolution(sudokuArrayMock)).toEqual(true);
    }));

  it('isSodukoSolution: should return false given an incorrect sudoku solution',
    inject([SudokuService], (sudokuService: SudokuService) => {
      expect(sudokuService.isSodukoSolution(sudokuArrayMockIncorrect)).toEqual(false);
    }));

  it('isSodukoSolutionFromText: should return true given a correct TEXT sudoku solution',
    inject([SudokuService], (sudokuService: SudokuService) => {
      expect(sudokuService.isSodukoSolutionFromText(sudokuTextMock)).toEqual(true);
    }));

  it('isSodukoSolutionFromText: should return false given an incorrect TEXT sudoku solution',
    inject([SudokuService], (sudokuService: SudokuService) => {
      expect(sudokuService.isSodukoSolutionFromText(sudokuTextMock)).toEqual(true);
    }));

  it('hasAllDigits: should return true for an array with all digits from 1-9',
    inject([SudokuService], (sudokuService: SudokuService) => {
      expect(sudokuService.hasAllDigits([1,2,3,4,5,6,7,8,9])).toEqual(true);
    }));

  it('hasAllDigits: should return false for an array lacking all digits from 1-9',
    inject([SudokuService], (sudokuService: SudokuService) => {
      expect(sudokuService.hasAllDigits([2,3,4,5,6,7,8,9])).toEqual(false);
    }));

  it('allSetsHaveAllDigits: should return true for an array of arrays that have all digits from 1-9',
    inject([SudokuService], (sudokuService: SudokuService) => {
      expect(sudokuService.allSetsHaveAllDigits(
        [[1,2,3,4,5,6,7,8,9],
        [9,8,7,6,5,4,3,2,1]]
      ))
      .toEqual(true);
    }));

  it('allSetsHaveAllDigits: should return false for an array of arrays where any array lacks all digits from 1-9',
    inject([SudokuService], (sudokuService: SudokuService) => {
      expect(sudokuService.allSetsHaveAllDigits(
        [[1,2,3,4,5,6,7,8,9],
        [9,8,7,6,5,4,3,2,2]]
      ))
      .toEqual(false);
    }));

  it('buildColumnSets: should break an array of arrays into an array of vertical/column values (essentially turning an array sideways)',
    inject([SudokuService], (sudokuService: SudokuService) => {
      expect(sudokuService.buildColumnSets([
        [1,4,7],
        [2,5,8],
        [3,6,9]
      ]))
      .toEqual([
        [1,2,3],
        [4,5,6],
        [7,8,9]
      ]);
    }));

  it('buildBlockSets: should convert an array of arrays (row of cells) into an array containing the 3x3 sudoku "blocks"',
    inject([SudokuService], (sudokuService: SudokuService) => {
      expect(sudokuService.buildBlockSets([
        [1,2,3,1,2,3,1,2,3],
        [4,5,6,4,5,6,4,5,6],
        [7,8,9,7,8,9,7,8,9]
      ]))
      .toEqual([
        [1,2,3,4,5,6,7,8,9],
        [1,2,3,4,5,6,7,8,9],
        [1,2,3,4,5,6,7,8,9],
      ]);
    }));
});
