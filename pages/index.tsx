import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className="bg-slate-400 py-20 px-20 place-content-center grid gap-10 min-h-screen lg:grid-cols-3">
        <div className="bg-white dark:bg-blue-300 p-6 rounded-3xl shadow-xl">
          <span className="font-semibold text-2xl">Select Item</span>
          <ul>
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="flex justify-between my-2 odd:bg-blue-50 even:bg-yellow-50 first:bg-teal-50 last:bg-amber-50"
              >
                <span className="text-gray-500">Grey Chair</span>
                <span className="font-semibold">$19</span>
              </div>
            ))}
          </ul>
          <ul>
            {["a", "b", "c", ""].map((c, i) => (
              <li className="bg-red-500 py-2 empty:hidden" key={i}>
                {c}
              </li>
            ))}
          </ul>
          <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
            <span>Total</span>
            <span className="font-semibold">$10</span>
          </div>
          <button
            className="mt-5 bg-blue-500 text-white p-3
            text-center rounded-xl w-3/4 block mx-auto 
            hover:bg-teal-500 hover:text-black
            active:bg-yellow-500 focus:bg-red-500
            "
          >
            Checkout
          </button>
        </div>
        <div className="bg-white overflow-hidden rounded-3xl shadow-xl group">
          <div className="bg-blue-500 p-6 pb-14">
            <span className="text-white text-2xl">Profile</span>
          </div>
          <div className="rounded-3xl p-6 bg-white relative -top-5">
            <div className="flex relative -top-16 items-end justify-between">
              <div className="flex flex-col items-center">
                <span className="text-xs text-gray-500">Orders</span>
                <span className="font-medium">340</span>
              </div>
              <div className="h-24 w-24 bg-zinc-300 rounded-full group-hover:bg-yellow-500" />
              <div className="flex flex-col items-center">
                <span className="text-xs text-gray-500">Spent</span>
                <span className="font-medium">$340</span>
              </div>
            </div>
            <div className="relative  flex flex-col items-center -mt-14 -mb-5">
              <span className="text-lg font-medium">Tony Molloy</span>
              <span className="text-sm text-gray-500">미국</span>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl shadow-xl">
          <div className="flex mb-5 justify-between items-center">
            <span>⬅️</span>
            <div className="space-x-3">
              <span>⭐️ 4.9</span>
              <span className="shadow-xl p-2 rounded-md">💖</span>
            </div>
          </div>
          <div className="bg-zinc-400 h-72 mb-5" />
          <div className="flex flex-col">
            <span className="font-medium text-xl">Swoon Lounge</span>
            <span className="text-xs text-gray-500">Chair</span>
            <div className="mt-3 mb-5 flex justify-between items-center">
              <div className="space-x-2">
                <button className="w-5 h-5 rounded-full bg-yellow-500 focus:ring-2 ring-offset-2 ring-yellow-500 transition" />
                <button className="w-5 h-5 rounded-full bg-indigo-500 focus:ring-2 ring-offset-2 ring-indigo-500 transition" />
                <button className="w-5 h-5 rounded-full bg-teal-500 focus:ring-2 ring-offset-2 ring-teal-500 transition" />
              </div>
              <div className="flex items-center space-x-5">
                <button className=" rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500">
                  -
                </button>
                <span>1</span>
                <button className=" rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500">
                  +
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium text-2xl">$450</span>
              <button className="bg-blue-500 py-2 px-8 text-center text-xs text-white rounded-lg">
                Add to cart
              </button>
            </div>
          </div>
        </div>
        
        <form className="flex flex-col space-y-2 p-4">
            <input
              type="text"
              required
              placeholder="Username"
              className="border p-1 border-gray-400 rounded-md peer"
            />
            <span className="hidden peer-valid:block text-gray-500">Great ID!</span>
            <span className="hidden peer-invalid:block text-red-500">This input is invaild.</span>
            <input
              type="submit"
              value="Login"
              className="border bg-indigo-500 text-green-300"
            />

        </form>

        <div className="flex flex-col space-y-2 p-5">
              <details className="open:text-white open:bg-indigo-400">
                <summary className="select-none cursor-pointer">What is my fav food?</summary>
                <span className=" selection:bg-indigo-700 selection:text-white">김치</span>
              </details>

              <ul className=" list-decimal marker:text-teal-500">
                <li className="">HI</li>
                <li className="">Ben</li>
                <li className="">Jung</li>

              </ul>
        </div>
    
    </div>
  )
}

export default Home

/* 
  Modifier
    태그의 '상태'를 관리할 때 사용한다. React와 잘 어울릴 수 밖에 없다. 
    CSS 자체 스팩상 상태 변화 Modifer를 잘 숙지해야 한다. 
    서로 중첩이 가능하다. ex) file:hover:text-yellow-500

  Group Modifier
    1. 어떤 태그가 그룹에 속하는지 먼저 정한다. -> 그룹으로 지정하고 싶은 컨테이너에 'group' 를 부여한다. 반드시 'group' 이어야 한다.
    2. 이 경우 'group-[Modifier]:' 커스텀한 Modifier를 구성할 수 있다. 이를 Group Modifier라고 한다. ex) group-hover:
    3. Group Modifier를 컨테이너 자식 태그에 사용하여 컨테이너의 상태에 따라 자식 태그의 스타일을 변경할 수 있다.
  
  Peer Modifier : 그룹이 아닌 서로다른 태그의 상태에 변화에 따른 스타일 변경(4.7)
    1. 상태가 변화하는 태그에 'peer' 클래스 네임을 부여한다.
    2. 상태의 변화에 따라 스타일이 변화하는 태그에 'peer-[Modifier]' 클래스 네임을 부여한다. 
    3. Slibing Seletor의 활용 -> peer 클래스 네이을 가지는 태그가 먼저 나와야 한다. (한계계)
    4. 순수한 CSS로 React component의 효과를 낼 수 있다.

  새로운 HTML Tag -> <details>,<summary>(4.7-8)
    <span>과 조합으로 순수 HTML으로 아코디언 효과를 얻을 수 있다.

  Responsive Modifiers(4.9-10)
    1. 모든 클래스는 moblie 부터 적용된다. Mobile-first design -> sm,lg,xl,2xl..
    2. Grid-> place-items: center,  place-content: center

  Dark Mode(4.11)
    1. 'drak:' Modifier를 설정하면 된다.
    2. 기본적으로 브라우저의 설정을 따라 간다 (미디어쿼리 때문에) -> config 파일에서 어떤 설정을 따를 것인지 설정가능(React, 선택...). 
    3. darkMode: "media"(default) -> darkMode: "class" 변경후 'dark' classname을 부모 테그(컨테이너) 부여 하면 된다. (ex) 토클)

  Just In Time Complier(4.12)
    1. 3.0 이전에는 배포시 사용하는 클래스를 제외하고 모든 클래스는 CSS 파일에서 삭제를 했다.(Purging)
    2. 3.0 이후에는 사용하는 클래스만 컴파일을 한다 -> Just In Time(JIT) 컴파일 -> 배포시 유용

*/