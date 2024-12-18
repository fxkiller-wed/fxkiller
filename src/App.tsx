import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header'; 
import AppRoutes from './AppRoutes';     

const App = () => {
  return (
    <Router>
      <Header />  
        <AppRoutes />  
    </Router>
  );
};

export default App;
