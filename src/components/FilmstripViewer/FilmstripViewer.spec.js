import { shallow } from 'enzyme'
import React from 'react'
import FilmstripViewer from './FilmstripViewer'
import Page1 from '../../images/mockImages/page1.jpg'
import Page2 from '../../images/mockImages/page2.jpg'
import Page3 from '../../images/mockImages/page3.jpg'
import Page4 from '../../images/mockImages/page4.jpg'
import Page5 from '../../images/mockImages/page5.jpg'
import Page6 from '../../images/mockImages/page6.jpg'
import FilmstripThumbnail from './components/FilmstripThumbnail'
import StepNavigation from './components/StepNavigation'

let wrapper;

describe('Component > FilmstripViewer', function () {
  beforeEach(function() {
    wrapper = shallow(<FilmstripViewer images={[Page1, Page2, Page3, Page4, Page5, Page6]}/>)
  })

  it('renders without crashing', function () {})

  it('shows Thumbnails when open', function () {
    const thumbnailLength = wrapper.find(FilmstripThumbnail).length
    expect(thumbnailLength).toEqual(6)
  })

  it('hides Thumbnails and shows the StepNavigation when closed', function () {
    wrapper.setProps({ isOpen: false })
    const thumbnailLength = wrapper.find(FilmstripThumbnail).length
    expect(thumbnailLength).toEqual(0)
    const navigatorPresence = wrapper.find(StepNavigation).length
    expect(navigatorPresence).toEqual(1)
  })
})