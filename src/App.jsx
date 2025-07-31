import { BrowserRouter as Router, Routes, Route, Link, useParams, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';

// Import Material-UI Icons
import BookIcon from '@mui/icons-material/Book';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import GroupsIcon from '@mui/icons-material/Groups';
// You can import any other icon you need from @mui/icons-material

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </Router>
  );
}

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo-link">
          <img src="/tech hub logo-01.png" alt="Tech Hub Logo" className="logo-img" />
        </Link>
        <NavMenu />
      </div>
    </header>
  );
}

function NavMenu() {
  return (
    <nav className="nav-menu">
      <ul className="nav-links">
        <li><Link to="/" className="nav-link">Home page </Link></li>
        <li><Link to="/about" className="nav-link">About</Link></li>
        <li><Link to="/services" className="nav-link">Courses</Link></li>
        <li><Link to="/contact" className="nav-link">Contact</Link></li>
        <li><Link to="/api/posts" className="nav-link">Posts</Link></li>
        <li><Link to="/api/users" className="nav-link">Users</Link></li>
        <li><Link to="/api/todos" className="nav-link">Todos</Link></li>
      </ul>
    </nav>
  );
}

function MainContent() {
  return (
    <main className="main-content">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/api/posts" element={<PostsPage />} />
        <Route path="/api/posts/:id" element={<PostDetails />} />
        <Route path="/api/users" element={<UsersPage />} />
        <Route path="/api/users/:id" element={<UserDetails />} />
        <Route path="/api/todos" element={<TodosPage />} />
        <Route path="/api/todos/:id" element={<TodoDetails />} />
      </Routes>
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/about" className="footer-link">About</Link>
        <Link to="/services" className="footer-link">Courses</Link>
        <Link to="/contact" className="footer-link">Contact</Link>
      </div>
      <div className="footer-info">
        <p className="copyright">© {new Date().getFullYear()} Tech Hub.</p>

      </div>
    </footer>
  );
}

function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Welcome to Tech Hub</h1>
        <p>Your Gateway to Technology Learning</p>
        <button className="cta-button">Join Tech Hub</button>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    // Now using MUI Icons as components instead of emoji strings
    { icon: <BookIcon sx={{ fontSize: '3.5rem' }} />, title: 'Courses', desc: 'Learn programming and tech skills' },
    { icon: <LaptopMacIcon sx={{ fontSize: '3.5rem' }} />, title: 'Projects', desc: 'Build real-world applications' },
    { icon: <GroupsIcon sx={{ fontSize: '3.5rem' }} />, title: 'Community', desc: 'Connect with tech enthusiasts' }
  ];

  return (
    <section className="features-section">
      <div className="features-container">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="feature-card">
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="page-container">
      <h2>About Tech Hub</h2>
      <p>
        Tech Hub is a leading platform for technology education and community building.
        We offer comprehensive courses, hands-on projects, and a vibrant community
        for tech enthusiasts of all levels.
      </p>
    </div>
  );
}

function ServicesPage() {
  const services = [
    { title: 'Online Courses', desc: 'Interactive learning experiences' },
    { title: 'Project Guidance', desc: 'Real-world application development' },
    { title: 'Career Support', desc: 'Job placement assistance' }
  ];

  return (
    <div className="page-container">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
}

function ServiceCard({ title, desc }) {
  return (
    <div className="service-card">
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus(null);

    try {
      console.log("Form submitted:", form);
      setSubmissionStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      console.error("Submission error:", error);
      setSubmissionStatus('error');
    }

    setTimeout(() => setSubmissionStatus(null), 5000);
  };

  return (
    <div className="page-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        {submissionStatus === 'success' && (
          <p className="success-message">Thank you, your message has been sent successfully!</p>
        )}
        {submissionStatus === 'error' && (
          <p className="error-message">An error occurred during submission. Please try again.</p>
        )}
        <InputField
          label="Name"
          type="text"
          value={form.name}
          onChange={(e) => setForm({...form, name: e.target.value})}
          required
        />
        <InputField
          label="Email"
          type="email"
          value={form.email}
          onChange={(e) => setForm({...form, email: e.target.value})}
          required
        />
        <TextAreaField
          label="Message"
          value={form.message}
          onChange={(e) => setForm({...form, message: e.target.value})}
          required
        />
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </div>
  );
}

function InputField({ label, ...props }) {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input {...props} />
    </div>
  );
}

function TextAreaField({ label, ...props }) {
  return (
    <div className="form-group">
      <label>{label}</label>
      <textarea {...props} />
    </div>
  );
}

