import {
  Switch,
  Route
} from "react-router-dom";
import { useEffect } from 'react';

import { Header } from '../Header/Header'
import { Home } from '../Home/Home'
import { Services } from '../Services/Services'
import { Contact } from '../Contact/Contact'
import { RealEstateAds } from '../RealEstateAds/RealEstateAds'
import { Footer } from '../Footer/Footer'

function App() {
  useEffect(() => {
    document.title = 'Célia DREUX';
    window.scrollTo(0, 0);
  }, []);
  return (
  <div className="w-full">
    <Header />
    <Switch >
      <Route exact path='/' component={Home} />
      <Route exact path='/services' component={Services} />
      <Route exact path='/realestateads' component={RealEstateAds} />
      <Route exact path='/contact' component={Contact} />
    </Switch>
    <Footer />
  </div>
  );
}

export default App;
