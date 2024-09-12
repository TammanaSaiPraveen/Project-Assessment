import React from 'react';
import GIRL from './footer_img.png';

function HolidayList2() {
  const holidays = [
    { month: 'April', date: '9', day: 'Tuesday', occasion: 'Ugadi' },
    { month: 'April', date: '10', day: 'Wednesday', occasion: 'Ramadan' },
    { month: 'April', date: '14', day: 'Sunday', occasion: 'Ambedkar Jayanthi' },
    { month: 'May', date: '1', day: 'Wednesday', occasion: 'May Day' },
    { month: 'August', date: '15', day: 'Thursday', occasion: 'Independence Day' },
    { month: 'September', date: '7', day: 'Saturday', occasion: 'Vinayaka Chavithi' },
    { month: 'October', date: '12', day: 'Saturday', occasion: 'Mananava' },
    { month: 'October', date: '13', day: 'Sunday', occasion: 'Mjayadashami' },
    { month: 'October', date: '2', day: 'Wednesday', occasion: 'Gandhi Jayanathi' },
    { month: 'October', date: '30', day: 'Wednesday', occasion: 'Naraka Chathurdhashi' },
    { month: 'October', date: '31', day: 'Thursday', occasion: 'Deepavali' },
    { month: 'November', date: '1', day: 'Friday', occasion: 'Kannada Rajyotsava' },
    { month: 'December', date: '25', day: 'Wednesday', occasion: 'Christmas' },
    { month: 'January', date: '1', day: 'Wednesday', occasion: 'New Year Day' },
    { month: 'January', date: '13', day: 'Monday', occasion: 'Bhogi' },
    { month: 'January', date: '14', day: 'Tuesday', occasion: 'Makarasankranthi' },
    { month: 'January', date: '15', day: 'Wednesday', occasion: 'Kanuma' },
    { month: 'January', date: '26', day: 'Sunday', occasion: 'Republic Day' },
    { month: 'February', date: '26', day: 'Wednesday', occasion: 'Mahashivarathri' },
    { month: 'March', date: '30', day: 'Sunday', occasion: 'Ugadi' },
    { month: 'March', date: '31', day: 'Monday', occasion: 'Ramadan' }
  ];

  const isWeekend = (day) => day === 'Saturday' || day === 'Sunday';

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        <img
          className="w-30 h-auto"
          src="https://sdn.signalhire.co/storage/company/1c7f/16e3/f467/de9f/0e69/8040/7b80/662b.webp"
          alt="Koyya Enterprises Private Limited"
        />  
        <br />  
        <br />
        <h1 className="text-3xl font-bold flex-1 text-center mt-[100px] ">Holiday List <br/>2024-25</h1>
      </div>
      <table className="w-full border-collapse mt-4">
        <thead>
          <tr>
            <th className="border px-4 py-2 text-left">#</th>
            <th className="border px-4 py-2 text-left">Month</th>
            <th className="border px-4 py-2 text-left">Date</th>
            <th className="border px-4 py-2 text-left">Day</th>
            <th className="border px-4 py-2 text-left">Occasion</th>
          </tr>
        </thead>
        <tbody>
          {holidays.map((holiday, index) => (
            <tr
              key={index}
              className={`bg-white ${isWeekend(holiday.day) ? 'text-gray-500' : 'text-black'}`}
            >
              <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
              <td className="border  border-gray-300 px-4 py-2">{holiday.month}</td>
              <td className="border  border-gray-300 px-4 py-2">{holiday.date}</td>
              <td className="border  border-gray-300 px-4 py-2">{holiday.day}</td>
              <td className="border  border-gray-300 px-4 py-2">{holiday.occasion}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-left mt-4">
        <p className="text-xl font-bold">
          <strong>Total Number of Holidays: {holidays.length}</strong>
        </p>
        <p className="text-xl font-bold">
          <strong>Total Number of Effective Holidays: 15</strong>
        </p>
      </div>
      
      <footer className="bg-blue-950 text-white py-4 px-8 mt-8">
        <div className="container mx-auto">
          <div className="flex items-center">
            <img
              className="w-6 md:h-20 lg:h-96 md:w-48 lg:w-56"
              src={GIRL}
              alt="Footer Logo"
            />
            <div className="text-left">
              <p className="text-lg font-bold">Koyya Enterprises Private Limited</p>
              <p className="text-sm mt-1">Registered Office: Wework Salarpuria Magnificia, Tin Factory, 78, Old Madras Road, Bangalore - 560016</p>
              <p className="text-sm mt-1">CIN: U62013KA2023PTC179278</p>
              <p className="text-sm mt-1">Email: <a href="mailto:contactus@koyya.in" className="text-blue-300">contactus@koyya.in</a></p>
              <p className="text-sm mt-1">Website: <a href="https://www.koyya.in" className="text-blue-300" target="_blank" rel="noopener noreferrer">https://www.koyya.in</a></p>
            </div>
          </div>
        </div>
      </footer>
      
    </div>
  );
}

export default HolidayList2;
