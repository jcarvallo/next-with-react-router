import { About, Home } from '@/views';
import { Link, Route, Routes } from 'react-router-dom';

const Router = () => {
  return (
    <>
      <div id="header">
        <Link to="/">Home</Link>
        {"  "}
        <Link to="/about">About</Link>
        {"  "}
      </div><br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>
  );
}

export default Router