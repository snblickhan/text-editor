import React from 'react'
import AppContext from 'store'
import { observer } from 'mobx-react'
import AggregatedTranscriptions from './AggregatedTranscriptions'

function AggregatedTranscriptionsContainer({ margin }) {
  const store = React.useContext(AppContext)

  const addLine = () => store.transcriptions.addLine()
  const showOverlay = store.aggregations.showModal || store.transcriptions.approved
  const showTranscription = store.transcriptions.isActive

  return (
    <AggregatedTranscriptions
      addLine={addLine}
      isViewer={store.projects.isViewer}
      margin={margin}
      showOverlay={showOverlay}
      showTranscription={showTranscription}
    />
  )
}

export default observer(AggregatedTranscriptionsContainer)
