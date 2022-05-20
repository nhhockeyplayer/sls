// import packageJson from '../../../../../package.json'
export type Brand = 'ionic' | 'material' | 'bootstrap'
export const environment = {
    production: true,

    brand: 'material' as Brand,
    apiUrl: 'http://localhost:3333/nestApi',
    websocketUrl: 'http://localhost:2222',

    pollingTime: 3000, // 5 seconds

    test: false,

    discardCommitIfExists: true,
    instance: '/energy',
    TOMCAT_HOME: '/Users/meanstack02/Library/apache-tomcat-9.0.33',

    moduleLoadingLog: false,



    appName: 'energy',
    appRootPrefix: '/energy',
    mobileViewport: 992,

    connectionTimeout: 5 * 6 * 10000,
    dynamicTagLink: '',

    defaultUserId: 'meanstack',
    defaultEmailAddress: 'meanstacknh@gmail.com',
    apiPort: '9000',
    url: 'https://predict34.com/energy',

    months: 12,
    days: 180,

    versions: {

    }
}
