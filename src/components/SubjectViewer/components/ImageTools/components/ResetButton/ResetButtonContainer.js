import React from 'react'
import AppContext from 'store'
import ResetButton from './ResetButton'

export default function ResetButtonContainer() {
  const store = React.useContext(AppContext)
  return <ResetButton onClick={store.image.reset} />
}
