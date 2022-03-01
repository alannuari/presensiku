import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSuitcase, faClock, faFileLines, faLocationArrow, faMugHot, faUserCheck, faBullseye, faEllipsis } from '@fortawesome/free-solid-svg-icons';

const Menu = () => {
    return (
        <div className="py-2 bg-white text-center rounded-xl shadow">
            <div className="grid grid-cols-4">
                <div className="my-3">
                    <a className="bg-custom">
                        <FontAwesomeIcon icon={faUserCheck} className="px-2.5 py-3 bg-emerald-300 menu-button" />
                    </a>
                    <p className="text-xs">Presensi</p>
                </div>
                <div className="my-3">
                    <a className="bg-custom">
                        <FontAwesomeIcon icon={faBullseye} className="p-3 bg-purple-400 menu-button" />
                    </a>
                    <p className="text-xs">Mulai Lembur</p>
                </div>
                <div className="my-3">
                    <a className="bg-custom">
                        <FontAwesomeIcon icon={faMugHot} className="p-3 bg-orange-400 menu-button" />
                    </a>
                    <p className="text-xs">Istirahat</p>
                </div>
                <div className="my-3">
                    <a className="bg-custom">
                        <FontAwesomeIcon icon={faFileLines} className="px-4 py-3 bg-blue-400 menu-button" />
                    </a>
                    <p className="text-xs">Izin & Cuti</p>
                </div>
                <div className="my-3">
                    <a className="bg-custom">
                        <FontAwesomeIcon icon={faSuitcase} className="p-3 bg-red-400 menu-button" />
                    </a>
                    <p className="text-xs">Pulang</p>
                </div>
                <div className="my-3">
                    <a className="bg-custom">
                        <FontAwesomeIcon icon={faClock} className="p-3 bg-orange-500 menu-button" />
                    </a>
                    <p className="text-xs">Selesai Lembur</p>
                </div>
                <div className="my-3">
                    <a className="bg-custom">
                        <FontAwesomeIcon icon={faLocationArrow} className="px-3.5 py-3 bg-sky-400 menu-button" />
                    </a>
                    <p className="text-xs">Kembali Kerja</p>
                </div>
                <div className="my-3">
                    <a className="bg-custom">
                        <FontAwesomeIcon icon={faEllipsis} className="px-3.5 py-3 bg-lime-400 menu-button" />
                    </a>
                    <p className="text-xs">Lainnya</p>
                </div>
            </div>
        </div>
    );
};

export default Menu;
