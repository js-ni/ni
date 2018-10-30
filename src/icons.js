import {library} from '@fortawesome/fontawesome-svg-core';

import {
  faCalendarAlt as farCalendarAlt,
  faClock as farClock,
  faMap as farMap,
} from '@fortawesome/free-regular-svg-icons';
import {faGlobeAmericas} from '@fortawesome/free-solid-svg-icons';

// free regular
library.add(farCalendarAlt, farClock, farMap);

// free solid
library.add(faGlobeAmericas);
