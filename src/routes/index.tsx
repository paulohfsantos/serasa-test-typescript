import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../views/Home'

const SystemRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default SystemRoutes