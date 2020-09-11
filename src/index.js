import Post from './Post'; 
import './styles/styles.css';
import json from './assets/json.json';
import WebPackLogo from './assets/logo-bg.png';

let post = new Post('Webpack Post Title', WebPackLogo);

console.log('Post to string', post.toString());
console.log(json);