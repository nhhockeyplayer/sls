// import packageJson from '../../../../../package.json'
export type Brand = 'ionic' | 'material' | 'bootstrap'

export const environment = {
    production: false,

    brand: 'material' as Brand,
    apiUrl: 'http://localhost:3333/nestApi',
    websocketUrl: 'http://localhost:2222',

    pollingTime: 600000,                        // 10 minutes

    test: true,

    discardCommitIfExists: true,
    instance: '/energy',
    TOMCAT_HOME: '/Users/meanstack02/Library/apache-tomcat-9.0.33',

    moduleLoadingLog: true,



    appName: 'energy',
    appRootPrefix: '',
    mobileViewport: 990,

    connectionTimeout: 5 * 6 * 10000 * 4,
    dynamicTagLink: '',

    defaultUserId: 'meanstack',
    defaultEmailAddress: 'meanstacknh@gmail.com',
    apiPort: '3333',
    url: 'https://localhost:8080/energy',

    months: 12,
    days: 180,

    versions: {

    }
}
