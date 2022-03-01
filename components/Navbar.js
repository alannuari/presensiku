import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCalendarDays, faHistory, faFile, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';

const Navbar = () => {
    const router = useRouter();
    return (
        <nav className="bg-white text-slate-500 inline-flex text-center w-full py-2 fixed bottom-0 max-w-2xl mx-auto border-t-2 border-t-slate-200">
            <Link href="/">
                <a className={`px-2 mx-auto ${router.pathname == '/' ? 'active' : ''}`}>
                    <FontAwesomeIcon icon={faHouse} />
                    <p className="text-xs">Home</p>
                </a>
            </Link>
            <Link href="/jadwal">
                <a className={`px-2 mx-auto ${router.pathname == '/jadwal' ? 'active' : ''}`}>
                    <FontAwesomeIcon icon={faCalendarDays} />
                    <p className="text-xs">Jadwal</p>
                </a>
            </Link>
            <Link href="/riwayat">
                <a className={`px-2 mx-auto ${router.pathname == '/riwayat' ? 'active' : ''}`}>
                    <FontAwesomeIcon icon={faHistory} />
                    <p className="text-xs">Riwayat</p>
                </a>
            </Link>
            <Link href="/rekap">
                <a className={`px-2 mx-auto ${router.pathname == '/rekap' ? 'active' : ''}`}>
                    <FontAwesomeIcon icon={faFile} />
                    <p className="text-xs">Rekap</p>
                </a>
            </Link>
            <Link href="/profile">
                <a className={`px-2 mx-auto ${router.pathname == '/profile' ? 'active' : ''}`}>
                    <FontAwesomeIcon icon={faCircleUser} />
                    <p className="text-xs">Profile</p>
                </a>
            </Link>
        </nav>
    );
};

export default Navbar;
