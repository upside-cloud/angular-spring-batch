import {SpringBatchExecutionStatusT9n} from '../model-t9n/spring-batch-execution-status.t9n';
import {SpringBatchExecutionStatus} from '../../models/spring-batch-execution-status.model';

export class SpringBatchExecutionFiltersComponentT9n {
  private executionStatusT9n = new SpringBatchExecutionStatusT9n();

  readonly alLStates = `angularSpringBatch.executionFilters.allStates`;

  byStatus(status: SpringBatchExecutionStatus): string {
    return this.executionStatusT9n.byStatus(status);
  }

  readonly fromDate = `angularSpringBatch.executionFilters.fromDate`;
  readonly toDate = `angularSpringBatch.executionFilters.toDate`;
  readonly datePlaceholder = `angularSpringBatch.executionFilters.datePlaceholder`;
}
