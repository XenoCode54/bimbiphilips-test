export default function Calender() {
    const days = [
        {
            day: '15',
            active: true
        },
        {
            day: '16',
            active: false
        },
        {
            day: '17',
            active: false
        },
        {
            day: '18',
            active: false
        },
        {
            day: '19',
            active: false
        },
        {
            day: '20',
            active: false
        }
    ];
    return (
        <div className="w-60 ">
            <h1 className="font-bold text-xl font-serif py-1">Six Days In Dubai</h1>
            <ul>
                <li className="w-8 h-8 flex  items-center justify-center">FEB</li>
                <div className=" flex md:flex-col flex-row ">
                    {days.map((day, index) => {
                        return (
                            <li
                                key={index}
                                className={`${
                                    day.active
                                        ? 'bg-opacity-50 bg-black text-yellow-300 w-8 h-8 rounded-full flex items-center justify-center border-yellow-300 border-2 text-sm font-bold font-mono'
                                        : 'w-8 h-10 flex items-center justify-center text-xs'
                                }`}>
                                {day.day}
                            </li>
                        );
                    })}
                </div>
            </ul>
        </div>
    );
}
