import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = event => {
        onToggleShowContent(event.target.checked)
      }

      const onChangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.checked)
      }

      const onChangeRightNavbar = e => {
        onToggleShowRightNavbar(e.target.checked)
      }

      return (
        <div className="controller-bg-container">
          <h1 className="controller-heading">Layout</h1>
          <ul className="checkbox-list">
            <li className="checkbox-item">
              <input
                type="checkbox"
                id="content"
                checked={showContent}
                onChange={onChangeContent}
              />
              <label htmlFor="content" className="label">
                Content
              </label>
            </li>
            <li className="checkbox-item">
              <input
                type="checkbox"
                id="left-navbar"
                checked={showLeftNavbar}
                onChange={onChangeLeftNavbar}
              />
              <label htmlFor="left-navbar" className="label">
                Left Navbar
              </label>
            </li>
            <li className="checkbox-item">
              <input
                type="checkbox"
                id="right-navbar"
                checked={showRightNavbar}
                onChange={onChangeRightNavbar}
              />
              <label htmlFor="right-navbar" className="label">
                Right Navbar
              </label>
            </li>
          </ul>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
