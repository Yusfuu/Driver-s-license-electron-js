import { SearchIcon } from '@heroicons/react/solid';
import {
  ChartSquareBarIcon,
  HomeIcon,
  ClipboardListIcon,
} from '@heroicons/react/outline';

const ProfileSideBar = () => {
  return (
    <div className='flex space-x-4 items-center ml-6 mt-4'>
      <img
        src='https://pbs.twimg.com/profile_images/1413609823359410183/lhlXgJoL_400x400.jpg'
        className='shadow-sm ring-2 ring-blue-500 w-10 h-10 p-1  rounded-full object-cover'
      />
      <div className='flex flex-col space-y-1'>
        <p className='font-bold text-slate-900 text-xs'>Ryan Florence</p>
        <p className='font-bold text-slate-500 text-xs'>@RyanFlorence</p>
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <div className='flex h-screen bg-gray-50'>
      <aside className='z-20 hidden w-64 overflow-y-auto bg-zinc-100 border md:block flex-shrink-0'>
        <div className='py-4 text-gray-500 '>
          <span className='ml-6 text-lg font-bold text-gray-800'>Workflow</span>
          <ProfileSideBar />
          <ul className='mt-6'>
            <li className='relative px-6 py-3'>
              <a
                className='inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 '
                href='../index.html'>
                <HomeIcon className='w-5 h-5' />
                <span className='ml-4'>Dashboard</span>
              </a>
            </li>
          </ul>
          <ul>
            <li className='relative px-6 py-3'>
              <a
                className='inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 '
                href='../forms.html'>
                <ClipboardListIcon className='w-5 h-5' />
                <span className='ml-4'>Forms</span>
              </a>
            </li>
            <li className='relative px-6 py-3'>
              <a
                className='inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 '
                href='../charts.html'>
                <ChartSquareBarIcon className='w-5 h-5' />
                <span className='ml-4'>Charts</span>
              </a>
            </li>
          </ul>
          <div className='px-6 my-6'></div>
        </div>
      </aside>
      <div className='flex flex-col flex-1'>
        <header className='z-10 py-4 bg-white border-b'>
          <div className='container flex items-center justify-between h-full px-6 mx-auto text-purple-600 '>
            <div className='flex justify-center flex-1'>
              <div className='relative w-full max-w-xl mr-6 focus-within:text-purple-500'>
                <div className='absolute inset-y-0 flex items-center pl-3'>
                  <SearchIcon className='w-5 h-5 text-slate-300' />
                </div>

                <input
                  className='transition shadow-sm focus:ring-2 focus:ring-blue-500 border-none  appearance-none w-full text-slate-900 placeholder-slate-400  rounded-lg py-2 pl-10 ring-1 ring-slate-900/10'
                  type='text'
                  placeholder='Filter projects...'
                />
              </div>
            </div>
          </div>
        </header>
        <main className='h-full overflow-y-auto bg-white'>
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
