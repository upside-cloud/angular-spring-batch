import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { SpringBatchExecution } from '../../models/spring-batch-execution.model';
import { SpringBatch } from '../../models/spring-batch.model';
import { SpringBatchExecutionsComponent } from '../spring-batch-executions/spring-batch-executions.component';
import {SpringBatchExecutionStatusT9n} from '../model-t9n/spring-batch-execution-status.t9n';

@Component({
  selector: 'spring-batch-details',
  styleUrls: ['./spring-batch-details.component.scss'],
  templateUrl: './spring-batch-details.component.html',
})
export class SpringBatchDetailsComponent {

  readonly t9n = new SpringBatchExecutionStatusT9n();

  @Output()
  executionChange = new EventEmitter<SpringBatchExecution>();

  @ViewChild(SpringBatchExecutionsComponent)
  executionsComponent: SpringBatchExecutionsComponent;

  @Input()
  job: SpringBatch;

  onStart(execution: SpringBatchExecution) {
    this.refresh();
    this.executionChange.emit(execution);
  }

  onStop(execution: SpringBatchExecution) {
    this.executionChange.emit(execution);
  }

  refresh() {
    if (this.executionsComponent) {
      this.executionsComponent.refresh();
    }
  }

}
