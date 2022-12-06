import './test-report-tab.scss';
import 'azure-devops-ui/Core/override.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as SDK from 'azure-devops-extension-sdk';
import { showRootComponent } from "../common";

const TASK_IDS = ['120275d4-1fb6-47c6-a707-5baf85442788'];

class TestReportTab extends React.Component<{}, {}> {
  public render(): JSX.Element {
    return (
      <div className="test-report-content">
        <h1>sample test report2...</h1>
      </div>
    );
  }
}

export default TestReportTab;


SDK.register('registerTestReportTab', {
  isInvisible: function (state: any) {
    let resultArray: string[] = [];
    state.releaseEnvironment.deployPhasesSnapshot.forEach((phase: any) => {
      phase.workflowTasks.forEach((task: any) => {
        resultArray.push(task.taskId);
      });
    });
    return !TASK_IDS.some((id) => resultArray.includes(id));
  },
});

// SDK.init();
// SDK.ready()
//   .then(() => {
//     console.log('loading TestReport...');
//     showRootComponent(<TestReportTab />);
//     // ReactDOM.render(<TestReportTab />, document.getElementById('root'));
//   })
//   .catch((error) => {
//     console.error(error);
//   });

      showRootComponent(<TestReportTab />);


