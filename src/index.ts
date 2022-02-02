import './module';
import './scss/index.scss';

console.log('Works!');

const start = async () => Promise.resolve((callback: any) => callback('Promis is work!!!'));

start().then(console.log);

const returnString = (str: string) => str;

returnString('tralala');
