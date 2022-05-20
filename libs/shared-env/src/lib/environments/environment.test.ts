// import packageJson from '../../../../../package.json'
export type Brand = 'ionic' | 'material' | 'bootstrap'
export const environment = {
    production: true,

    brand: 'ionic' as Brand,
    apiUrl: 'http://localhost:3333/nestApi',
    websocketUrl: 'http://localhost:2222',

    pollingTime: 3000, // 5 seconds
}
