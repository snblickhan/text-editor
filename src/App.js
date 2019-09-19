import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Grommet } from 'grommet'
import './App.css'
import Home from './screens/Home'
import ProjectsIndex from './screens/ProjectsIndex'
import SubjectsIndex from './screens/SubjectsIndex'
import SubjectSetsIndex from './screens/SubjectSetsIndex'
import WorkflowsIndex from './screens/WorkflowsIndex'
import Editor from './screens/Editor'
import Header from './screens/Header'
import { mergedTheme } from './theme'

function App() {
  return (
    <Router>
      <>
        <main>
          <Grommet theme={mergedTheme}>
            <Route exact path="/" component={Home} />
            <Route path="/projects" component={Header}/>
            <Route exact path="/projects" component={ProjectsIndex}/>
            <Route exact path="/projects/workflows" component={WorkflowsIndex}/>
            <Route exact path="/projects/workflows/subject-sets" component={SubjectSetsIndex}/>
            <Route exact path="/projects/workflows/subject-sets/subjects" component={SubjectsIndex}/>
            <Route exact path="/projects/workflows/subject-sets/subjects/editor" component={Editor}/>
          </Grommet>
        </main>
      </>
    </Router>
  );
}

export default App;
