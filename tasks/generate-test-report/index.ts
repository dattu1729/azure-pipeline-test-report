import * as tl from 'azure-pipelines-task-lib/task';

async function run() {
  try {
    const reqIds: string = tl.getInputRequired('reqIds');
    console.log('Configured requirement Ids: ', reqIds);
    const serviceConnectionName = tl.getInput('MyService', true);
    console.log('serviceConnectionName', serviceConnectionName);
    if (serviceConnectionName) {
      const url = tl.getEndpointUrl(serviceConnectionName, false);
      const token = tl.getEndpointAuthorizationParameter(
        serviceConnectionName,
        'apitoken',
        false
      );
      const proxyUrl = tl.getEndpointDataParameter(
        serviceConnectionName,
        'proxy',
        true
      );
      console.log('service-url', url);
      console.log('service-token', token);
      console.log('service-proxyUrl', proxyUrl);
    }
  } catch (err: any) {
    console.error(err);
    tl.setResult(tl.TaskResult.Failed, err.message);
  }
}

run();