function DataPage({ title, endpoint, renderItem }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();
  const userId = searchParams.get('userId');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      let url = `https://jsonplaceholder.typicode.com/${endpoint}`;
      if (endpoint === 'posts' && userId) {
        url = `https://jsonplaceholder.typicode.com/${endpoint}?userId=${userId}`;
      }

      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`Network error: ${res.status}`);
        }
        const result = await res.json();
        setData(result);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Could not load data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint, userId]);

  if (loading) return <div className="loading">Loading {title}...</div>;
  if (error) return <div className="error-message">{error}</div>;
  if (data.length === 0) return <div className="no-data">No {title} to display at the moment.</div>;

  return (
    <div className="api-page">
      <h2>{title}</h2>
      <div className="items-grid">
        {data.map(item => (
          <Link
            to={`/api/${endpoint}/${item.id}`}
            key={item.id}
            className="item-card"
          >
            {renderItem(item)}
          </Link>
        ))}
      </div>
    </div>
  );
}

function DetailPage({ title, endpoint, renderDetails }) {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/${endpoint}/${id}`);
        if (!res.ok) {
          if (res.status === 404) {
            throw new Error(`${title} not found.`);
          }
          throw new Error(`Network error: ${res.status}`);
        }
        const result = await res.json();
        setItem(result);
      } catch (err) {
          console.error("Error fetching item details:", err);
          setError(err.message || `Could not load ${title} details. Please try again later.`);
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [id, endpoint, title]);

  if (loading) return <div className="loading">Loading {title} details...</div>;
  if (error) return <div className="error-message">{error}</div>;
  if (!item) return <div className="error-message">{title} is not available.</div>;

  return (
    <div className="detail-page">
      <h2>{title} Details</h2>
      <div className="detail-card">
        {renderDetails(item)}
        <Link to={`/api/${endpoint}`} className="back-button">Back to {title}</Link>
      </div>
    </div>
  );
}

function PostsPage() {
  return (
    <DataPage
      title="Posts"
      endpoint="posts"
      renderItem={(post) => (
        <>
          <h3>{post.title}</h3>
          <p>{post.body.substring(0, 70)}...</p>
          <p className="item-meta">User ID: {post.userId}</p>
        </>
      )}
    />
  );
}

function PostDetails() {
  return (
    <DetailPage
      title="Post"
      endpoint="posts"
      renderDetails={(post) => (
        <div className="post-detail-content">
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <p><strong>User ID:</strong> {post.userId}</p>
          <Link to={`/api/users/${post.userId}`} className="user-link">
            View Author Profile
          </Link>
        </div>
      )}
    />
  );
}

function UsersPage() {
  return (
    <DataPage
      title="Users"
      endpoint="users"
      renderItem={(user) => (
        <>
          <h3>{user.name}</h3>
          <p className="username-display">@{user.username}</p>
          <p className="user-email">{user.email}</p>
        </>
      )}
    />
  );
}

function UserDetails() {
  return (
    <DetailPage
      title="User"
      endpoint="users"
      renderDetails={(user) => (
        <div className="user-detail-card">
          <h3>{user.name}</h3>
          <p><strong>Username:</strong> @{user.username}</p>
          <p><strong>Email:</strong> <a href={`mailto:${user.email}`}>{user.email}</a></p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Website:</strong> <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
          <p><strong>Company:</strong> {user.company.name}</p>
          <p><strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
          <Link to={`/api/posts?userId=${user.id}`} className="view-posts-button">
            View This User's Posts
          </Link>
        </div>
      )}
    />
  );
}

function TodosPage() {
  return (
    <DataPage
      title="Todos"
      endpoint="todos"
      renderItem={(todo) => (
        <>
          <h3 style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.title}
          </h3>
          <p>Status: {todo.completed ? 'Completed' : 'Pending'}</p>
          <p className="item-meta">User ID: {todo.userId}</p>
        </>
      )}
    />
  );
}

function TodoDetails() {
  return (
    <DetailPage
      title="Todo"
      endpoint="todos"
      renderDetails={(todo) => (
        <div className="todo-detail-content">
          <h3>{todo.title}</h3>
          <p><strong>Status:</strong> {todo.completed ? 'Completed' : 'Pending'}</p>
          <p><strong>User ID:</strong> {todo.userId}</p>
          <Link to={`/api/users/${todo.userId}`} className="user-link">
            View User Profile
          </Link>
        </div>
      )}
    />
  );
}

export default App;