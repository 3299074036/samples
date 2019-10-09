module.exports = {
    type: 'folder',
    style: 'simple',
    fetch() {
        return [{
            title: '$ui.toast(title: string)',
            onClick: 'toast'
        }, {
            title: '$ui.alert( message: string)',
            onClick: 'alert'
        }, {
            title: '$ui.confirm(title: string, message: string)',
            onClick: 'confirm'
        }, {
            title: '$ui.prompt(title:string, hint: string, value: string)',
            onClick: 'prompt'
        }, {
            title: '$ui.select(title:string, options: [])',
            onClick: 'select'
        }, {
            title: '$ui.navTo()',
            onClick: 'navTo'
        }, {
            title: '$ui.openPrefs()',
            onClick: 'openPrefs'
        }]
    },
    toast() {
        $ui.toast('Hello World!')
    },
    async alert() {
        await $ui.alert('Hello World')
        console.log('alert finished')
    },
    async confirm() {
        let ok = await $ui.confirm('Confirmation', 'Are you sure?')
        $ui.toast(`ok=${ok}`)
    },
    async prompt() {
        let name = await $ui.prompt('Dora Prompt', 'Input your name', '')
        $ui.toast(`Hello ${name}`)
    },
    async select() {
        let option = await $ui.select('Dora select', [{
            id: 'option2',
            title: 'Option 1'
        }, {
            id: 'option2',
            title: 'Option 2'
        }])
        $ui.toast(`Selected ${option.title}`)
    },
    navTo() {
        $ui.navTo($route('index'))
    },
    openPrefs() {
        $ui.openPrefs()
    }
}