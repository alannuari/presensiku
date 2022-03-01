import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCalendarDay } from '@fortawesome/free-solid-svg-icons';

const IzinCuti = () => {
    return (
        <div className="flex overflow-x-scroll no-scrollbar p-1">
            <div className="bg-white rounded-xl flex items-center mr-4 shadow">
                <div className="p-3">
                    <div className="w-44">
                        <h1 className="font-bold">Izin Hari Kerja</h1>
                        <p className="text-xs text-gray-300">Jumlah Izin Hari Kerja</p>
                    </div>
                    <span className="text-3xl font-bold">3</span>
                </div>
                <div className="border-b-2 mx-7">
                    <FontAwesomeIcon icon={faClock} className="text-4xl text-green-400" />
                </div>
            </div>
            <div className="bg-white rounded-xl flex items-center shadow">
                <div className="p-3">
                    <div className="w-44">
                        <h1 className="font-bold">Cuti Hari Kerja</h1>
                        <p className="text-xs text-gray-300">Jumlah Cuti Hari Kerja</p>
                    </div>
                    <span className="text-3xl font-bold">4</span>
                </div>
                <div className="border-b-2 mx-7">
                    <FontAwesomeIcon icon={faCalendarDay} className="text-4xl text-blue-400" />
                </div>
            </div>
        </div>
    );
};

export default IzinCuti;
