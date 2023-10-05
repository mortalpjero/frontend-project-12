import axios from 'axios';

import { dataPath } from '../../routes/routes';

const getData = (token) => axios
  .get(dataPath(), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export default getData;
