import * as tl from "azure-pipelines-task-lib/task";

async function run() {
  try {
    const reqIds: string | undefined = tl.getInput('reqIds', true);
    console.log('Configured requirement Ids: ', reqIds);
  } catch (err: any) {
    console.error(err);
    tl.setResult(tl.TaskResult.Failed, err.message);
  }
}

run();