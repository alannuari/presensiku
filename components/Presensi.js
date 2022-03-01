import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCodeBranch, faUser } from '@fortawesome/free-solid-svg-icons';

const Presensi = () => {
    return (
        <div className="py-2">
            <div className="flex justify-between items-center mb-2">
                <div>
                    <h1 className="font-bold text-lg">Presensi</h1>
                    <p className="text-xs text-gray-300">Aktivitasmu hari ini</p>
                </div>
                <span className="text-teal-600 font-bold text-sm">Senin, 21 Februari</span>
            </div>
            <div className="bg-white rounded-xl flex items-center shadow">
                <div className="p-2 mr-auto">
                    <div className="flex items-center mb-4">
                        <FontAwesomeIcon icon={faCodeBranch} className="text-emerald-400 p-2 bg-slate-100 rounded-lg" />
                        <h1 className="px-3 font-bold">Belum Presensi</h1>
                    </div>
                    <div className="font-bold">
                        <div className="flex items-center text-sm">
                            <FontAwesomeIcon icon={faClock} className="text-emerald-400" />
                            <span className="px-2">Datang</span>
                            <span className="ml-auto mr-3">: -</span>
                        </div>
                        <div className="flex items-center text-sm">
                            <FontAwesomeIcon icon={faClock} className="text-red-400" />
                            <span className="px-2">Pulang</span>
                            <span className="ml-auto mr-3">: -</span>
                        </div>
                    </div>
                </div>
                <div>
                    <FontAwesomeIcon icon={faUser} className="text-4xl text-gray-400 mx-7 p-2 bg-slate-100 rounded-lg" />
                </div>
            </div>
        </div>
    );
};

export default Presensi;
