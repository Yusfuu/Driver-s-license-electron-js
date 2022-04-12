import { SearchIcon } from '@heroicons/react/solid';

const Page = () => {
  return (
    <div className='flex h-screen bg-gray-50 '>
      <aside className='z-20 hidden w-64 overflow-y-auto bg-zinc-100 border  md:block flex-shrink-0'>
        <div className='py-4 text-gray-500 '>
          <a className='ml-6 text-lg font-bold text-gray-800' href='#'>
            Workflow
          </a>
          <ul className='mt-6'>
            <li className='relative px-6 py-3'>
              <a
                className='inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 '
                href='../index.html'>
                <svg
                  className='w-5 h-5'
                  aria-hidden='true'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'></path>
                </svg>
                <span className='ml-4'>Dashboard</span>
              </a>
            </li>
          </ul>
          <ul>
            <li className='relative px-6 py-3'>
              <a
                className='inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 '
                href='../forms.html'>
                <svg
                  className='w-5 h-5'
                  aria-hidden='true'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01'></path>
                </svg>
                <span className='ml-4'>Forms</span>
              </a>
            </li>
            <li className='relative px-6 py-3'>
              <a
                className='inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 '
                href='../cards.html'>
                <svg
                  className='w-5 h-5'
                  aria-hidden='true'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'></path>
                </svg>
                <span className='ml-4'>Cards</span>
              </a>
            </li>
            <li className='relative px-6 py-3'>
              <a
                className='inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 '
                href='../charts.html'>
                <svg
                  className='w-5 h-5'
                  aria-hidden='true'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path d='M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z'></path>
                  <path d='M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z'></path>
                </svg>
                <span className='ml-4'>Charts</span>
              </a>
            </li>
            <li className='relative px-6 py-3'>
              <a
                className='inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 '
                href='../buttons.html'>
                <svg
                  className='w-5 h-5'
                  aria-hidden='true'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path d='M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122'></path>
                </svg>
                <span className='ml-4'>Buttons</span>
              </a>
            </li>
            <li className='relative px-6 py-3'>
              <a
                className='inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 '
                href='../modals.html'>
                <svg
                  className='w-5 h-5'
                  aria-hidden='true'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path d='M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z'></path>
                </svg>
                <span className='ml-4'>Modals</span>
              </a>
            </li>
            <li className='relative px-6 py-3'>
              <a
                className='inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 '
                href='../tables.html'>
                <svg
                  className='w-5 h-5'
                  aria-hidden='true'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path d='M4 6h16M4 10h16M4 14h16M4 18h16'></path>
                </svg>
                <span className='ml-4'>Tables</span>
              </a>
            </li>
          </ul>
          <div className='px-6 my-6'>
            <button className='flex items-center justify-between w-full px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple'>
              Create account
              <span className='ml-2' aria-hidden='true'>
                +
              </span>
            </button>
          </div>
        </div>
      </aside>
      <div className='flex flex-col flex-1'>
        <header className='z-10 py-4 bg-white'>
          <div className='container flex items-center justify-between h-full px-6 mx-auto text-purple-600 '>
            <button className='p-1 -ml-1 mr-5 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple'>
              <svg
                className='w-6 h-6'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 20 20'>
                <path
                  fill-rule='evenodd'
                  d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                  clip-rule='evenodd'></path>
              </svg>
            </button>
            <div className='flex justify-center flex-1 lg:mr-32'>
              <div className='relative w-full max-w-xl mr-6 focus-within:text-purple-500'>
                <div className='absolute inset-y-0 flex items-center pl-2 text-red-300'>
                  <SearchIcon className='w-4 h-4 fill-black text-red-300' />
                  {/* <svg
                    className='w-4 h-4'
                    aria-hidden='true'
                    fill='currentColor'
                    viewBox='0 0 20 20'>
                    <path
                      fill-rule='evenodd'
                      d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                      clip-rule='evenodd'></path>
                  </svg> */}
                </div>

                <input
                  className='focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm'
                  type='text'
                  placeholder='Filter projects...'
                />
              </div>
            </div>
          </div>
        </header>
        <main className='h-full overflow-y-auto'>
          <div className='container px-6 mx-auto grid'>
            <h2 className='my-6 text-2xl font-semibold text-gray-700 '>
              Blank
            </h2>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Page;
