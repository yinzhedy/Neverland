import logo from './logo.svg';
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';


// below: imports kimgdom schedule, tracker, and member tracker pages
import KingdomSchedulePage from './pages/kingdom-schedule';
import KingdomTrackerPage from './pages/kingdom-tracker';
import MemberTrackerPage from './pages/member-tracker';
import Homepage from './pages/homepage';

//below: imports header, footer, and nav bar components
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  console.log("app running")
  return (
    <ApolloProvider client={client}>
          <Header />
          <BrowserRouter>
          <nav>
        <ul>
        <li><Link to="/homepage">Homepage</Link></li>
          <li><Link to="/kingdom-schedule">Kingdom Schedule</Link></li>
          <li><Link to="/kingdom-tracker">Kingdom Tracker</Link></li>
          <li><Link to="/member-tracker">Member Tracker</Link></li>
        </ul>
      </nav>
          <div className="container">
            <Routes>
              <Route path="/homepage" element={<Homepage/>}/>
              <Route path="/kingdom-schedule" element={<KingdomSchedulePage/>}/>
              <Route path="/kingdom-tracker" element={<KingdomTrackerPage/>}/>
              <Route path="/member-tracker" element={<MemberTrackerPage/>}/>
            </Routes>
          </div>
          </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
