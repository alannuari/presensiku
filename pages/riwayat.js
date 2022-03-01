import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Riwayat = () => {
    const [date, setDate] = useState(new Date());
    const onChange = (date) => {
        setDate(date);
    };
    return (
        <div className="min-h-screen text-center relative">
            <header className="bg-color-primary text-white flex items-center justify-between p-4">
                <h1 className="text-xl">Riwayat</h1>
            </header>
            <div className="flex justify-center pt-6">
                <DatePicker onChange={onChange} selected={date} className="bg-emerald-100 text-center cursor-pointer rounded-full" />
                <button className="bg-color-primary h-12 w-12 text-xl text-white rounded-full absolute bottom-20 right-4">
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>
        </div>
    );
};

export default Riwayat;
