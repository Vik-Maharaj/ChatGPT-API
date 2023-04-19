import {useState} from 'react';
import axios from "axios";

const App = () => {

    const [prompt, setPrompt] = useState<string>('');

      const appLoader = (uid: string) => {
        const element = document.getElementById(uid) as HTMLElement;
        element.textContent = ''
    
        loadInterval = setInterval(() => {
          element.textContent += '.';
    
          if (element.textContent === '....') {
            element.textContent = '';
          }
        }, 300);
      }
}

export default App;