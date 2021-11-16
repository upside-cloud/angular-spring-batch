import {SpringBatchExecutionStatusT9n} from '../model-t9n/spring-batch-execution-status.t9n';
import {SpringBatchExecutionStatus} from '../../models/spring-batch-execution-status.model';

const ns = 'angularSpringBatch.executionDetailsModal';

export class SpringBatchExecutionDetailsModalComponentT9n {
  private executionStatusT9n = new SpringBatchExecutionStatusT9n();

  byStatus(status: SpringBatchExecutionStatus): string {
    return this.executionStatusT9n.byStatus(status);
  }

  title = `${ns}.title`;
  refreshButtonTitle = `${ns}.refreshButtonTitle`;
  parameters = `${ns}.parameters`;
  staps = `${ns}.steps`;
  loadErrorMessage = `${ns}.loadErrorMessage`;
  loadingMessage = `${ns}.loadingMessage`;
  noStep = `${ns}.noStep`;
  close = `${ns}.close`;
}
