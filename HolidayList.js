import React from 'react';
import './HolidayList.css';

const holidays = [
    { month: 'April', date: '9', day: 'Tuesday', occasion: 'Ugadi' },
    { month: 'April', date: '10', day: 'Wednesday', occasion: 'Ramadan' },
    { month: 'April', date: '14', day: 'Sunday', occasion: 'Ambedkar Jayanthi' },
    { month: 'May', date: '1', day: 'Wednesday', occasion: 'May Day' },
    { month: 'August', date: '15', day: 'Thursday', occasion: 'Independence Day' },
    { month: 'September', date: '7', day: 'Saturday', occasion: 'Vinayaka Chavithi' },
    { month: 'October', date: '12', day: 'Saturday', occasion: 'Mahanavami' },
    { month: 'October', date: '13', day: 'Sunday', occasion: 'Vijayadashami' },
    { month: 'October', date: '2', day: 'Wednesday', occasion: 'Gandhi Jayanthi' },
    { month: 'October', date: '30', day: 'Wednesday', occasion: 'Naraka Chaturdhashi' },
    { month: 'October', date: '31', day: 'Thursday', occasion: 'Deepavali' },
    { month: 'November', date: '1', day: 'Friday', occasion: 'Kannada Rajyotsava' },
    { month: 'December', date: '25', day: 'Wednesday', occasion: 'Christmas' },
    { month: 'January', date: '1', day: 'Wednesday', occasion: 'New Year Day' },
    { month: 'January', date: '13', day: 'Monday', occasion: 'Bhogi' },
    { month: 'January', date: '14', day: 'Tuesday', occasion: 'Makarasankranthi' },
    { month: 'January', date: '15', day: 'Wednesday', occasion: 'Kanuma' },
    { month: 'January', date: '26', day: 'Sunday', occasion: 'Republic Day' },
    { month: 'February', date: '26', day: 'Wednesday', occasion: 'Mahashivaratri' },
    { month: 'March', date: '30', day: 'Sunday', occasion: 'Ugadi' },
    { month: 'March', date: '31', day: 'Monday', occasion: 'Ramadan' },
];

const HolidayList = () => {
    return (
        <div className="holiday-list-container">
            <h2>Holiday List <span className="year">2024-25</span></h2>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Month</th>
                        <th>Date</th>
                        <th>Day</th>
                        <th>Occasion</th>
                    </tr>
                </thead>
                <tbody>
                    {holidays.map((holiday, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{holiday.month}</td>
                            <td>{holiday.date}</td>
                            <td>{holiday.day}</td>
                            <td>{holiday.occasion}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="holiday-summary">
                <p>Total Number of Holidays: <strong>21</strong></p>
                <p>Total Number of Effective Holidays: <strong>15</strong></p>
            </div>
            <footer>
                <p>Koyya Enterprises Private Limited</p>
                <p>Registered Office: WeWork, Bangalore - 560016</p>
                <p><a href="https://www.koyya.in" target="_blank" rel="noopener noreferrer">https://www.koyya.in</a></p>
            </footer>
        </div>
    );
};

export default HolidayList;