import WelcomeBanner from '../components/WelcomeBanner';
import {
  DashboardCard1,
  DashboardCard2,
  DashboardCard3,
} from '../components/DashboardCard';

export const Chart = () => {
  return (
    <div className='container'>
      <WelcomeBanner />
      <div className='grid grid-cols-12 gap-6 m-6'>
        <DashboardCard1 />
        <DashboardCard2 />
        <DashboardCard3 />
      </div>
    </div>
  );
};
