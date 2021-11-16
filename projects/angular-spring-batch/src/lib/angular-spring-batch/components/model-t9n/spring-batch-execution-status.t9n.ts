import {SpringBatchExecutionStatus} from '../../models/spring-batch-execution-status.model';

export class SpringBatchExecutionStatusT9n {
  ABANDONED: `angularSpringBatch.ExecutionStatus.ABANDONED`;
  COMPLETED: `angularSpringBatch.ExecutionStatus.COMPLETED`;
  FAILED: `angularSpringBatch.ExecutionStatus.FAILED`;
  STARTED: `angularSpringBatch.ExecutionStatus.executeJob`;
  STARTING: `angularSpringBatch.ExecutionStatus.STARTING`;
  STOPPED: `angularSpringBatch.ExecutionStatus.STOPPED`;
  STOPPING: `angularSpringBatch.ExecutionStatus.STOPPING`;
  UNKNOWN: `angularSpringBatch.ExecutionStatus.UNKNOWN`;

  allStates: `angularSpringBatch.ExecutionStatus.allStates`;

  byStatus(status: SpringBatchExecutionStatus): string {
    return `angularSpringBatch.ExecutionStatus.${status.name}`;
  }
}
