import { Component, ViewEncapsulation } from '@angular/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'ssc-design-challenge';
  status: boolean = false;
  accordion: boolean = true;

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    if (view === 'month') {
      const date = cellDate.getDate();

      return (date === 1 || date === 20) ? 'example-custom-date-class' : '';
    }

    return '';
  }

  columnDefs = [
    { field: 'Fund', flex: 1 },
    { field: 'Pending Actions', flex: 1 },
    { field: 'Record Info', flex: 1 },
    { field: 'MTD Book P&L', flex: 1 },
    { field: 'YTD Book P&L', flex: 1 },
    { field: 'End Book NAV', pinned: 'right' }
  ];

  defaultColDef = {
    editable: true,
    filter: 'agTextColumnFilter'
  };

  headerHeight = 40;

  rowData = [
      { 'Fund': 'ARYMFLP', 'Pending Actions': 'Icon', 'Record Info': '148,579,476', 'MTD Book P&L': '148,579,476', 'YTD Book P&L': '148,579,476', 'End Book NAV': '255,080,079' },
      { 'Fund': 'ARYEHUSLP', 'Pending Actions': 'Icon', 'Record Info': '148,579,476', 'MTD Book P&L': '148,579,476', 'YTD Book P&L': '148,579,476', 'End Book NAV': '255,080,079' },
      { 'Fund': 'ARYMFLP', 'Pending Actions': 'Icon', 'Record Info': '148,579,476', 'MTD Book P&L': '148,579,476', 'YTD Book P&L': '148,579,476', 'End Book NAV': '255,080,079' },
      { 'Fund': 'ARYMCLP', 'Pending Actions': 'Icon', 'Record Info': '148,579,476', 'MTD Book P&L': '148,579,476', 'YTD Book P&L': '148,579,476', 'End Book NAV': '255,080,079' },
      { 'Fund': 'ARYMFLP', 'Pending Actions': 'Icon', 'Record Info': '148,579,476', 'MTD Book P&L': '148,579,476', 'YTD Book P&L': '148,579,476', 'End Book NAV': '255,080,079' },
      { 'Fund': 'ARYEHUSLP', 'Pending Actions': 'Icon', 'Record Info': '148,579,476', 'MTD Book P&L': '148,579,476', 'YTD Book P&L': '148,579,476', 'End Book NAV': '255,080,079' },
      { 'Fund': 'ARYMFLP', 'Pending Actions': 'Icon', 'Record Info': '148,579,476', 'MTD Book P&L': '148,579,476', 'YTD Book P&L': '148,579,476', 'End Book NAV': '255,080,079' },
      { 'Fund': 'ARYMCLP', 'Pending Actions': 'Icon', 'Record Info': '148,579,476', 'MTD Book P&L': '148,579,476', 'YTD Book P&L': '148,579,476', 'End Book NAV': '255,080,079' },
      { 'Fund': 'ARYMFLP', 'Pending Actions': 'Icon', 'Record Info': '148,579,476', 'MTD Book P&L': '148,579,476', 'YTD Book P&L': '148,579,476', 'End Book NAV': '255,080,079' },
      { 'Fund': 'ARYEHUSLP', 'Pending Actions': 'Icon', 'Record Info': '148,579,476', 'MTD Book P&L': '148,579,476', 'YTD Book P&L': '148,579,476', 'End Book NAV': '255,080,079' },
      { 'Fund': 'ARYMFLP', 'Pending Actions': 'Icon', 'Record Info': '148,579,476', 'MTD Book P&L': '148,579,476', 'YTD Book P&L': '148,579,476', 'End Book NAV': '255,080,079' },
      { 'Fund': 'ARYMCLP', 'Pending Actions': 'Icon', 'Record Info': '148,579,476', 'MTD Book P&L': '148,579,476', 'YTD Book P&L': '148,579,476', 'End Book NAV': '255,080,079' },
      { 'Fund': 'ARYMFLP', 'Pending Actions': 'Icon', 'Record Info': '148,579,476', 'MTD Book P&L': '148,579,476', 'YTD Book P&L': '148,579,476', 'End Book NAV': '255,080,079' },
      { 'Fund': 'ARYEHUSLP', 'Pending Actions': 'Icon', 'Record Info': '148,579,476', 'MTD Book P&L': '148,579,476', 'YTD Book P&L': '148,579,476', 'End Book NAV': '255,080,079' },
      { 'Fund': 'ARYMFLP', 'Pending Actions': 'Icon', 'Record Info': '148,579,476', 'MTD Book P&L': '148,579,476', 'YTD Book P&L': '148,579,476', 'End Book NAV': '255,080,079' },
      { 'Fund': 'ARYMCLP', 'Pending Actions': 'Icon', 'Record Info': '148,579,476', 'MTD Book P&L': '148,579,476', 'YTD Book P&L': '148,579,476', 'End Book NAV': '255,080,079' }
  ];
}
