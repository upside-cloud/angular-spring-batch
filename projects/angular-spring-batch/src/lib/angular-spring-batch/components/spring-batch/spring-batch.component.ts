import {Component, ViewChild} from '@angular/core';
import {SpringBatchExecution} from '../../models/spring-batch-execution.model';
import {SpringBatch} from '../../models/spring-batch.model';
import {SpringBatchDetailsComponent} from '../spring-batch-details/spring-batch-details.component';
import {SpringBatchListComponent} from '../spring-batch-list/spring-batch-list.component';
import {SpringBatchComponentT9n} from './spring-batch.component.t9n';

@Component({
  selector: 'spring-batch',
  styleUrls: ['./spring-batch.component.scss'],
  templateUrl: './spring-batch.component.html',
})
export class SpringBatchComponent {

  readonly t9n = new SpringBatchComponentT9n();

  job: SpringBatch;

  @ViewChild(SpringBatchDetailsComponent)
  jobDetailsComponent: SpringBatchDetailsComponent;

  @ViewChild(SpringBatchListComponent)
  jobsListComponent: SpringBatchListComponent;

  currentSearch: string;

  onExecutionChange(execution: SpringBatchExecution) {
    this.jobsListComponent.refreshByJob(execution.jobName);
  }

  onSelect(job: SpringBatch) {
    this.job = job;
  }

  clearSearch() {
    this.currentSearch = null;
    this.search();
  }

  search(query?: string) {
    this.job = null;
    this.jobDetailsComponent.refresh();
    this.jobsListComponent.refreshAllJob(false, query);
  }

}
