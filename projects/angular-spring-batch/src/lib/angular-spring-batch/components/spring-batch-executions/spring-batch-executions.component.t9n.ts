import {SpringBatchExecutionStatusT9n} from '../model-t9n/spring-batch-execution-status.t9n';
import {SpringBatchExecutionStatus} from '../../models/spring-batch-execution-status.model';

const ns = 'angularSpringBatch.executions';

export class SpringBatchExecutionsComponentT9n {

  private executionStatusT9n = new SpringBatchExecutionStatusT9n();

  byStatus(status: SpringBatchExecutionStatus): string {
    return this.executionStatusT9n.byStatus(status);
  }

  executionsList = `${ns}.executionsList`;
  refresh = `${ns}.refresh`;
  loadErrorMessage = `${ns}.loadErrorMessage`;
  loadingMessage = `${ns}.loadingMessage`;
  noExecution = `${ns}.noExecution`;
  creationDate = `${ns}.creationDate`;
  startDate = `${ns}.startDate`;
  endDate = `${ns}.endDate`;
  duration = `${ns}.duration`;
  exitCode = `${ns}.exitCode`;
  stopButtonTitle = `${ns}.stopButtonTitle`;
  logsButtonTitle = `${ns}.logsButtonTitle`;
  detailsButtonTitle = `${ns}.detailsButtonTitle`;
  paginationHeader = `${ns}.paginationHeader`;
  paginationFirstPage = `${ns}.paginationFirstPage`;
  paginationPreviousPage = `${ns}.paginationPreviousPage`;
  paginationNextPage = `${ns}.paginationNextPage`;
  paginationLastPage = `${ns}.paginationLastPage`;
}
