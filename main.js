import './style.css'
import { test } from './test.js'


document.querySelector('#app').innerHTML = `
    <ul id="msglist"></ul>
    <input id="msg" name="msg" type="text">
    <button id="send">Send</button>
    <p id="warning"></p>
    <ul id="history"> 
      <li></li> 
    </ul>
    <button id="hideShow">Show message history</button>
`

test(document.querySelector('#app'))
