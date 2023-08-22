import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-container">
          {showLeftNavbar && (
            <div className="left-navbar">
              <h1 className="body-heading">Left Navbar Menu</h1>
              <div>
                <ul className="list-items">
                  <li className="item">Item 1</li>
                  <li className="item">Item 2</li>
                  <li className="item">Item 3</li>
                  <li className="item">Item 4</li>
                </ul>
              </div>
            </div>
          )}
          {showContent && (
            <div className="content">
              <h1 className="body-heading">Content</h1>
              <p className="content-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          )}
          {showRightNavbar && (
            <div className="right-navbar">
              <h1 className="body-heading">Right Navbar</h1>
              <div className="ads-container">
                <p className="ad-box">Ad 1</p>
                <p className="ad-box">Ad 2</p>
              </div>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
