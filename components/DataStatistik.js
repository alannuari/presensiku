import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPieChart, faUserGroup, faEnvelopeOpen, faUserXmark } from '@fortawesome/free-solid-svg-icons';

const DataStatistik = ({ data }) => {
    return (
        <div className="my-3">
            <h1 className="font-bold text-lg mb-4">Data Statistik</h1>
            <div className="grid grid-cols-2 gap-3">
                <div className="bg-white p-3 w-full rounded-xl shadow">
                    <FontAwesomeIcon icon={faUserGroup} className="text-emerald-400 text-2xl" />
                    <h1 className="text-lg">{data.hadir}</h1>
                    <p className="text-sm text-gray-300">Hadir</p>
                </div>
                <div className="bg-white p-3 w-full rounded-xl shadow">
                    <FontAwesomeIcon icon={faPieChart} className="text-orange-400 text-2xl" />
                    <h1 className="text-lg">{data.terlambat}</h1>
                    <p className="text-sm  text-gray-300">Terlambat</p>
                </div>
                <div className="bg-white p-3 w-full rounded-xl shadow">
                    <FontAwesomeIcon icon={faUserXmark} className="text-red-400 text-2xl" />
                    <h1 className="text-lg">{data.tidakhadir}</h1>
                    <p className="text-sm  text-gray-300">Tidak Hadir</p>
                </div>
                <div className="bg-white p-3 w-full rounded-xl shadow">
                    <FontAwesomeIcon icon={faEnvelopeOpen} className="text-blue-400 text-2xl" />
                    <h1 className="text-lg">{data.izin}</h1>
                    <p className="text-sm  text-gray-300">Izin</p>
                </div>
            </div>
        </div>
    );
};

export default DataStatistik;
