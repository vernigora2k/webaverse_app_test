import { React, useEffect } from '/web_modules/es-react.js';
import htm from '/web_modules/htm.js';

const html = htm.bind(React.createElement)

const Application = () => {
  
    return html`
      <div> Profile page </div>
    `;
  };

  export default Application;
