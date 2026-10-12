import Extend from 'flarum/common/extenders';
import SharedDevicesPage from './components/SharedDevicesPage';

export default [
  new Extend.Admin()
    .page(SharedDevicesPage),
];

