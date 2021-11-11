import {Component, EventEmitter, Input, Output} from '@angular/core';
import {finalize} from 'rxjs/operators';
import {createAutoCorrectedDatePipe} from 'text-mask-addons';
import {SpringBatchExecutionParameter} from '../../models/spring-batch-execution-parameter.model';
import {SpringBatchExecution} from '../../models/spring-batch-execution.model';
import {SpringBatch} from '../../models/spring-batch.model';
import {SpringBatchService} from '../../services/spring-batch.service';

@Component({
  selector: 'spring-batch-execution-form',
  styleUrls: ['./spring-batch-execution-form.component.scss'],
  templateUrl: './spring-batch-execution-form.component.html',
})
export class SpringBatchExecutionFormComponent {

  private _job: SpringBatch;

  readonly dateTextMask = {
    keepCharPositions: true,
    mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, ':', /\d/, /\d/, ':', /\d/, /\d/],
    pipe: createAutoCorrectedDatePipe('dd/mm/yyyy HH:MM:SS'),
  };

  execution = new SpringBatchExecution();
  loading = false;

  @Output()
  executionStarted = new EventEmitter<SpringBatchExecution>();

  visible = false;

  get job() {
    return this._job;
  }

  @Input()
  set job(job: SpringBatch) {
    this._job = job;
    this.clear();
  }

  get disabled() {
    return this.loading || !this.job || this.job.parameters.find((parameter) => parameter.invalid) !== undefined;
  }

  constructor(private springBatchService: SpringBatchService) {
  }

  clear() {
    this.execution = new SpringBatchExecution();
    if (this.job) {
      this.execution.jobName = this.job.name;
      this.job.parameters.forEach((parameter) => {
        this.execution.parameters.push(new SpringBatchExecutionParameter(parameter.name, parameter.type, parameter.defaultValue));
      });
    }
  }

  submit() {
    this.loading = true;
    this.springBatchService.start(this.execution).pipe(
      finalize(() => this.loading = false))
      .subscribe((item) => {
        this.executionStarted.emit(item);
      });
    this.clear();
  }

  toggle() {
    this.visible = !this.visible;
  }
}
