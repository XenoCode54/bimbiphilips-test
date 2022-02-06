import { Statistic } from 'antd';
import styles from '../styles/Home.module.css';
// const {  Statistic, Row, Col  } = antd;

export default function Countdown() {
    const { Countdown } = Statistic;
    const deadline = Date.now() + 1000 * 1000; // Moment is also OK
    const format = ['MM', 'DD', 'HH', 'mm', 'ss'];

    const pFlexT = {
        'color': 'rgb(255, 211, 77)',
        'font-weight': 'bold',
        'font-size': '1.2rem',
        'line-height': '20px'
    };

    function onFinish() {
        console.log('finished!');
    }

    function onChange(val) {
        if (4.95 * 1000 < val && val < 5 * 1000) {
            console.log('changed!');
        }
    }
    return (
        <div>
            <p className="text-sm">Remaining Days to my Trip</p>
            <div className="flex">
                {format.map((time, index) => (
                    <div key={index} className="flex-col text-center mx-1 w-10">
                        <Countdown
                            value={deadline}
                            format={time}
                            onFinish={onFinish}
                            valueStyle={pFlexT}
                            onChange={onChange}
                        />
                        <p className={styles.txtSpan}>
                            {time === 'MM'
                                ? 'Weeks'
                                : time === 'DD'
                                ? 'Days'
                                : time === 'HH'
                                ? 'Hours'
                                : time === 'mm'
                                ? 'Minutes'
                                : time === 'ss' && 'Seconds'}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
