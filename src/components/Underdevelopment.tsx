import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

function Underdevelopment() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <FontAwesomeIcon icon={faExclamationTriangle} className="text-red-500 text-6xl mb-4" />
      <h1 className="text-2xl font-bold mb-2">Page Under Development</h1>
      <p className="text-gray-700">We're working hard to bring you this page. Please check back later!</p>
    </div>
  );
}

export default Underdevelopment;
