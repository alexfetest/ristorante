import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

export class Column {
  id: string;
  type: string;
  title: string;
}

@Component({
  selector: 'basic-table',
  templateUrl: './basicTable.html',
  styleUrls: ['./basicTable.scss']
})
export class BasicTableComponent {
  @Input() title: string;
  @Input() isSearchable?: boolean;
  @Input() columns: Column[];
  @Input() rows: {}[];

  displayRows: {}[] = [];

  searchInput: FormControl = new FormControl();
  searchInputSubcription: Subscription;

  private sortBy: { columnId: string; direction: string } = { columnId: '', direction: '' };

  ngOnInit() {
    this.displayRows = [...this.rows];
    this.searchInputSubcription = this.searchInput.valueChanges.subscribe(this.filterRows);
  }

  ngOnDestroy() {
    this.searchInputSubcription.unsubscribe();
  }

  sortRowsBy(columnId, toggle?) {
    if (!toggle) {
      this.displayRows = this.sortRows([...this.displayRows], columnId, this.sortBy.direction);
      return;
    }

    if (!this.sortBy || this.sortBy.columnId !== columnId) {
      this.sortBy = {
        columnId: columnId,
        direction: 'asc'
      }

      this.displayRows = this.sortRows([...this.displayRows], columnId, this.sortBy.direction);
      return;
    }

    this.sortBy.direction = this.sortBy.direction === 'asc' ?
      this.sortBy.direction = 'desc' :
      this.sortBy.direction = 'asc';

    this.displayRows = this.sortRows([...this.displayRows], columnId, this.sortBy.direction);
  }

  private sortRows(rows, property, direction) {
    return rows.sort((rowA, rowB) => {
      if (rowA[property] < rowB[property]) {
        return direction === 'asc' ? -1 : 1;
      }

      if (rowA[property] > rowB[property]) {
        return direction === 'asc' ? 1 : -1;
      }

      return 0;
    });
  }

  private filterRows = (inputText) => {
    if (!inputText) {
      this.displayRows = this.rows;
      if (this.sortBy.columnId) {
        this.sortRowsBy(this.sortBy.columnId)
      }
      return;
    }

    this.displayRows = this.rows
      .filter(row =>
        this.columns.find(column =>
          String(row[column.id]).toLowerCase().search(inputText.toLowerCase()) !== -1));

    if (this.sortBy.columnId) {
      this.sortRowsBy(this.sortBy.columnId)
    }
  }
}
