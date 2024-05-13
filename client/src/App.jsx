
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Header from './components/Header'
import Footer from './components/Footer'
import PrivateRoute from './components/PrivateRoute'
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute'
import CreatePage from './pages/CreatePage'
import UpdatePost from './pages/UpdatePost'
import PostPage from './pages/PostPage'


const App = () => {
  return (
    <BrowserRouter className='text-3xl text-red-700'>
      <Header/>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/sign-up' element={<SignUp/>} />
      <Route path='/Sign-in' element={<SignIn/>} />
      <Route element={<PrivateRoute/>}>
        <Route path='/dashboard' element={<Dashboard/>} />
      </Route>
      <Route element={<OnlyAdminPrivateRoute/>}>
        <Route path='/create-post' element={<CreatePage/>} />
        <Route path='/update-post/:postId' element={<UpdatePost />} />
      </Route>
      <Route path='/projects' element={<Projects/>} />
      <Route path='/post/:postSlug' element={<PostPage />} />
     </Routes>
     <Footer />
    </BrowserRouter>
  )
}

export default App
