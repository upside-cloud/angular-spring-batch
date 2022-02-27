import { Component, Input, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { SpringBatchExecutionStep } from '../../models/spring-batch-execution-step.model';
import { SpringBatchExecution } from '../../models/spring-batch-execution.model';
import { SpringBatchService } from '../../services/spring-batch.service';
import {SpringBatchExecutionDetailsModalComponentT9n} from './spring-batch-execution-details-modal.component.t9n';

@Component({
  selector: 'spring-batch-execution-details-modal',
  styleUrls: ['./spring-batch-execution-details-modal.component.scss'],
  templateUrl: './spring-batch-execution-details-modal.component.html',
})
export class SpringBatchExecutionDetailsModalComponent implements OnInit {

  @Input()
  execution: SpringBatchExecution;

  readonly t9n = new SpringBatchExecutionDetailsModalComponentT9n();

  loadError = false;
  loading = false;
  steps: SpringBatchExecutionStep[];

  constructor(private springBatchService: SpringBatchService) {
  }

  close() {
  }

  loadSteps() {
    this.loadError = false;
    this.loading = true;
    this.springBatchService.findAllJobExecutionSteps(this.execution).pipe(
      catchError(error => {
        this.loadError = true;
        return throwError(error);
      }),
      finalize(() => this.loading = false),
    ).subscribe(steps => {
      this.steps = steps;
    });
  }

  ngOnInit() {
    this.loadSteps();
  }

  refresh() {
    this.loadSteps();
  }

}
