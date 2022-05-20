// import packageJson from '../../../../../package.json'
export type Brand = 'ionic' | 'material' | 'bootstrap'
export const environment = {
    production: false,

    brand: 'material' as Brand,
    apiUrl: 'http://localhost:3333/nestApi',
    websocketUrl: 'http://localhost:2222',

    pollingTime: 600000,
}
