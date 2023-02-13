import './index.css'

const TabItem = props => {
  const {onChangeMode, tabDetails, activeTabButton} = props
  const {tabId, displayText} = tabDetails
  const stylesForTab = activeTabButton ? 'active-tab-btn' : ''
  const onChangeTab = () => {
    onChangeMode(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${stylesForTab}`}
        onClick={onChangeTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
