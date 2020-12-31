import { Plugin } from '@vizality/entities'
const { open: openModal } = require('@vizality/modal')

module.exports = class QuickImages extends Plugin {
    onStart() {
        vizality.api.commands.registerCommand({
            command: 'crash',
            description: 'Crashes Discord',
            usage: '{c}',
            executor: (args) => {
                openModal(() => <UnexistingModal />)
            }
        });
    }

    onStop(){
        vizality.api.commands.unregisterCommand('crash');
    }
}