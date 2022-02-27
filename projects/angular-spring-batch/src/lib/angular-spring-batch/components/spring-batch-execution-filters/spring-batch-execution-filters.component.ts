import { Component, EventEmitter, Input, Output } from '@angular/core';
import { moment } from '../../misc/spring-batch-moment';
import { SpringBatchExecutionFilters } from '../../models/spring-batch-execution-filters.model';
import { SpringBatchExecutionStatus } from '../../models/spring-batch-execution-status.model';
import { SpringBatchExecutionFiltersComponentT9n } from './spring-batch-execution-filters.component.t9n';

@Component({
  selector: 'spring-batch-execution-filters',
  styleUrls: ['./spring-batch-execution-filters.component.scss'],
  templateUrl: './spring-batch-execution-filters.component.html'
})
export class SpringBatchExecutionFiltersComponent {

  readonly t9n = new SpringBatchExecutionFiltersComponentT9n();

  private _filters: SpringBatchExecutionFilters;

  beginDateInputValue: string;

  readonly dateMask = 'd0/M0/0000';

  endDateInputValue: string;

  @Output()
  filtersChange = new EventEmitter<SpringBatchExecutionFilters>();

  statuses = SpringBatchExecutionStatus.values;

  get filters() {
    return this._filters;
  }

  @Input()
  set filters(value: SpringBatchExecutionFilters) {
    this._filters = value;
    this.beginDateInputValue = this.dateInputValue(this.filters.beginDate);
    this.endDateInputValue = this.dateInputValue(this.filters.endDate);
  }

  private dateInputValue(date: Date) {
    return date ? moment(date).format('DD/MM/YYYY') : '';
  }

  private parseDate(value: string) {
    const m = moment(value, 'DD/MM/YYYY', true);
    return m.isValid() ? m.toDate() : null;
  }

  onBeginDateChange(value: string) {
    const date = this.parseDate(value);
    if (date !== this.filters.beginDate) {
      this.filters.beginDate = date;
      this.filtersChange.emit(this.filters);
    }
  }

  onEndDateChange(value: string) {
    const date = this.parseDate(value);
    if (date !== this.filters.endDate) {
      this.filters.endDate = date;
      this.filtersChange.emit(this.filters);
    }
  }

  onStatusChange(status: SpringBatchExecutionStatus) {
    this.filters.status = status;
    this.filtersChange.emit(this.filters);
  }

}
