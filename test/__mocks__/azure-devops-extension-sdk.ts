import { IdentityServiceIds } from "azure-devops-extension-api/Identities";
import { IHostContext, IUserContext } from "azure-devops-extension-sdk";

/** 
 * This is a minimal mock version to test WorkItemFormGroup
 * for additional mocks please look here:
 * https://github.com/h2floh/azure-dev-ops-react-ui-unit-testing/blob/main/src/__mocks__/azure-devops-extension-sdk.ts
 */

/**
 * Mocked Init Function to return resolve
 */
export function init() : Promise<void> {
    return new Promise((resolve, reject) => resolve());
}

export function ready() : Promise<void> {
    return new Promise((resolve, reject) => jest.fn());
}

/**
 * Mocked getContributionId returns some Id
 */
export function getContributionId() { return "someContributionId" }

export function register (instanceId: string, instance: any) {
}


/**
 * Accessors to Mocked getService methods
 */
export const mockSetFieldValue = jest.fn();

/**
 * Mocked getService returns mocked methods
 */
export function getService(contributionId: string) {
    console.info('contributionId', contributionId);
    // switch(contributionId) {
    // }
}
