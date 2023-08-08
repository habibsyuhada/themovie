import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css';

import './scripts/components/app-nav';
import main from './scripts/views/main';

$(document).ready(() => {
  main();
});
