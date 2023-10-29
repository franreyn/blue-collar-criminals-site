import React from 'react'

const showsSchedule = [
  {
    date: '2022-01-01',
    venue: 'Venue Name 1',
    city: 'City Name 1',
  },
  {
    date: '2022-02-01',
    venue: 'Venue Name 2',
    city: 'City Name 2',
  },
  // Add more shows as needed
];

export default function Shows() {
  return (
    <div className="bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl pb-8
        text-white">Upcoming shows</h2>
        <table className="table-auto w-full 
        text-white">
          <thead>
            <tr className="text-left border-b-4">
              <th className="text-xl pb-2">Date</th>
              <th className="text-xl pb-2">Venue</th>
              <th className="text-xl pb-2">City</th>
            </tr>
          </thead>
          <tbody>
            {showsSchedule.map((show, index) => (
              <tr key={index} className="border-b-2">
                <td className="py-2">{show.date}</td>
                <td className="py-2">{show.venue}</td>
                <td className="py-2">{show.city}</td>
              </tr>
            ))}
          </tbody>
        </table>        
      </div>
    </div>
  )
}
