import { useState } from 'react';
import DatePicker from 'sassy-datepicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { faRotateLeft, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const Jadwal = () => {
    const [date, setDate] = useState(new Date());
    const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    const monthHeader = months[date.getMonth()];
    const yearHeader = date.getFullYear();

    const onChange = (date) => {
        setDate(date);
    };

    return (
        <div className="pb-14 min-h-screen">
            <header className="bg-color-primary text-white flex items-center justify-between p-4">
                <h1 className="text-xl">
                    {monthHeader} {yearHeader}
                </h1>
                <button className="px-1 text-xl">
                    <FontAwesomeIcon icon={faCalendarAlt} />
                </button>
            </header>
            <div className="py-2 flex justify-center">
                <DatePicker onChange={onChange} selected={date} />
            </div>
            <div className="text-center pt-5">
                <div className="text-gray-300 py-2">
                    <h1 className="py-2">{date.toDateString()}</h1>
                    <FontAwesomeIcon icon={faInfoCircle} className="text-3xl" />
                    <p className="py-2">Data tidak ditemukan!</p>
                </div>
                <div className="py-2">
                    <FontAwesomeIcon icon={faRotateLeft} />
                    <p className="text-sm">Tap untuk coba lagi</p>
                </div>
            </div>
        </div>
    );
};

export default Jadwal;
