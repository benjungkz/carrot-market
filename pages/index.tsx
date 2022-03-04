import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl text-center text-blue-600 hover:text-green-700 p-5">Modifier</h1>
      <div className="flex gap-6 justify-center">
        <button className="w-5 h-5 rounded-full bg-red-600"></button>
        <button className="w-5 h-5 rounded-full bg-blue-600"></button>
        <button className="w-5 h-5 rounded-full bg-yellow-300"></button>
      </div>
    </div>
  )
}

export default Home
