import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCalendarDay } from '@fortawesome/free-solid-svg-icons';

const Lembur = () => {
    return (
        <div className="flex overflow-x-scroll no-scrollbar p-1">
            <div className="bg-white rounded-xl flex items-center mr-4 shadow">
                <div className="p-3">
                    <div className="w-44">
                        <h1 className="font-bold">Lembur Jam Kerja</h1>
                        <p className="text-xs text-gray-300">Jumlah Lembur Jam Kerja</p>
                    </div>
                    <span className="text-3xl font-bold">0</span>
                </div>
                <div className="border-b-2 mx-7">
                    <FontAwesomeIcon icon={faClock} className="text-4xl text-green-400" />
                </div>
            </div>
            <div className="bg-white rounded-xl flex items-center shadow">
                <div className="p-3">
                    <div className="w-44">
                        <h1 className="font-bold">Lembur Hari Kerja</h1>
                        <p className="text-xs text-gray-300">Jumlah Lembur Hari Kerja</p>
                    </div>
                    <span className="text-3xl font-bold">0</span>
                </div>
                <div className="border-b-2 mx-7">
                    <FontAwesomeIcon icon={faCalendarDay} className="text-4xl text-blue-400" />
                </div>
            </div>
        </div>
    );
};

export default Lembur;
