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
    <section className="bg-white">
      <div className="max-w-6xl mx-auto py-16">

        <h2 className="pb-8 text-white">Upcoming shows</h2>

        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50">
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
    </section>
  )
}
