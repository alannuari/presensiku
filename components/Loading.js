import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import logopic from '../assets/logo.png';

const Loading = () => {
    return (
        <div className="relative flex justify-center text-white">
            <div className="flex items-center justify-center text-3xl min-h-screen w-full bg-color-primary">
                <div>
                    <Image src={logopic} alt="Logo" className="rounded-full" />
                    <h1>Presensiku</h1>
                </div>
            </div>
            <div className="absolute bottom-0 mb-4">
                <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
            </div>
        </div>
    );
};

export default Loading;
