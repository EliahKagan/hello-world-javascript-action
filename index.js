const process = require('process');
const core = require('@actions/core');
const github = require('@actions/github');

try {
    // `who-to-greet` input defined in action metadata file
    const nameToGreet = core.getInput('who-to-greet');
    const nodeVersion = process.version;
    console.log(`Hello ${nameToGreet} from Node.js ${nodeVersion}!`);

    const forceVar = 'FORCE_JAVASCRIPT_ACTIONS_TO_NODE20';
    const forceVal = process.env[forceVar];
    console.log(`Got: ${forceVar}=${forceVal}`);

    const time = (new Date()).toTimeString();
    core.setOutput('time', time);
    core.setOutput('node-version', nodeVersion);

    // Get the JSON webook payload for the current event that triggered the
    // workflow.
    const payload = JSON.stringify(github.context.payload, undefined, 2);
    console.log(`The event payload: ${payload}`);

} catch (error) {
    core.setFailed(error.message);
}
