import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import Menu from '../components/Menu';
import Presensi from '../components/Presensi';
import AktivitasBulanan from '../components/AktivitasBulanan';
import Statistik from '../components/Statistik';
import HeaderHome from '../components/HeaderHome';

export default function Home() {
    return (
        <div className="pb-16">
            <HeaderHome />
            <div className="px-2 sm:px-4 py-1">
                <Menu />
                <Presensi />
                <AktivitasBulanan />
                <Statistik />
            </div>
        </div>
    );
}
