import { createBrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Bookapp from './Pages/Bookapp';
import Blog from './Pages/Blog/Blog';
import Bookdetails from './Pages/Bookapp/Bookdetails';
import Eroor404 from './Pages/Eroor404';
import Terms from './Pages/Terms/Terms';
import Policy from './Pages/Policy/Policy';
import ContactUs from './Pages/Contact-us/ContactUs';
import Blogdetails from './Pages/Blog/Blogdetails';
import SignIn from './Component/SignIn';
import SignUp from './Component/SignUp';
import Profile from './Component/Profile';
import AdminLogin from './Admin/AdminLogin';
import AdminDashboard from './Admin/AdminDashboard';
import DoctorAppointments from './Admin/DoctorAppointments';
import DoctorLogin from './Component/DoctorLogin';
import DoctorDashboard from './Component/DoctorDashboard';
import Layout from './Layout';
import BookingGuide from './Component/BookingGuide';

export const allRoutes = createBrowserRouter([
	{
		path: '/',
		element: <Layout />, // Now Layout includes LastVisitedPageTracker
		children: [
			{ path: '/', element: <Home /> },
			{ path: 'about-us', element: <About /> },
			{ path: 'book-appointment', element: <Bookapp /> },
			{ path: 'book-appointment/:id', element: <Bookdetails /> },
			{ path: 'blog', element: <Blog /> },
			{ path: 'blog/:id', element: <Blogdetails /> },
			{ path: 'terms', element: <Terms /> },
			{ path: 'policy', element: <Policy /> },
			{ path: 'contactUs', element: <ContactUs /> },
			{ path: 'booking-guide', element: <BookingGuide /> },
			{ path: 'signUp', element: <SignUp /> },
			{ path: 'signIn', element: <SignIn /> },
			{ path: 'profile', element: <Profile /> },
			{ path: 'admin-login', element: <AdminLogin /> },
			{ path: 'admin-dashboard', element: <AdminDashboard /> },
			{ path: 'admin/appointments/:doctorId', element: <DoctorAppointments /> },
			{ path: 'doctor-login', element: <DoctorLogin /> },
			{ path: 'doctor-dashboard', element: <DoctorDashboard /> },
			{ path: '*', element: <Eroor404 /> },
		],
	},
]);
