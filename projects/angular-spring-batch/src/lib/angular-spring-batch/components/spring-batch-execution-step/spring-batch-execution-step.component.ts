import { Component, Input } from '@angular/core';
import { SpringBatchExecutionStep } from '../../models/spring-batch-execution-step.model';
import {SpringBatchExecutionStepComponentT9n} from './spring-batch-execution-step.component.t9n';

@Component({
  selector: 'spring-batch-execution-step',
  styleUrls: ['./spring-batch-execution-step.component.scss'],
  templateUrl: './spring-batch-execution-step.component.html',
})
export class SpringBatchExecutionStepComponent {

  @Input()
  step: SpringBatchExecutionStep;

  t9n = new SpringBatchExecutionStepComponentT9n();

}
