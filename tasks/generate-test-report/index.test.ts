import * as ma from "azure-pipelines-task-lib/mock-answer";
import * as tmrm from "azure-pipelines-task-lib/mock-run"
import * as ttm from 'azure-pipelines-task-lib/mock-test';
import * as path from "path"; 

test('subtraction', async () => {
  let tp = path.join(__dirname, '.', 'success.js');
  let tr: ttm.MockTestRunner = new ttm.MockTestRunner(tp);
  tr.run();

  console.log(tr);

});