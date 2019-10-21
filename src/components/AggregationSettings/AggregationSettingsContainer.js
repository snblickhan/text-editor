import React from 'react'
import AppContext from 'store'
import AggregationSettings from './AggregationSettings'

const REDUCERS = {
  CHOOSE: 'CHOOSE_REDUCER',
  OPTICS: 'OPTICS_REDUCER',
  DBSCAN: 'DBSCAN_REDUCER'
}

function AggregationSettingsContainer() {
  const store = React.useContext(AppContext)
  const toggleSettings = store.aggregations.toggleSettings

  const [ selectedReducer, selectReducer ] = React.useState(null);
  const [ currentScreen, setScreen ] = React.useState(REDUCERS.CHOOSE);
  const submitOptics = () => { console.log('Submitting Optics Form')}
  const submitDBScan = () => { console.log('Submitting DBScan Form')}

  return (
    <AggregationSettings
      currentScreen={currentScreen}
      selectReducer={selectReducer}
      selectedReducer={selectedReducer}
      setScreen={setScreen}
      submitDBScan={submitDBScan}
      submitOptics={submitOptics}
      toggleSettings={toggleSettings}
    />
  )
}

export default AggregationSettingsContainer
export {
  AggregationSettingsContainer,
  REDUCERS
}
