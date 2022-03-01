import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import Chart from '../components/Chart';
import { useState } from 'react';
import { UserData } from '../components/DataChart';
import DataStatistik from '../components/DataStatistik';

const Rekap = () => {
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.month),
        datasets: [
            {
                label: 'Performance (%)',
                data: UserData.map((data) => data.performance),
                backgroundColor: 'rgb(192, 231, 216, 0.2)',
                borderColor: 'rgb(151, 247, 210)',
                borderWidth: 2,
                fill: true,
                pointRadius: 3,
                tension: 0.3,
                pointBackgroundColor: 'rgb(67, 212, 157)',
                pointBorderColor: 'rgb(67, 212, 157)',
            },
        ],
    });

    const [monthActive, setMonthActive] = useState('Feb');
    const handleMonth = (e) => {
        setMonthActive(e.target.innerText);
    };

    const dataMonth = UserData.filter((data) => {
        return data.month == monthActive;
    })[0];

    return (
        <div>
            <header className="bg-color-primary text-white flex items-center justify-between p-4">
                <h1 className="text-xl">Rekap satu semester</h1>
            </header>
            <div className="px-2 sm:px-4  my-2 pb-14">
                <div className="bg-white mb-6 p-2 sm:p-6 w-full rounded-xl shadow">
                    <p className="font-bold text-lg">Statistik Performa</p>
                    <div className="w-full">
                        <Chart chartData={userData} />
                    </div>
                </div>
                <div className="bg-white px-1 mb-3 w-full rounded-xl shadow">
                    <div className="text-sm text-gray-300 flex justify-between items-center overflow-x-scroll no-scrollbar py-1">
                        <span onClick={handleMonth} className={`px-4 py-1 rounded-lg cursor-pointer ${monthActive == 'Jan' ? 'bg-emerald-400 text-white' : ''}`}>
                            Jan
                        </span>
                        <span onClick={handleMonth} className={`px-4 py-1 rounded-lg cursor-pointer ${monthActive == 'Feb' ? 'bg-emerald-400 text-white' : ''}`}>
                            Feb
                        </span>
                        <span onClick={handleMonth} className={`px-4 py-1 rounded-lg cursor-pointer ${monthActive == 'Mar' ? 'bg-emerald-400 text-white' : ''}`}>
                            Mar
                        </span>
                        <span onClick={handleMonth} className={`px-4 py-1 rounded-lg cursor-pointer ${monthActive == 'Apr' ? 'bg-emerald-400 text-white' : ''}`}>
                            Apr
                        </span>
                        <span onClick={handleMonth} className={`px-4 py-1 rounded-lg cursor-pointer ${monthActive == 'Mei' ? 'bg-emerald-400 text-white' : ''}`}>
                            Mei
                        </span>
                        <span onClick={handleMonth} className={`px-4 py-1 rounded-lg cursor-pointer ${monthActive == 'Jun' ? 'bg-emerald-400 text-white' : ''}`}>
                            Jun
                        </span>
                    </div>
                </div>
                <div className="flex items-center">
                    <FontAwesomeIcon icon={faAward} className="text-orange-900" />
                    <h1 className="font-bold px-3 text-sm">{dataMonth.result}</h1>
                </div>
                <DataStatistik data={dataMonth} />
            </div>
        </div>
    );
};

export default Rekap;
