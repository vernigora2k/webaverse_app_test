import { React, useEffect } from '/web_modules/es-react.js';
import htm from '/web_modules/htm.js';

const html = htm.bind(React.createElement)

const  Application = ({props}) => {
  
    const {itemType, itemName, onMainnet, creator, owner, image, number, grease, description, hash} = props
    
    console.log(itemType)

    return html`
      <div className="card">
        <div className="card__top flex">
          <div className="flex">
            <div className="top__item-type ${itemType}"></div>
            <div className="top__item-name">${itemName}</div>
          </div>
          <div className="flex">
            <div className="top__on-mainnet ${onMainnet}"></div>
            <div className="top__creator">
              <img className="creator-img" src='components/Card/aditionals/${creator}' />
            </div>
            <div className="top__owner">
              <img className="owner-img" src='components/Card/aditionals/${owner}' />
            </div>
          </div>
        </div>
        <div className="card__avatar flex">
          <img className="avatar-img" src='components/Card/aditionals/${image}' />
        </div>
        <div className="card__main">
          <div className="main__info flex">
            <div className="main__number">${number}</div>
            <div className="main__grease">${grease}</div>
          </div>          
          <div className="main__description flex">
            <p>${description}</p>
          </div>          
          <div className="main__hash flex">
            <p>${hash}</p>
          </div>          
        </div>
      </div>
      
    `;
  };

  export default Application;
