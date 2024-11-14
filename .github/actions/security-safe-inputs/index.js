const core = require('@actions/core');

async function run() {
    try {
        const prTitle=core.getInput('pr-title');
        if (prTitle.startsWith('Feat')) {
            core.info('PR is a Feature');
        } else{
            core.setFailed('PR is not a Feature');

        } 
    } catch (e) {
        core.setFailed(e.message);
    }
}
run();
