import { Plugin } from '@vizality/entities'
const { open: openModal } = require('@vizality/modal')

module.exports = class Autocrash extends Plugin {
    start() {
        vizality.api.commands.registerCommand({
            command: 'crash',
            description: 'Crashes Discord',
            usage: '{c}',
            executor: (args) => {
                openModal(() => <UnexistingModal />)
            }
        });
    }

    stop(){
        vizality.api.commands.unregisterCommand('crash');
    }
}