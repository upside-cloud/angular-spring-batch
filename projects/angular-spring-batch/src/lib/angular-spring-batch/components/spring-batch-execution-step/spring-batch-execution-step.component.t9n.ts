import {SpringBatchExecutionStatusT9n} from '../model-t9n/spring-batch-execution-status.t9n';
import {SpringBatchExecutionStatus} from '../../models/spring-batch-execution-status.model';

const ns = 'angularSpringBatch.executionStep';

export class SpringBatchExecutionStepComponentT9n {
  private executionStatusT9n = new SpringBatchExecutionStatusT9n();

  byStatus(status: SpringBatchExecutionStatus): string {
    return this.executionStatusT9n.byStatus(status);
  }

  start = `${ns}.start`;
  end = `${ns}.end`;
  duration = `${ns}.duration`;
  exitCode = `${ns}.exitCode`;
  exitMessage = `${ns}.exitMessage`;
  commitCount = `${ns}.commitCount`;
  writeCount = `${ns}.writeCount`;
  writeSkipCount = `${ns}.writeSkipCount`;
  readCount = `${ns}.readCount`;
  readSkipCount = `${ns}.readSkipCount`;
  filterCount = `${ns}.filterCount`;
  rollbackCount = `${ns}.rollbackCount`;
  processSkipCount = `${ns}.processSkipCount`;
}
