/**
 * Main App Component
 *
 * TODO untuk mentee:
 * 1. Import Home page component (setelah dibuat)
 * 2. Render Home component di sini
 * 3. Atau setup routing jika membuat multiple pages
 *
 * Current: Placeholder untuk testing Tailwind setup
 */
import { Home } from './pages/home';

function App() {
  return (
    <div className='w-full min-h-screen bg-black text-white flex items-center justify-center font-quicksand '>
      <div>
        <Home />
      </div>
    </div>
  );
}

export default App;
